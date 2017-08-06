import { h, render } from 'preact'
import Router from 'preact-router'
import Match from 'preact-router/Match'
import AsyncRoute from 'preact-async-route'

import PageWrapper from '@components/pageWrapper/pageWrapper'
import Nav from '@components/nav/nav'

import prefetch from '@utils/prefetch'

import styles from './index.sass'


//route getter
const GetHome = () => {
    prefetch('/data/home')
    return System.import(/* webpackChunkName: 'home' */ '@pages/home/home.js')
        .then(module => module.default)
}

const GetAbout = () => {
    // prefetch('/data/home')
    return System.import(/* webpackChunkName: 'about' */ '@pages/about/about.js')
        .then(module => module.default)
}

const GetProject = () => {
    // prefetch('/data/home')
    return System.import(/* webpackChunkName: 'project' */ '@pages/project/project.js')
        .then(module => module.default)
}


//routing
const routes = [
    {
        path: '/',
        title: 'Главная',
        getComponent: GetHome,
        showInNav: true
    },
    {
        path: '/about/',
        title: 'Обо мне',
        getComponent: GetAbout,
        showInNav: true
    },
    {
        path: '/project/:title/',
        getComponent: GetProject,
    },
]

const mainRoutes = routes.filter(route => route.showInNav)

const Main = () => {
    return (
        <PageWrapper>
            <Match path="/">{
                ({ matches }) => matches || (
                    <Nav routes={mainRoutes} />                
                ) 
            } </Match>

            <Router>{ routes.map(route => <AsyncRoute {...route} />) }</Router>
        </PageWrapper>
    )
}

render(<Main />, document.body)