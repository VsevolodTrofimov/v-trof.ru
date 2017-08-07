const showdown  = require('showdown')
const _ = require('ramda')

const path = require('path')
const fs = require('fs')

const pathToProjects = '../Common/page-data/project-data'
const converter = new showdown.Converter()




const compileChunk = filePath => new Promise((resolve, reject) => {
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) reject(err)

        let prop = _.last(filePath.split('-')).replace('.md', '')

        resolve({
            prop,
            body: converter.makeHtml(data)
        })
    })

})


const compileProject = dir => new Promise((resolve, reject) => {
    
    fs.readdir(dir, (err, files) => {
        if(err) reject(err)
        const toFullPath = chunk => path.join(dir, chunk)

        const promises = files
                            .filter(_.endsWith('.md'))
                            .map(_.pipe(toFullPath, compileChunk))
                
        Promise.all(promises).then(resolve)
    })
    
})




fs.readdir(pathToProjects, (err, data) => {
    const toFullPath = chunk => path.join(pathToProjects, chunk)

    const promises = data
                        .filter(_.pipe(toFullPath, fs.lstatSync, _.invoker(0, 'isDirectory')))
                        .map(_.pipe(toFullPath, compileProject))
   
    Promise.all(promises)
        .then(console.log)
})