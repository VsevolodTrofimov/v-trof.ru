import { h, Component } from 'preact'

import Card from '@components/card/card'

const order = [
    'Links',
    'Overview',
    'Tech',
    'Role',
    'Uncommon',
    'Takeaways',
    'Good',
    'Bad',
    'Assets'
]

export default class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            project: {
                Overview: 'Wait a bit...'
            }
        }
    }

    render() {
        return (
            <Card>
                <h1> bLA {this.props.title} </h1>
            </Card>
        )
    }
}