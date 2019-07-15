module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['import', 'prettier'],
  extends: ['react-app', 'prettier'],
  rules: {
    'prettier/prettier': 1,
  },
};
