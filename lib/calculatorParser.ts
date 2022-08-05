// Generated from lib/calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { calculatorListener } from "./calculatorListener";
import { calculatorVisitor } from "./calculatorVisitor";


export class calculatorParser extends Parser {
	public static readonly FLOOR = 1;
	public static readonly CEIL = 2;
	public static readonly ROUND = 3;
	public static readonly ROUND2 = 4;
	public static readonly COS = 5;
	public static readonly SIN = 6;
	public static readonly TAN = 7;
	public static readonly ACOS = 8;
	public static readonly ASIN = 9;
	public static readonly ATAN = 10;
	public static readonly LN = 11;
	public static readonly LOG = 12;
	public static readonly SQRT = 13;
	public static readonly LPAREN = 14;
	public static readonly RPAREN = 15;
	public static readonly PLUS = 16;
	public static readonly MINUS = 17;
	public static readonly TIMES = 18;
	public static readonly DIV = 19;
	public static readonly GT = 20;
	public static readonly LT = 21;
	public static readonly EQ = 22;
	public static readonly COMMA = 23;
	public static readonly POINT = 24;
	public static readonly POW = 25;
	public static readonly PI = 26;
	public static readonly EULER = 27;
	public static readonly VARIABLE = 28;
	public static readonly SCIENTIFIC_NUMBER = 29;
	public static readonly WS = 30;
	public static readonly RULE_expression = 0;
	public static readonly RULE_multiplyingExpression = 1;
	public static readonly RULE_powExpression = 2;
	public static readonly RULE_signedAtom = 3;
	public static readonly RULE_atom = 4;
	public static readonly RULE_scientific = 5;
	public static readonly RULE_constant = 6;
	public static readonly RULE_variable = 7;
	public static readonly RULE_func_ = 8;
	public static readonly RULE_funcname = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "multiplyingExpression", "powExpression", "signedAtom", 
		"atom", "scientific", "constant", "variable", "func_", "funcname",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'floor'", "'ceil'", "'round'", "'round2'", "'cos'", "'sin'", 
		"'tan'", "'acos'", "'asin'", "'atan'", "'ln'", "'log'", "'sqrt'", "'('", 
		"')'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'='", "','", "'.'", 
		"'^'", "'pi'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FLOOR", "CEIL", "ROUND", "ROUND2", "COS", "SIN", "TAN", "ACOS", 
		"ASIN", "ATAN", "LN", "LOG", "SQRT", "LPAREN", "RPAREN", "PLUS", "MINUS", 
		"TIMES", "DIV", "GT", "LT", "EQ", "COMMA", "POINT", "POW", "PI", "EULER", 
		"VARIABLE", "SCIENTIFIC_NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(calculatorParser._LITERAL_NAMES, calculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return calculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return calculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return calculatorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(calculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, calculatorParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.multiplyingExpression();
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.PLUS || _la === calculatorParser.MINUS) {
				{
				{
				this.state = 21;
				_la = this._input.LA(1);
				if (!(_la === calculatorParser.PLUS || _la === calculatorParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 22;
				this.multiplyingExpression();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, calculatorParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.powExpression();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.TIMES || _la === calculatorParser.DIV) {
				{
				{
				this.state = 29;
				_la = this._input.LA(1);
				if (!(_la === calculatorParser.TIMES || _la === calculatorParser.DIV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 30;
				this.powExpression();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public powExpression(): PowExpressionContext {
		let _localctx: PowExpressionContext = new PowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, calculatorParser.RULE_powExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.signedAtom();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.POW) {
				{
				{
				this.state = 37;
				this.match(calculatorParser.POW);
				this.state = 38;
				this.signedAtom();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, calculatorParser.RULE_signedAtom);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calculatorParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.match(calculatorParser.PLUS);
				this.state = 45;
				this.signedAtom();
				}
				break;
			case calculatorParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 46;
				this.match(calculatorParser.MINUS);
				this.state = 47;
				this.signedAtom();
				}
				break;
			case calculatorParser.FLOOR:
			case calculatorParser.CEIL:
			case calculatorParser.ROUND:
			case calculatorParser.ROUND2:
			case calculatorParser.COS:
			case calculatorParser.SIN:
			case calculatorParser.TAN:
			case calculatorParser.ACOS:
			case calculatorParser.ASIN:
			case calculatorParser.ATAN:
			case calculatorParser.LN:
			case calculatorParser.LOG:
			case calculatorParser.SQRT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.func_();
				}
				break;
			case calculatorParser.LPAREN:
			case calculatorParser.PI:
			case calculatorParser.EULER:
			case calculatorParser.VARIABLE:
			case calculatorParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, calculatorParser.RULE_atom);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calculatorParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.scientific();
				}
				break;
			case calculatorParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.variable();
				}
				break;
			case calculatorParser.PI:
			case calculatorParser.EULER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.constant();
				}
				break;
			case calculatorParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 55;
				this.match(calculatorParser.LPAREN);
				this.state = 56;
				this.expression();
				this.state = 57;
				this.match(calculatorParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scientific(): ScientificContext {
		let _localctx: ScientificContext = new ScientificContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, calculatorParser.RULE_scientific);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this.match(calculatorParser.SCIENTIFIC_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, calculatorParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			_la = this._input.LA(1);
			if (!(_la === calculatorParser.PI || _la === calculatorParser.EULER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, calculatorParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(calculatorParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_(): Func_Context {
		let _localctx: Func_Context = new Func_Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, calculatorParser.RULE_func_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.funcname();
			this.state = 68;
			this.match(calculatorParser.LPAREN);
			this.state = 69;
			this.expression();
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.COMMA) {
				{
				{
				this.state = 70;
				this.match(calculatorParser.COMMA);
				this.state = 71;
				this.expression();
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this.match(calculatorParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, calculatorParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.FLOOR) | (1 << calculatorParser.CEIL) | (1 << calculatorParser.ROUND) | (1 << calculatorParser.ROUND2) | (1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG) | (1 << calculatorParser.SQRT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03 T\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x03\x03\x03\x03\x03\x07\x03\"\n" +
		"\x03\f\x03\x0E\x03%\v\x03\x03\x04\x03\x04\x03\x04\x07\x04*\n\x04\f\x04" +
		"\x0E\x04-\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"5\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		">\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\nK\n\n\f\n\x0E\nN\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x02\x02" +
		"\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x02\x06\x03\x02\x12\x13\x03\x02\x14\x15\x03\x02\x1C\x1D\x03\x02" +
		"\x03\x0F\x02S\x02\x16\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06&\x03" +
		"\x02\x02\x02\b4\x03\x02\x02\x02\n=\x03\x02\x02\x02\f?\x03\x02\x02\x02" +
		"\x0EA\x03\x02\x02\x02\x10C\x03\x02\x02\x02\x12E\x03\x02\x02\x02\x14Q\x03" +
		"\x02\x02\x02\x16\x1B\x05\x04\x03\x02\x17\x18\t\x02\x02\x02\x18\x1A\x05" +
		"\x04\x03\x02\x19\x17\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03" +
		"\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x03\x03\x02\x02\x02\x1D\x1B\x03" +
		"\x02\x02\x02\x1E#\x05\x06\x04\x02\x1F \t\x03\x02\x02 \"\x05\x06\x04\x02" +
		"!\x1F\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02" +
		"\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02\x02&+\x05\b\x05\x02\'(\x07\x1B" +
		"\x02\x02(*\x05\b\x05\x02)\'\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02" +
		"\x02\x02+,\x03\x02\x02\x02,\x07\x03\x02\x02\x02-+\x03\x02\x02\x02./\x07" +
		"\x12\x02\x02/5\x05\b\x05\x0201\x07\x13\x02\x0215\x05\b\x05\x0225\x05\x12" +
		"\n\x0235\x05\n\x06\x024.\x03\x02\x02\x0240\x03\x02\x02\x0242\x03\x02\x02" +
		"\x0243\x03\x02\x02\x025\t\x03\x02\x02\x026>\x05\f\x07\x027>\x05\x10\t" +
		"\x028>\x05\x0E\b\x029:\x07\x10\x02\x02:;\x05\x02\x02\x02;<\x07\x11\x02" +
		"\x02<>\x03\x02\x02\x02=6\x03\x02\x02\x02=7\x03\x02\x02\x02=8\x03\x02\x02" +
		"\x02=9\x03\x02\x02\x02>\v\x03\x02\x02\x02?@\x07\x1F\x02\x02@\r\x03\x02" +
		"\x02\x02AB\t\x04\x02\x02B\x0F\x03\x02\x02\x02CD\x07\x1E\x02\x02D\x11\x03" +
		"\x02\x02\x02EF\x05\x14\v\x02FG\x07\x10\x02\x02GL\x05\x02\x02\x02HI\x07" +
		"\x19\x02\x02IK\x05\x02\x02\x02JH\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03" +
		"\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NL\x03\x02\x02\x02OP\x07" +
		"\x11\x02\x02P\x13\x03\x02\x02\x02QR\t\x05\x02\x02R\x15\x03\x02\x02\x02" +
		"\b\x1B#+4=L";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calculatorParser.__ATN) {
			calculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(calculatorParser._serializedATN));
		}

		return calculatorParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.PLUS);
		} else {
			return this.getToken(calculatorParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.MINUS);
		} else {
			return this.getToken(calculatorParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_expression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public powExpression(): PowExpressionContext[];
	public powExpression(i: number): PowExpressionContext;
	public powExpression(i?: number): PowExpressionContext | PowExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PowExpressionContext);
		} else {
			return this.getRuleContext(i, PowExpressionContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.TIMES);
		} else {
			return this.getToken(calculatorParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.DIV);
		} else {
			return this.getToken(calculatorParser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowExpressionContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext[];
	public signedAtom(i: number): SignedAtomContext;
	public signedAtom(i?: number): SignedAtomContext | SignedAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignedAtomContext);
		} else {
			return this.getRuleContext(i, SignedAtomContext);
		}
	}
	public POW(): TerminalNode[];
	public POW(i: number): TerminalNode;
	public POW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.POW);
		} else {
			return this.getToken(calculatorParser.POW, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_powExpression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterPowExpression) {
			listener.enterPowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitPowExpression) {
			listener.exitPowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitPowExpression) {
			return visitor.visitPowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.MINUS, 0); }
	public func_(): Func_Context | undefined {
		return this.tryGetRuleContext(0, Func_Context);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitSignedAtom) {
			return visitor.visitSignedAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public scientific(): ScientificContext | undefined {
		return this.tryGetRuleContext(0, ScientificContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_atom; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScientificContext extends ParserRuleContext {
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(calculatorParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_scientific; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterScientific) {
			listener.enterScientific(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitScientific) {
			listener.exitScientific(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitScientific) {
			return visitor.visitScientific(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public PI(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.PI, 0); }
	public EULER(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.EULER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_constant; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(calculatorParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_variable; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_Context extends ParserRuleContext {
	public funcname(): FuncnameContext {
		return this.getRuleContext(0, FuncnameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(calculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(calculatorParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.COMMA);
		} else {
			return this.getToken(calculatorParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_func_; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterFunc_) {
			listener.enterFunc_(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitFunc_) {
			listener.exitFunc_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitFunc_) {
			return visitor.visitFunc_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public COS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.TAN, 0); }
	public SIN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.SIN, 0); }
	public ACOS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ACOS, 0); }
	public ATAN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ATAN, 0); }
	public ASIN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ASIN, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LN, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.SQRT, 0); }
	public FLOOR(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.FLOOR, 0); }
	public CEIL(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.CEIL, 0); }
	public ROUND(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ROUND, 0); }
	public ROUND2(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ROUND2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_funcname; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


