# @vocovo/eslint-config-v2

This VoCoVo linting standard expects developers to use Prettier for code formatting, and ESLint for code smell. This config uses Prettier both inside and outside ESLint. ESLint is only concerned with Javascript, but Prettier can format many different languages. The detail below explains how to use Prettier to good effect in both situations.

## Installation in your project

You will need to have `eslint` and `prettier` installed to use this: `npm install --save-dev eslint prettier`.

1. Install with: `npm install --save-dev eslint-config-vocovo`

2. Add `"extends": ["vocovo"]` to your `.eslintrc` file to enable the config

### For formatting independent of ESLint

If you choose to run prettier on its own you will need to give prettier a config. Typically this is done with a `.prettierrc` file into which you add rules.

Manually defining/maintaining prettier rules in your own project risks it falling out of sync with this config, so one way to use this project's `.prettierrc` file _without_ defining rules manually is to add a `"prettier"` key within your `package.json` thus:

```
"prettier": "eslint-config-vocovo/prettierrc"
```

## Configuring VSCode so linting and auto-fixing work

1. Install [Prettier for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Install [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. Open the VSCode settings (Code -> Preferences -> Settings) in json mode, using the `{}` symbol in the top right of the setting screen. then, ensure you have at least the following defined:

```js
{
  // ESLint auto-fixes JS by using Prettier in the background. ESLint requires one of two possible settings
  // depending on the VSCode ESLint plugin version: eslint.autoFixOnSave or editor.codeActionsOnSave.
  // When using Prettier on non-JS files, Prettier expects to see editor.formatOnSave.
  // Thus both settings are necessary.

  // INSTRUCTIONS FOR VSCODE ESLINT PLUGING 1.X (delete as applicable)
  "eslint.autoFixOnSave": true,

  // INSTRUCTIONS FOR VSCODE ESLINT PLUGING 2.X (delete as applicable)
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // We enable this here, but _disable_ it (below) on the files we want ESLint to handle.
  "editor.formatOnSave": true,

  // Turn it OFF for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },

  // We want to use vanilla Prettier (i.e not via ESLint) for other languages like CSS and HTML.
  // But we turn it off for JS since we are doing it through Eslint
  "prettier.disableLanguages": ["javascript", "javascriptreact"]
}
```

## Maintenance

All contributions are welcome and encouraged. If this standard doesn't suit your purposes it would be better that we modify this standard so it does, rather than overriding it within each project.

## Publishing

To publish a version:

1. Create a PR which bumps the version number and get it reviewed and merged
2. Create a release on Github with the new version as the tag and title (no description needed), the release should target `main`
3. Authorise your NPM account either with `npm login` (if you have an account) or by using the `Publish token` listed at the bottom of the `NPM - Machine User` entry in 1Password. The publish token should be set in an environment variable `NPM_PUBLISH_TOKEN`. If you use the publish token, you will need to use the two factor code in 1Password when publishing.
4. Checkout `main`, make sure the branch is up to date, and run `npm publish`.
