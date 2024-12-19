const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/storefront-products.js',
  output: {
    filename: 'storefront-products.js',
    path: path.resolve(__dirname, 'assets'),
  },
};