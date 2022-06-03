const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    static: './dist',
    open: true
  },

  mode: process.env.NODE_ENV === "production" ? "production" : "development" 
};