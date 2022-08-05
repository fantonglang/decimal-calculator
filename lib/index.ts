import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import Decimal from "decimal.js";
import { ExpressionContext, MultiplyingExpressionContext, PowExpressionContext, SignedAtomContext, AtomContext, ScientificContext, ConstantContext, VariableContext, Func_Context, FuncnameContext, calculatorParser } from "./calculatorParser";
import { calculatorVisitor } from "./calculatorVisitor";

import { ANTLRInputStream, CommonTokenStream, CharStreams } from 'antlr4ts';
import { calculatorLexer } from "./calculatorLexer";

class DecimalCalculatorVisitor implements calculatorVisitor<any> {
  bindings:any
  constructor(bindings:any) {
		this.bindings = bindings
	}

  visitExpression(ctx: ExpressionContext): any {
    const len_children = ctx.childCount
		let dec0 = ctx.getChild(0).accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt(((len_children - 1) / 2).toString())
		for (let i=0; i<count; ++i) {
			const op_idx = 2 * i + 1
			const c_idx = 2 * i + 2
			const dec = ctx.getChild(c_idx).accept(this)
			const op = ctx.getChild(op_idx).text
			if (op == '+') {
				dec0 = dec0.add(dec)
			} else if (op == '-') {
				dec0 = dec0.minus(dec)
			}
		}
		return dec0
  }
  visitMultiplyingExpression(ctx: MultiplyingExpressionContext): any {
    const len_children = ctx.childCount
		let dec0 = ctx.getChild(0).accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt(((len_children - 1) / 2).toString())
		for (let i=0; i<count; ++i) {
			const op_idx = 2 * i + 1
			const c_idx = 2 * i + 2
			const dec = ctx.getChild(c_idx).accept(this)
			const op = ctx.getChild(op_idx).text
			if (op == '*') {
				dec0 = dec0.mul(dec)
			} else if (op == '/') {
				dec0 = dec0.div(dec)
			}
		}
		return dec0
  }
  visitPowExpression(ctx: PowExpressionContext): any {
    const len_children = ctx.childCount
		let dec0 = ctx.getChild(0).accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt(((len_children - 1) / 2).toString())
		for (let i=0; i<count; ++i) {
			const c_idx = 2 * i + 2
			const dec = ctx.getChild(c_idx).accept(this)
			dec0 = dec0.pow(dec)
		}
		return dec0
  }
  visitSignedAtom(ctx: SignedAtomContext): any {
    const len_children = ctx.childCount
		if (len_children == 1) {
			const func_ = ctx.func_()
			if (func_) {
				return func_!.accept(this)
			}
			const atom = ctx.atom()
			if (atom) {
				return atom!.accept(this)
			}
			return null
		}
		const sign = ctx.getChild(0).text
		const signedAtom = ctx.signedAtom()!.accept(this)
		if (sign == '-') {
			return signedAtom.neg()
		}
		return signedAtom
  }
  visitAtom(ctx: AtomContext): any {
    const len_children = ctx.childCount
		if (len_children == 1) {
			const constant = ctx.constant()
			if (constant) {
				return constant!.accept(this)
			}
			const scientific = ctx.scientific()
			if (scientific) {
				return scientific!.accept(this)
			}
			const variable = ctx.variable()
			if (variable) {
				return variable!.accept(this)
			}
			return null
		}
		const exp = ctx.expression()
		return exp!.accept(this);
  }
  visitScientific(ctx: ScientificContext): any {
    const txt = ctx.text
		return new Decimal(txt)
  }
  visitConstant(ctx: ConstantContext): any {
    const txt = ctx.text
		if (txt == 'pi') {
			return new Decimal(Math.PI)
		} else if (txt == 'e') {
			return new Decimal(Math.E)
		}
		return null
  }
  visitVariable(ctx: VariableContext): any {
    const txt = ctx.text
		const bindings = this.bindings
		if (!bindings || Object.keys(bindings).indexOf(txt) < 0) {
			throw new Error(`the variable ${txt} has no value`)
		}
		const value = bindings[txt]
		if (value instanceof Decimal) {
			return value
		}
		return new Decimal(value)
  }
  visitFunc_(ctx: Func_Context): any {
    const funcname = ctx.funcname().accept(this);
		const arg1 = ctx.getChild(2).accept(this);
		switch(funcname) {
			case 'cos':
				return arg1.cos();
			case 'tan':
				return arg1.tan();
			case 'sin':
				return arg1.sin();
			case 'acos':
				return arg1.acos();
			case 'atan':
				return arg1.atan();
			case 'asin':
				return arg1.asin();
			case 'log':
				return arg1.log();
			case 'ln':
				return arg1.ln();
			case 'sqrt':
				return arg1.sqrt();
			case 'floor':
				return arg1.floor();
			case 'ceil':
				return arg1.ceil();
			case 'round':
				return arg1.round();
			case 'round2':
				return arg1.minus(new Decimal(0.5)).ceil()
			default:
				return arg1
		}
  }
  visitFuncname(ctx: FuncnameContext): any {
    return ctx.text;
  }
  visit(tree: ParseTree): any {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): any {
    const result = []
    for(let i=0; i<node.childCount; ++i) {
      result.push(node.getChild(i).accept(this))
    }
    return result
  }
  visitTerminal(node: TerminalNode): any {
    return node.text;
  }
  visitErrorNode(node: ErrorNode): any {
    throw new Error(`[error node] ${node.text}`)
  }

}

export function calc_decimal(formula:string, bindings:object | null = null): Decimal {
  // Create the lexer and parser
  const inputStream = CharStreams.fromString(formula)
  const lexer = new calculatorLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new calculatorParser(tokenStream)
  parser.buildParseTree = true
  // Parse the input, where `expression` is whatever entry point you defined
  let tree = parser.expression()
  const result = tree.accept(new DecimalCalculatorVisitor(bindings))
  return result
}

export function calc(formula:string, bindings:object | null = null): number {
  return calc_decimal(formula, bindings).toNumber()
}