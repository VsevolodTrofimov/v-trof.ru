import { h } from 'preact'

import Card from '@components/card~'

import styles from './nav.sass'

const NavLink = props => (<a href={props.url} class={styles.navLink}>{props.children}</a>)

export default function Nav({routes}) {   
    return (
        <Card class={styles.nav}>
            {routes.map(route => <NavLink url={route.path}>{route.title}</NavLink>)}
        </Card>
    )
}