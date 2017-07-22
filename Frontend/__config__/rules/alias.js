const path = require('path')

module.exports = function(__dirname) {
  const paths = require('../utility/paths')(__dirname)

  return {
    enforce: 'pre',
    test: /\.(css|js|jsx)$/,
    use: {
      loader: 'universal-alias-loader',
      options: {
        alias: {
         "@src": paths.src,
         "@icons": path.join(paths.src, 'icons'),
         "@pages": path.join(paths.src, 'pages'),
         "@utils": path.join(paths.src, 'utils'),
         "@components": path.join(paths.src, 'components')
       }
      }
    }
  }
}
