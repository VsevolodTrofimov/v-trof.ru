const path = require('path')
const fs = require('fs-extra')

const compile = async (compiledProjects, pathToData) => {
    console.log('Compiling projects...')
    const pageData = await fs.readJson(path.join(pathToData, 'projects.json'))
    
    pageData.all = compiledProjects
                        .map(project => { return {
                            title: project.title,
                            url: '/project/' + project.url,
                            description: project.description
                        }})
                        
    return pageData
}

module.exports = {
    name: 'projects',
    compile
}