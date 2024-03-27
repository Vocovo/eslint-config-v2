const prettierrc = require('./prettierrc')

module.exports = {
  extends: ['prettier-standard'],
  env: {
    jest: true,
  },
  rules: {
    'generator-star-spacing': ['warn'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info', 'group', 'groupEnd'],
      },
    ],
    'no-throw-literal': 0,
    'no-extend-native': 0,
    complexity: [
      'error',
      {
        max: 10,
      },
    ],
    'func-names': 0,
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    'standard/no-callback-literal': 0,
    'no-warning-comments': 'warn',
    'prettier/prettier': ['error', prettierrc],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
  globals: {
    cy: true,
    Cypress: true,
  },
}
