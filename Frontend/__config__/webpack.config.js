const fs = require('fs')

var env = 'base'

if(process.env.NODE_ENV === 'production') env = 'production'

module.exports = require('./webpack-' + env + '.js')
