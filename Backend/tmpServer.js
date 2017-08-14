const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const dataManager = require('./dataManager')

const port = 8080

const pathToApp = '../Frontend/dist/'
const pathToSrc = '../Frontend/dist/src'
const pathToData = '../Common/compiled/'
const pathToStatic = '../Common/static/'

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
  
  fs.readFile(path.resolve(__dirname, pathToData, dataPath), 'utf-8', (err, data) => {
      if(err) {console.error(err); return}
      
      res.write(data)
      res.end();
    }
  )
})

app.get(pages, function (req, res) {
  res.append('Cache-Control', 'no-cache')
  res.sendFile(path.resolve(__dirname, pathToApp, 'index.html'))
})

app.use('/src', express.static(pathToSrc))
app.use('/static', express.static(pathToStatic))

dataManager.compile().then(() => {

  dataManager.watch()
  
  app.listen(port, function () {
    console.log(`TMP server on port ${port}`)
  })

})