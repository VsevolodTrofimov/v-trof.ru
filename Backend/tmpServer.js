const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const projectDataManager = require('./projectDataManager')

const port = 8080

const pathToApp = '../Frontend/dist/'
const pathToData = '../Common/page-data/'
const pages = [
  '/',
  'contact',
  '/about',
  '/skills',
  '/projects',
  '/project/:url/']


app.get('/data/*', function(req, res) {
  const dataPath = req.url.slice(req.url.indexOf('/data/') + 6) + '.json'
  res.append('Content-Type', 'application/json')
  
  fs.readFile(
    path.resolve(__dirname, pathToData, dataPath), 'utf-8',
    (err, data) => {res.write(data); res.end();}
  )
})

app.get(pages, function (req, res) {
  console.log('proxy', req.url)
  res.sendFile(path.resolve(__dirname, pathToApp, 'index.html'))
})

app.use('/static', express.static(pathToApp + '/static/'))

projectDataManager.compileAll().then(() => {

  projectDataManager.watch()
  
  app.listen(port, function () {
    console.log(`TMP server on port ${port}`)
  })

})