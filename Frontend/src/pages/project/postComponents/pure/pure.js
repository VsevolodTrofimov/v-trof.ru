import { h, Component } from 'preact'

import styles from './pure.sass'

export default function pure(title, field) {
    return props => (
        <div class={styles.body} >
                <h2 class={styles.heading}> {title} </h2>
                <div dangerouslySetInnerHTML={{__html: props[field]}} />
        </div>
    )
}