import { h, Component } from 'preact'

export default function pure(title, field) {
    return props => (
        <div>
                <h2> {title} </h2>
                <div dangerouslySetInnerHTML={{__html: props[field]}} />
        </div>
    )
}