// Generated from lib/calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionContext } from "./calculatorParser";
import { MultiplyingExpressionContext } from "./calculatorParser";
import { PowExpressionContext } from "./calculatorParser";
import { SignedAtomContext } from "./calculatorParser";
import { AtomContext } from "./calculatorParser";
import { ScientificContext } from "./calculatorParser";
import { ConstantContext } from "./calculatorParser";
import { VariableContext } from "./calculatorParser";
import { Func_Context } from "./calculatorParser";
import { FuncnameContext } from "./calculatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `calculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface calculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `calculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.powExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowExpression?: (ctx: PowExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.signedAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedAtom?: (ctx: SignedAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.scientific`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScientific?: (ctx: ScientificContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.func_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_?: (ctx: Func_Context) => Result;

	/**
	 * Visit a parse tree produced by `calculatorParser.funcname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncname?: (ctx: FuncnameContext) => Result;
}

