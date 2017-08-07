const showdown  = require('showdown')
const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const pathToProjects = '../Common/page-data/project-data'
const converter = new showdown.Converter()




const link = (config, projectFiles) => new Promise((resolve, reject) => {
    const compiledProject = projectFiles.reduce((project, file) => {
        project[file.propName] = file.body
        return project
    }, {})

    resolve(Object.assign(compiledProject, config))
})


const compileChunk = filePath => fs.readFile(filePath, 'utf8').then(data => new Promise((resolve, reject) => {
    let propName = R.last(filePath.split('-')).replace('.md', '')

    resolve({propName, body: converter.makeHtml(data)})
}))


const compileProject = dir => fs.readdir(dir).then(files => new Promise((resolve, reject) => { 
    let config
    const toFullPath = chunk => path.join(dir, chunk)

    const compiledFiles = files
                        .filter(R.endsWith('.md'))
                        .map(R.pipe(toFullPath, compileChunk))
    
    const configs = files
                        .filter(R.endsWith('.json'))
                        .map(R.pipe(toFullPath, fs.readJson))

    Promise.all(configs)
        .then(configs => {
            config = Object.assign(...configs)
            return Promise.all(compiledFiles)
        })
        .then(compiledFiles => link(config, compiledFiles))
        .then(resolve)
}))




fs.readdir(pathToProjects).then(dirs => {
    const toFullPath = chunk => path.join(pathToProjects, chunk)

    const compiledProjects = dirs
                        .filter(R.pipe(toFullPath, fs.lstatSync, R.invoker(0, 'isDirectory')))
                        .map(R.pipe(toFullPath, compileProject))
   
    Promise.all(compiledProjects).then(console.log)
})