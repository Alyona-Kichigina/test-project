module.exports = {

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],

  root: true,

  env: {
    node: true
  },

  rules: {
    camelcase: 0,
    'no-unused-expressions': 0,
    'comma-dangle': 0
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
