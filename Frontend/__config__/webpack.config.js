const fs = require('fs')

var env = 'base'

if(process.env.WEBPACK_CONFIG === 'production') env = 'production'

module.exports = require('./webpack-' + env + '.js')
