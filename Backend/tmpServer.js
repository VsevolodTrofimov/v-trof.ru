const express = require('express')
const path = require('path')
const app = express()


const pathToApp = '../Frontend/dist/'

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, pathToApp + 'index.html'))
})

app.use('/static', express.static(pathToApp + '/static/'))

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})