/* eslint-env node */

module.exports = {
  'extends': ['eslint:recommended'],
  'rules': {
    'array-bracket-newline': ['warn', "consistent"],
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'never'],
    'brace-style': ['warn', '1tbs', {'allowSingleLine': true}],
    'comma-dangle': ['warn', 'only-multiline'],
    'comma-spacing': ['warn', {'before': false, 'after': true}],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'func-name-matching': ['warn', 'always'],
    'function-paren-newline': ['warn', 'multiline'],
    'indent': ['warn', 2, {'SwitchCase': 1}],
    'key-spacing': ['warn', {'beforeColon': false, 'afterColon': true}],
    'keyword-spacing': ['warn', {'before': true, 'after': true}],
    'linebreak-style': ['warn', 'unix'],
    'max-len': ['warn', {'code': 80, 'ignoreComments': true}],
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-parens': 'warn',
    'newline-per-chained-call': ['warn', {'ignoreChainWithDepth': 2}],
    'no-array-constructor': 'warn',
    'no-console': 'warn',
    'no-continue': 'warn',
    'no-lonely-if': 'warn',
    'no-mixed-operators': 'warn',
    'no-multi-assign': 'warn',
    'no-multiple-empty-lines': ['warn', {'max': 2, 'maxEOF': 1, 'maxBOF': 1}],
    'no-negated-condition': 'warn',
    'no-new-object': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': [
      'warn',
      {'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true}
    ],
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': 'warn',
    'object-curly-newline': ['warn', {'multiline': true, 'consistent': true}],
    'object-curly-spacing': ['warn', 'never'],
    'object-property-newline':
      ['warn', {'allowMultiplePropertiesPerLine': true}],
    'one-var': ['warn', 'never'],
    'operator-linebreak': ['warn', 'before', {'overrides': {'=': 'after'}}],
    'padded-blocks': ['warn', {'classes': 'always'}],
    'quotes': ['warn', 'single', {'avoidEscape': true}],
    'require-jsdoc': [
      'warn',
      {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true
        }
      }
    ],
    'semi': ['warn', 'always'],
    'semi-spacing': ['warn', {'before': false, 'after': true}],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': 'warn',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': ['warn', 'always'],
    'switch-colon-spacing': 'warn',
    'unicode-bom': ['warn', 'never'],

    // ES6
    'arrow-spacing': 'warn',
    'generator-star-spacing': ['warn', {'before': true, 'after': false}],
    'no-confusing-arrow': 'warn',
    'no-duplicate-imports': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'template-curly-spacing': 'warn',
    'yield-star-spacing': ['warn', 'before']
  }
};
