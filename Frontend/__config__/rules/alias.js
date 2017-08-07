const path = require('path')

module.exports = function(__dirname) {
  const paths = require('../utility/paths')(__dirname)

  return {
    enforce: 'pre',
    test: /\.(sass|js|jsx)$/,
    use: {
      loader: 'universal-alias-loader',
      options: {
        alias: {
          "@common": paths.common,
          "@src": paths.src,
          "@icons": path.join(paths.src, 'icons'),
          "@pages": path.join(paths.src, 'pages'),
          "@utils": path.join(paths.src, 'utils'),
          "@components": path.join(paths.src, 'components'),
          '@thisPage': (alias, foundPath, filePath) => {
              let splitFilePath = filePath.split(path.sep)
              let pagePath = splitFilePath.slice(0, splitFilePath.indexOf('pages') + 2).join('/')
              foundPath = foundPath.replace(alias, pagePath)
              return foundPath
          },
          // /component~ => /component/component
          '~':  (alias, pathToResolve) => {
              let splitPath  = pathToResolve.split('/')
              pathToResolve = pathToResolve.slice(0, -1) //removing ~
              pathToResolve += '/' + splitPath[splitPath.length - 1].slice(0, -1)
              return pathToResolve
          },
        }
      }
    }
  }
}
