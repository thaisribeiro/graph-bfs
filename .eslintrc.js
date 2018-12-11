module.exports = {
  'env': {
    'node': true
  },
  'extends': [
    'standard'
  ],
  'parserOptions': {
    'ecmaVersion': 9,
    'sourceType': 'module',
    'parser': 'babel-eslint'
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
