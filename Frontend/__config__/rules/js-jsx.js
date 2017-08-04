module.exports = function(__dirname) {
  const transformReactJSX = [
    'babel-plugin-transform-react-jsx',
    {
      'pragma': 'h'
    }
  ]

  return {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /(node_modules|bower_components|Common)/,
    query: {
      presets: ['env'],
      plugins: [
        transformReactJSX
      ]
    }
  }
}
