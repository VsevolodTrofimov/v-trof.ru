const showdown  = require('showdown')
const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const converter = new showdown.Converter()

const link = (config, projectFiles) => {
    console.log(`Linking ${config.title}...`)

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
    console.log(`Compiling ${path.resolve(dir)}`)
    const toFullPath = chunk => path.join(dir, chunk)

    const chunks = await fs.readdir(dir)
    const filesCompiled = chunks
                            .filter(R.endsWith('.md'))
                            .map(R.pipe(toFullPath, compileChunk))
    
    const configs = chunks
                            .filter(R.endsWith('.json'))
                            .map(R.pipe(toFullPath, fs.readJson))

    const config = Object.assign(... await Promise.all(configs))
    
    const compiledFiles = await Promise.all(filesCompiled)

    return link(config, compiledFiles)
}


module.exports = compileProject