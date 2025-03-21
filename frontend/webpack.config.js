const path = require('path');

module.exports = {
  entry: './src/index.js', // your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
  module: {
    rules: [
      // Add other rules if necessary for your project
    ],
  },
};