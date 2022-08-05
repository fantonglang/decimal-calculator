// Generated from calculator.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import Decimal from "decimal.js";

// This class defines a complete generic visitor for a parse tree produced by calculatorParser.

export default class calculatorVisitor extends antlr4.tree.ParseTreeVisitor {
	constructor(bindings) {
		this.bindings = bindings
	}

	// Visit a parse tree produced by calculatorParser#expression.
	visitExpression(ctx) {
	  const len_children = ctx.children.length
		let dec0 = ctx.children[0].accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt((len_children - 1) / 2)
		for (let i=0; i<count; ++i) {
			const op_idx = 2 * i + 1
			const c_idx = 2 * i + 2
			const dec = ctx.children[c_idx].accept(this)
			const op = ctx.children[op_idx].getText()
			if (op == '+') {
				dec0 = dec0.add(dec)
			} else if (op == '-') {
				dec0 = dec0.minus(dec)
			}
		}
		return dec0
	}


	// Visit a parse tree produced by calculatorParser#multiplyingExpression.
	visitMultiplyingExpression(ctx) {
	  const len_children = ctx.children.length
		let dec0 = ctx.children[0].accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt((len_children - 1) / 2)
		for (let i=0; i<count; ++i) {
			const op_idx = 2 * i + 1
			const c_idx = 2 * i + 2
			const dec = ctx.children[c_idx].accept(this)
			const op = ctx.children[op_idx].getText()
			if (op == '*') {
				dec0 = dec0.mul(dec)
			} else if (op == '/') {
				dec0 = dec0.div(dec)
			}
		}
		return dec0
	}


	// Visit a parse tree produced by calculatorParser#powExpression.
	visitPowExpression(ctx) {
	  const len_children = ctx.children.length
		let dec0 = ctx.children[0].accept(this)
		if (len_children == 1) {
			return dec0
		}
		const count = Number.parseInt((len_children - 1) / 2)
		for (let i=0; i<count; ++i) {
			const c_idx = 2 * i + 2
			const dec = ctx.children[c_idx].accept(this)
			dec0 = dec0.pow(dec)
		}
		return dec0
	}


	// Visit a parse tree produced by calculatorParser#signedAtom.
	visitSignedAtom(ctx) {
	  const len_children = ctx.children.length
		if (len_children == 1) {
			const func_ = ctx.func_()
			if (func_ !== null) {
				return func_.accept(this)
			}
			const atom = ctx.atom()
			if (atom !== null) {
				return atom.accept(this)
			}
			return null
		}
		const sign = ctx.children[0].getText()
		const signedAtom = ctx.signedAtom().accept(this)
		if (sign == '-') {
			return signedAtom.neg()
		}
		return signedAtom
	}


	// Visit a parse tree produced by calculatorParser#atom.
	visitAtom(ctx) {
	  const len_children = ctx.children.length
		if (len_children == 1) {
			const constant = ctx.constant()
			if (constant !== null) {
				return constant.accept(this)
			}
			const scientific = ctx.scientific()
			if (scientific !== null) {
				return scientific.accept(this)
			}
			const variable = ctx.variable()
			if (variable !== null) {
				return variable.accept(this)
			}
			return null
		}
		const exp = ctx.expression()
		return exp.accept(this);
	}


	// Visit a parse tree produced by calculatorParser#scientific.
	visitScientific(ctx) {
	  const txt = ctx.getText();
		return new Decimal(txt);
	}


	// Visit a parse tree produced by calculatorParser#constant.
	visitConstant(ctx) {
	  const txt = ctx.getText();
		if (txt == 'pi') {
			return new Decimal(Math.PI);
		} else if (txt == 'e') {
			return new Decimal(Math.E);
		}
		return null;
	}


	// Visit a parse tree produced by calculatorParser#variable.
	visitVariable(ctx) {
	  const txt = ctx.getText();
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


	// Visit a parse tree produced by calculatorParser#func_.
	visitFunc_(ctx) {
	  const funcname = ctx.funcname().accept(this);
		const arg1 = ctx.children[2].accept(this);
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


	// Visit a parse tree produced by calculatorParser#funcname.
	visitFuncname(ctx) {
	  return ctx.getText();
	}



}