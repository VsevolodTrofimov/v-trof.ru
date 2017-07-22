const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = function(__dirname) {
  let paths = require('../utility/paths')(__dirname)

  const cssLoader = {
    loader: 'css-loader',
    options: {
      import: false,
      modules: true,
      localIdentName: '[hash:base64:5]',
      minimize: false
    }
  }

  const postCSSLoader = {
     loader: 'postcss-loader',
     options: {
       sourceMap: true,
       config: {
         path: path.join(paths.config, 'utility', 'postcss.config.js')
       }
     }
  }

  if(process.env.NODE_ENV === 'production') postCSSLoader.options.sourceMap = false

  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract([
      cssLoader,
      postCSSLoader
    ])
  }
}
