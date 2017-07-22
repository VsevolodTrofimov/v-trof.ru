const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer')

const baseConfig = require('./webpack-base')

const mergedConfig = webpackMerge(baseConfig, {
  devtool: false,

  plugins: [
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      VERSION: JSON.stringify(process.env.VERSION)
    }),

    new webpack.optimize.UglifyJsPlugin(),
    // new BundleAnalyzerPlugin(),
    new RuntimeAnalyzerPlugin({
      mode: 'standalone',
      open: true,
      port: 333,
      watchModeOnly: false
    })
  ]
})

module.exports = mergedConfig
