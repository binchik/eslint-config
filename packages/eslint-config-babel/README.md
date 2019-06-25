# @binur95/eslint-config-babel

[![Version](https://img.shields.io/npm/v/@anvilabs/eslint-config-babel.svg)](http://npm.im/@anvilabs/eslint-config-babel)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config/status.svg?path=packages/eslint-config-babel)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-babel)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config/dev-status.svg?path=packages/eslint-config-babel)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-babel&type=dev)

Anvilabs' ESLint config for our Babel codebases.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier @binur95/eslint-config @binur95/eslint-config-babel --dev
# or
$ npm install eslint prettier @binur95/eslint-config @binur95/eslint-config-babel --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@binur95/eslint-config', '@binur95/eslint-config-babel' /* and maybe '@binur95/eslint-config-babel/babel-module' */],
  rules: {
    // your overrides
  },
};
```

Additional configs include:

- `'@binur95/eslint-config-babel/babel-module'` for usage with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

## License

[MIT License](../../LICENSE) © Anvilabs LLC
