import { h } from 'preact'

export default function Overview(props) {
    return (
        <div id='tech'>
            <h2>Стек</h2>
            <p>{props.tech}</p>
        </div>
    )
}