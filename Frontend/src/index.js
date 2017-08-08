import { h, render } from 'preact'
import Router from 'preact-router'
import Match from 'preact-router/Match'
import AsyncRoute from 'preact-async-route'

import PageWrapper from '@components/pageWrapper~'
import Nav from '@components/nav~'
import Space from '@components/space~'

import prefetch from '@utils/prefetch'

import styles from './index.sass'


//route getter
const GetHome = () => {
    prefetch('/data/home')
    return System.import(/* webpackChunkName: 'home' */ '@pages/home/home.js')
        .then(module => module.default)
}

const GetAbout = () => {
    return System.import(/* webpackChunkName: 'about' */ '@pages/about/about.js')
        .then(module => module.default)
}

const GetProject = (url, cb, props) => {
    prefetch('/data/project/' + props.url)
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
    }, {
        path: '/about/',
        title: 'Обо мне',
        getComponent: GetAbout,
        showInNav: true
    }, {
        path: '/projects/',
        title: 'Проекты',
        showInNav: true
    }, {
        path: '/skills/',
        title: 'Навыки',
        showInNav: true
    }, {
        path: '/contact/',
        title: 'Контакты',
        showInNav: true
    }, {
        path: '/project/:url/',
        getComponent: GetProject,
    }
]

const mainRoutes = routes.filter(route => route.showInNav)

const Main = () => {
    return (
        <PageWrapper>
            <Match path="/">{
                ({ matches }) => matches || (
                    <Space bottom='m'> <Nav routes={mainRoutes} /> </Space>
                ) 
            } </Match>

            <Router>{ routes.map(route => <AsyncRoute {...route} />) }</Router>
        </PageWrapper>
    )
}

render(<Main />, document.body)