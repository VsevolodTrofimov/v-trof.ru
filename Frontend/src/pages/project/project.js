import { h, Component } from 'preact'

import Card from '@components/card~'
import Space from '@components/space~'

import Overview from './postComponents/overview~'
import Tech from './postComponents/Tech~'

const order = [
    {
        field: 'links',
    }, {
        field: 'overview',
        component: Overview
    }, {
        field: 'tech',
        component: Tech
    }, {
        field: 'role',
    }, {
        field: 'uncommon',
    }, {
        field: 'takeaways',
    }, {
        field: 'hood',
    }, {
        field: 'bad',
    }, {
        field: 'assets'
    }
]

export default class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            project: {
                title: 'Ripple.js'
            }
        }
    }

    render() {
        const postBody = order.map(item => {
            if(this.state.project[item.field] && item.component) 
                return (
                    <Space top='m'>
                        {h(item.component, this.state.project)}
                    </Space>
                )
            return null 
        }).filter(item => item !== null)

        return (
            <Card>
                <h1> {this.state.project.title} </h1>

                {postBody.length ? postBody : 'Загружаем...'}
            </Card>
        )
    }
}