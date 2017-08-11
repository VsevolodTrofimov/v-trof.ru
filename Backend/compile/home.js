const R = require('ramda')

const path = require('path')
const fs = require('fs-extra')

const compile = async (compiledProjects, pathToData) => {
    console.log('Compiling home...')
    const pageData = await fs.readJson(path.join(pathToData, 'home.json'))
    
    pageData.featured = compiledProjects
                        .filter(project => project.featured)
                        .map(project => { return {
                            title: project.title,
                            url: '/project/' + project.url
                        }})

                        
    return pageData
}

module.exports = {
    name: 'home',
    compile
}