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

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   async: true,
    //   minChunks: function(module, count) {
    //     if(count > 1 && module.context && module.context.indexOf('node_modules') === -1) {
    //       if(module.context.contains('components') || module.context.contains('utils')) return true
    //     }
    //     return false
    //   }
    // })
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
