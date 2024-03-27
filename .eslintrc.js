module.exports = {
  extends: 'love',
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
    'no-warning-comments': 'warn',
  },
  globals: {
    cy: true,
    Cypress: true,
  },
}
