module.exports = {
  root: false,
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "jsx-a11y/href-no-hash": ["off"],
    "import/extension": "off",
    "generator-star-spacing": ["warn"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info", "group", "groupEnd"],
      },
    ],
    "no-throw-literal": 0,
    "no-extend-native": 0,
    complexity: [
      "error",
      {
        max: 10,
      },
    ],
    "func-names": 0,
    "no-unused-vars": [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    "no-warning-comments": "warn",
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  ignorePatterns: ["db/*"],
};
