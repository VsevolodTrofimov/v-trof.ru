import { h, Component } from 'preact'

import Link from '@components/link/link' 
import align from '@utils/align'
import Story from './story/story'

import styles from './home.sass'

let upperTextProjectsLink 

let UpperText = (props) => (
    <div class={styles.textBlock}>
        This is how  
        <Link url={props.project.url} 
            ref={link => upperTextProjectsLink = link}> {props.project.title} </Link> was born. <br />
        See <Link url='/projects/'> other projects </Link> <br />
        Or <Link url='/contact/'> make the next one yours </Link>
    </div>
)

let LowerText = () => (
    <div class={styles.textBlock}>
        Btw, I am <Link url='/about/'> Vesevolod Trofimov </Link> <br />
        Frontend Developer & UX designer <br />
        based in St. Petersburg, Russia.
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

