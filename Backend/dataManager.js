const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const compileProject = require('./compile/project')

const pages = [
    require('./compile/home'),
    require('./compile/projectsPage')
]

const pathToData = '../Common/page-data'
const pathToProjects = '../Common/project-data/'
const pathToDist = '../Common/compiled'

const compiled = {
    projects: []
}




const reset =  async () => {
    console.log('RESET: ', path.resolve(pathToDist), '\n')
    await fs.remove(pathToDist)
    await fs.ensureDir(pathToDist)

    return 0
}


const saveProject = async compiledProject => {
    console.log(`Saving project, ${compiledProject.title}...`)
    await fs.ensureDir(path.join(pathToDist, 'project'))
    await fs.writeJson(path.join(pathToDist, 'project', compiledProject.url + '.json'), compiledProject)
}


const savePage = async (compiledPage, pageName) => {
    console.log(`Saving page, ${pageName}...`)
    await fs.writeJson(path.join(pathToDist, pageName + '.json'), compiledPage)
}


const compileAllProjects = async () => {    
    console.log(`Compiling projects... \n`)
    const toFullPath = chunk => path.join(pathToProjects, chunk)

    const chunks = await fs.readdir(pathToProjects)
    const projectsCompiled = chunks
                    .filter(R.pipe(toFullPath, fs.lstatSync, R.invoker(0, 'isDirectory')))
                    .map(R.pipe(toFullPath, compileProject))
    
    const compiledProjects = await Promise.all(projectsCompiled)

    await compiledProjects.map(saveProject)

    compiled.projects = compiledProjects
    console.log('\n')
}


const compileAllPages = async () => {
    console.log(`Compiling pages... \n`)

    const pagesCompiled = pages.map(page => page.compile(compiled.projects, pathToData))

    const compiledPages = await Promise.all(pagesCompiled)

    await compiledPages.map((compiledPage, i) => savePage(compiledPage, pages[i].name))

    console.log('\n')
}


const compile = async () => {
    const start = new Date()
    try { await reset() }
    catch (err) { console.error('ERROR: Failed to reset \n', err) }

    try { await compileAllProjects() }
    catch (err) { console.error('ERROR: Failed to compile projects \n', err) }

    try { await compileAllPages() }
    catch (err) { console.error('ERROR: Failed to compile pages \n', err) }

    console.log(`Done in ${new Date() - start}ms \n`)
}


const watchPages = () => fs.watch(pathToData, {recursive: true}, compileAllPages)
const watchProjects = () => fs.watch(pathToProjects, {recursive: true}, () => compileAllProjects().then(compileAllPages))

const watch = () => {watchPages(); watchProjects()}



module.exports = {
    compile,
    watch
}

if(process.argv[2] === 'forceCompile') compile()