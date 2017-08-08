const showdown  = require('showdown')
const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const pathToProjects = '../Common/page-data/project-data'
const converter = new showdown.Converter()




const link = (config, projectFiles) => {
    const compiledProject = projectFiles.reduce((project, file) => {
        project[file.propName] = file.body
        return project
    }, {})

    return Object.assign(compiledProject, config)
}


const compileChunk = async filePath => {
    const data = await fs.readFile(filePath, 'utf8')
    const propName = R.last(filePath.split('-')).replace('.md', '')

    return {propName, body: converter.makeHtml(data)}
}


const compileProject = async dir => { 
    const toFullPath = chunk => path.join(dir, chunk)

    const files = await fs.readdir(dir)
    const filesCompiled = files
                        .filter(R.endsWith('.md'))
                        .map(R.pipe(toFullPath, compileChunk))
    
    const configs = files
                        .filter(R.endsWith('.json'))
                        .map(R.pipe(toFullPath, fs.readJson))

    const config = Object.assign(... await Promise.all(configs))
    
    const compiledFiles = await Promise.all(filesCompiled)
    
    return link(config, compiledFiles)
}




fs.readdir(pathToProjects).then(dirs => {
    const toFullPath = chunk => path.join(pathToProjects, chunk)

    const compiledProjects = dirs
                        .filter(R.pipe(toFullPath, fs.lstatSync, R.invoker(0, 'isDirectory')))
                        .map(R.pipe(toFullPath, compileProject))
   
    Promise.all(compiledProjects).then(console.log)
})