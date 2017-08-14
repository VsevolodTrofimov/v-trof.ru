const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./utility/paths')(__dirname)


module.exports = {
  //input
  entry: {
    app: paths.entry,
    vendor: ["preact", "preact-router"]
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
    publicPath: '/',
    filename: 'src/[name].js',
    chunkFilename: 'src/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vsevolod Trofimov',
      template: paths.template,
      filename: 'index.html',
      chunks: ['vendor', 'app']
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],

  //dev
  devtool: 'source-map',
  devServer: {
    port: 80,
    historyApiFallback: {
      rewrites: [{
        from: /^(?!\/data\/|\/static\/)/,
        to: '/'
      }]
    },
    proxy: {
      '/data': 'http://localhost:8080',
      '/static': 'http://localhost:8080'
    }
  }
}
