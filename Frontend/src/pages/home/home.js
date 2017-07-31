import { h, Component } from 'preact'

import Link from '@components/link/link' 
import align from '@utils/align'
import Story from './story/story'

import styles from './home.sass'

let upperTextProjectsLink 

let UpperText = (props) => (
    <div class={styles.textBlock}>
        Так появился <Link url={props.project.url} 
            ref={link => upperTextProjectsLink = link}> {props.project.title} 
        </Link>. <br />
        Посмотреть <Link url='/projects/'> остальные проекты </Link> <br />
        Или <Link url='/contact/'> сделать следущий вашим </Link>
    </div>
)

let LowerText = () => (
    <div class={styles.textBlock}>
        Ах да, Я &mdash; <Link url='/about/'> Трофимов Всеволод </Link> <br />
        Frontend разработчик & UX дизайнер <br />
        из Санкт-Петербурга.
    </div>
)

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let texts = this.texts
        let arrowEnd = document.getElementById('story-arrow-end')
        
        function reAlign() {
            texts.style.transform = ''

            if(document.body.getBoundingClientRect().width < 1200) return 0
            
            align(texts, arrowEnd, {
                by: upperTextProjectsLink.base,
                to: 'center',
                apply: true
            })
        }
        
        reAlign()
        window.onresize = reAlign
    }
    render() {  
        let project = {
            url: '/about/',
            title: 'Pileus'
        }      
        
        return (
            <div class={styles.home}>
                <Story />
                <div ref={(texts) => {this.texts = texts}} class={styles.texts}>
                    <UpperText project={project} />
                    <LowerText />
                </div>
            </div>
        );
    }
} 

