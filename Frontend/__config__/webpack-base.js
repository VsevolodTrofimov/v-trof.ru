const webpack = require('webpack')
const path = require('path')

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
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].js'
  },
  plugins: [
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
