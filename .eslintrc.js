const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    commonjs: true,
    'shared-node-browser': true,
    worker: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {},
  plugins: [],
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:n/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {},
  settings: {},
  overrides: [],
})
