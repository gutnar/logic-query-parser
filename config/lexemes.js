var lexerHelper = require('../lib/helpers/lexer.js');
var syntaxerHelper = require('../lib/helpers/syntaxer.js');
var postHelper = require('../lib/helpers/post.js');

var andLexeme = {
  regexp: 'and(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('and', 3),
  syntaxer: syntaxerHelper.andSyntaxer,
  priority: 4,
  checker: ['endBlock', null]
};

var orLexeme = {
  regexp: 'or(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('or', 2),
  syntaxer: syntaxerHelper.orSyntaxer,
  priority: 5,
  checker: ['endBlock', null]
};

var startBlockLexeme = {
  regexp: '\\(',
  escaped: true,
  lexer: lexerHelper.generateCutLexer('startBlock', 1),
  syntaxer: syntaxerHelper.blockSyntaxer,
  priority: 0,
  postFunction: postHelper.blockPostTreatment,
  checker: ['endBlock', null]
};

var endBlockLexeme = {
  regexp: '\\)',
  escaped: true,
  lexer: lexerHelper.generateCutLexer('endBlock', 1),
};

var stringLexeme = {
  regexp: '"?.*',
  lexer: lexerHelper.stringLexer([startBlockLexeme, endBlockLexeme]),
  syntaxer: syntaxerHelper.stringSyntaxer,
  priority: 0
};

var equalsLexeme = {
  regexp: '\=(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('equals', 1),
  syntaxer: syntaxerHelper.generateBasicSyntaxer('equals'),
  priority: 2
};

var gtLexeme = {
  regexp: '\>(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('gt', 1),
  syntaxer: syntaxerHelper.generateBasicSyntaxer('gt'),
  priority: 2
};

var gteLexeme = {
  regexp: '\>\=(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('gte', 2),
  syntaxer: syntaxerHelper.generateBasicSyntaxer('gte'),
  priority: 2
};

var ltLexeme = {
  regexp: '\<(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('lt', 1),
  syntaxer: syntaxerHelper.generateBasicSyntaxer('lt'),
  priority: 2
};

var lteLexeme = {
  regexp: '\<\=(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('lte', 2),
  syntaxer: syntaxerHelper.generateBasicSyntaxer('lte'),
  priority: 2
};

var notLexeme = {
  regexp: 'not(\\s|\\(|\\)|"|$)',
  escaped: true,
  modifiers: 'i',
  lexer: lexerHelper.generateCutLexer('not', 3),
  syntaxer: syntaxerHelper.notSyntaxer,
  priority: 3
};

module.exports = {
  not: notLexeme,
  equals: equalsLexeme,
  gt: gtLexeme,
  lt: ltLexeme,
  gte: gteLexeme,
  lte: lteLexeme,
  and: andLexeme,
  or: orLexeme,
  startBlock: startBlockLexeme,
  endBlock: endBlockLexeme,
  string: stringLexeme
};
