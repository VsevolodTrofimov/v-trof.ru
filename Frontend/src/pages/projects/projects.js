import { h, Component } from 'preact'

import prefetch from '@utils/prefetch'

import Card from '@components/card~'
import Space from '@components/space~'
import MainBlock from '@components/mainBlock~'

import styles from './projects.sass'

const ProjectItem = props => {
    return (
        <MainBlock>
            <a href={props.url} class={styles.projectItem}>
                <h2> {props.title} </h2>
                <p> { props.description } </p>
            </a>
        </MainBlock>
    )
} 

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false,
            projectList: []
        }
    }
    
    componentWillMount() {
        prefetch('/data/projects').then(res => {            
            if(res.status === 200) return res.clone().json()
        }).then(data => {
            if(data) this.setState({projectList: data.all, loaded: true})
        })
    }

    render() {
        const projectList = this.state.projectList.map(project => (<Space top='m'><ProjectItem {...project} /></Space>))
        
        return (
            <Card>
                <h1> Проекты </h1>
                {this.state.loaded ? projectList : 'Загружаем...'}
            </Card>
        )
    }
}