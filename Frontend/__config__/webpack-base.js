const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./utility/paths')(__dirname)

module.exports = {
  //input
  entry: {
    index: paths.entry,
    // home: paths.src + '/pages/home/home'
  },

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
    filename: 'static/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vsevolod Trofimov',
      template: paths.template,
      filename: '../index.html'})
  ],

  //dev
  devtool: 'source-map',
  devServer: {
    port: 80
  }
}
