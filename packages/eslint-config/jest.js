module.exports = {
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules: {
    'max-nested-callbacks': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
    // https://github.com/jest-community/eslint-plugin-jest
    'jest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'it'}],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': 'off',
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'off',
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-tothrow-message': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-empty-title': 'error',
    'jest/no-mocks-import': 'error',
    'jest/prefer-called-with': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'error',
  },
};
