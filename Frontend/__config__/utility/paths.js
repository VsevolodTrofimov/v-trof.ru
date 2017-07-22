const path = require('path')

module.exports = function(__dirname) {
  const root = path.resolve(__dirname, '../')
  const config = path.join(root, '__config__')

  const src = path.join(root, 'src')

  const entry = path.join(src, '/index.js')
  const template = path.join(src, '/index.html')

  const dist = path.join(root, 'dist')

  return {
    root, config,
    src,
    entry, template,
    dist
  }
}
