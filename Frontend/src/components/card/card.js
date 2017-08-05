import { h, render } from 'preact'

import styles from './card.sass'


export default function card(props) {
    const classes = styles.card + ' ' + props.class
    return <div class={classes}> 
        {props.children}
    </div>
}