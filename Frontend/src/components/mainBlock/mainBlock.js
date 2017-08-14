import { h, render } from 'preact'

import styles from './mainBlock.sass'

export default function MainBlock(props) {
    const classes = styles.mainBlock + ' ' + (props.class || '')
    return <div class={classes}> 
        {props.children}
    </div>
}