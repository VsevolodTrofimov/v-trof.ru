import { h } from 'preact'

export default function Overview(props) {
    return (
        <div id='overview'>
            <h2>Описание</h2>
            <p>{props.overview}</p>
        </div>
    )
}