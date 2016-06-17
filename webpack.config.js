const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: { 
    path: path.join(__dirname, '/dist'), 
    publicPath: '/',
    filename: 'bundle.js' }, 
  module: {
    loaders: [
      // JAVASCRIPT
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
};