import { h, render } from 'preact'
import Router from 'preact-router'
import Home from '@pages/home/home'
import About from '@pages/about/about'

import styles from './index.sass'

const Main = () => (
	<div>
        <Router>
            <Home path="/" />
            <About path="/about" />
        </Router>
    </div>
)

render(<Main />, document.body)