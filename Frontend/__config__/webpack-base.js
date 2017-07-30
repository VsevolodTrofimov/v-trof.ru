const webpack = require('webpack')
const path = require('path')

const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./utility/paths')(__dirname)


module.exports = {
  //input
  entry: {
    app: paths.entry,
    vendor: ["preact"]
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
    filename: 'static/[name]-[chunkhash].js'
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new WebpackChunkHash({algorithm: 'md5'}),

    new HtmlWebpackPlugin({
      title: 'Vsevolod Trofimov',
      template: paths.template,
      filename: 'index.html',
      chunks: ['vendor', 'app']
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: path.join(paths.dist, 'static/vendor.js'),
      minChunks: Infinity,
    })
  ],

  //dev
  devtool: 'source-map',
  devServer: {
    port: 80
  }
}
