import { h } from 'preact'

import Card from '@components/card/card'
import Link from '@components/link/link'

export default function Nav(props) {   
    return (
        <Card>
            {props.routes.map(route => <Link url={route.path}> {route.title} </Link>)}
        </Card>
    )
}