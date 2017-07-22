import { h, Component } from 'preact'

import ArrowLeft from '@icons/arrow-left.svg'

import styles from './link.css'

export default class Link extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<a href={this.props.url} class={styles.link}>
            <div class={styles.text}> {this.props.children} </div>
            <ArrowLeft class={styles.icon} />
        </a>);
    }
} 