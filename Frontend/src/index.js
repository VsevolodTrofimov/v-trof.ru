import { h, render } from 'preact'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'

import prefetch from '@utils/prefetch'

import styles from './index.sass'

const Home = () => {
    prefetch('/data/home')
    return System.import(/* webpackChunkName: 'home' */ '@pages/home/home.js')
        .then(module => module.default)
}

const About = () => {
    // prefetch('/data/home')
    return System.import(/* webpackChunkName: 'about' */ '@pages/about/about.js')
        .then(module => module.default)
}

const Main = () => (
	<div>
        <Router>
            <AsyncRoute path="/" getComponent={Home} />
            <AsyncRoute path="/about" getComponent={About} />
        </Router>
    </div>
)

render(<Main />, document.body)