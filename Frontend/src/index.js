import { h, render } from 'preact'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'

// import Home from '@pages/home/home'
import About from '@pages/about/about'

import styles from './index.sass'

const Home = () => System.import(/* webpackChunkName: "home" */ '@pages/home/home.js').then(module => module.default)

const Main = () => (
	<div>
        <Router>
            <AsyncRoute path="/" getComponent={Home} />
            <About path="/about" />
        </Router>
    </div>
)

render(<Main />, document.body)