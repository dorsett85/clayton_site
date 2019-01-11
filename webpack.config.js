const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'frontend/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/dist')
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  devServer: {
    contentBase: path.resolve(__dirname, 'frontend/dist'),
    hotOnly: true,
    proxy: {
      '**': 'http://127.0.0.1:3000/'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'frontend/src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};