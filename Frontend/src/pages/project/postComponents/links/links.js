import { h, Component } from 'preact'

import Link from '@components/link~'

import styles from './links.sass'

export default function(props) {
    const links = []
    if(props.live) links.push(<a href={props.live} class={styles.link}>Сайт</a>)
    if(props.demo) links.push(<a href={props.demo} class={styles.link}>Демо</a>)
    if(props.source) links.push(<a href={props.source} class={styles.link}>Исходный код</a>)

    return <div class={props.class}> {links} </div>
}