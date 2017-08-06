import { h } from 'preact'

import styles from './pageWrapper.sass'

export default function PageWrapper(props) {
    return (
        <div class={styles.centerer}>
            <main class={styles.page}>
                {props.children}
            </main>
        </div>
    )
}