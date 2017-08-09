const showdown  = require('showdown')
const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const pathToData = '../Common/page-data/'
const pathToProjects = pathToData + 'project-data'
const pathToDist = pathToData + 'project'
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
    console.log(`Compiling ${dir}`)
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


const save = async compiledProject => {
    console.log(`Saving ${compiledProject.title}...`)
    await fs.writeJson(path.join(pathToDist, compiledProject.url + '.json'), compiledProject)

    return true
}


const compileAll = async () => {
    const start = new Date()
    
    const toFullPath = chunk => path.join(pathToProjects, chunk)

    const chunks = await fs.readdir(pathToProjects)
    const projectsCompiled = chunks
                        .filter(R.pipe(toFullPath, fs.lstatSync, R.invoker(0, 'isDirectory')))
                        .map(R.pipe(toFullPath, compileProject))
    
    const compiledProjects = await Promise.all(projectsCompiled)

    await compiledProjects.map(save)

    console.log(`Done in ${new Date() - start}ms \n`)
}


const watch = () => fs.watch(pathToProjects, {recursive: true}, compileAll);

module.exports = {
    compileAll,
    watch
}

if(process.argv[2] === 'forceCompile') compileAll()