import { h } from 'preact'

import styles from './pageWrapper.sass'

export default function PageWrapper({children}) {
    return (
        <div class={styles.centerer}>
            <main class={styles.page}>{children}</main>
        </div>
    )
}