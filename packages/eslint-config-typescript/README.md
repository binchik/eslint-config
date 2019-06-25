# @binur95/eslint-config-typescript

[![Version](https://img.shields.io/npm/v/@anvilabs/eslint-config-typescript.svg)](http://npm.im/@anvilabs/eslint-config-typescript)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config/status.svg?path=packages/eslint-config-typescript)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-typescript)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config/dev-status.svg?path=packages/eslint-config-typescript)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-typescript&type=dev)

Anvilabs' ESLint config for our Typescript codebases.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier @binur95/eslint-config @binur95/eslint-config-typescript --dev
# or
$ npm install eslint prettier @binur95/eslint-config @binur95/eslint-config-typescript --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@binur95/eslint-config', '@binur95/eslint-config-typescript' /* and maybe '@binur95/eslint-config-typescript/react' or '@binur95/eslint-config-typescript/react-native' */],
  rules: {
    // your overrides
  },
};
```

Additional configs include:

- `'@binur95/eslint-config-typescript/react'` for usage with [React](https://reactjs.org/)
- `'@binur95/eslint-config-typescript/react-native'` for usage with [React Native](https://facebook.github.io/react-native/)

## License

[MIT License](../../LICENSE) © Anvilabs LLC
