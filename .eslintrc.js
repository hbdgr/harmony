module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'import/extensions': ['error', 'always', { vue: 'never', js: 'never'}],
    'max-len': ['error', { code: 120 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
