require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  // development || production
  mode: process.env.WEBPACK_ENV,
  // maps console logs to the correct location in the source
  devtool: 'cheap-module-source-map',
  // the javascript file to start compiling at
  entry: path.resolve(__dirname, 'app/index.js'),
  module: {
    rules: [
      // passes js files through a babel parser
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  // outputs the compiled file (index.js) to the /compiled directory
  output: {
    path: path.resolve(__dirname, 'compiled'),
    filename: 'index.js',
  },
  plugins: [
    // runs flow on compile
    new FlowBabelWebpackPlugin(),
    // replaces env variables with the values
    new Dotenv({ systemvars: true }),
  ],
  // tells webpack where to look for imports (node_modules || app)
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      app: path.resolve(__dirname, 'app'),
    },
  },
};
