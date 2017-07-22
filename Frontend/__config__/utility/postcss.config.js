const config  = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {}
  }
}

if(process.env.NODE_ENV === 'production') {
  config.plugins['postcss-csso'] = {}
}

module.exports = config
