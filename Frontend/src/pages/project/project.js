import { h, Component } from 'preact'

import prefetch from '@utils/prefetch'

import Card from '@components/card~'
import Space from '@components/space~'
import MainBlock from '@components/mainBlock~'

import Links from './postComponents/links~'
import pure from './postComponents/pure~'

import styles from './project.sass'

const order = [
    {
        field: 'links',
    }, {
        field: 'overview',
        component: pure('Описание', 'overview')
    }, {
        field: 'tech',
        component: pure('Стек', 'tech')
    }, {
        field: 'arch',
        component: pure('Архитектура', 'arch')
    }, {
        field: 'role',
        component: pure('Моя роль', 'role')
    }, {
        field: 'uncommon',
        component: pure('Необычные решения', 'uncommon')
    }, {
        field: 'takeaways',
        component: pure('Takeaways', 'takeaways')
    }, {
        field: 'good',
        component: pure('Стоит повторить', 'good')
    }, {
        field: 'bad',
        component: pure('Не стоило делать', 'bad')
    }, {
        field: 'skills',
        component: pure('Примененные навыки', 'skills')
    }, {
        field: 'assets'
    }
]

export default class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            project: {}
        }
    }

    componentWillMount() {
        prefetch('/data/project/' + this.props.url).then(res => {            
            if(res.status === 200) return res.clone().json()
        }).then(data => {
            if(data) this.setState({project: data, loaded: true})
        })
    }

    render() {
        const postBody = order.map(item => {
            if(this.state.project[item.field] && item.component) 
                return (
                    <Space top='l'>
                        <MainBlock> {h(item.component, this.state.project)} </MainBlock>
                    </Space>
                )
            return null 
        }).filter(item => item !== null)

        return (
            <Card>
                <Space vertical='m'>
                    <div class={styles.projectHead}>
                        <h1> {this.state.project.title} </h1>
                        <Links {...this.state.project.links} class={styles.projectHeadLinks} />
                    </div>
                    {this.state.loaded ? postBody : 'Загружаем...'}
                </Space>
            </Card>
        )
    }
}