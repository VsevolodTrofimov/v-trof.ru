const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const paths = require('./utility/paths')(__dirname)

module.exports = {
  //input
  entry: paths.entry,

  //transform
  module: {
    rules: [
      require('./rules/alias')(__dirname),
      require('./rules/js-jsx')(__dirname),
      require('./rules/css')(__dirname),
      require('./rules/svg')(__dirname)
    ]
  },

  //output
  output: {
    path: paths.dist,
    filename: 'app.js'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'Vsevolod Trofimov',
      template: paths.template,
      filename: 'index.html'})
  ],

  //dev
  devtool: 'source-map',
  devServer: {
    port: 80
  }
}
