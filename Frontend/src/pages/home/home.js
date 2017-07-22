import { h, Component } from 'preact'

import Link from '@components/link/link' 
import Story from './story/story'

import styles from './home.css'

let UpperText = (props) => (
    <div class={styles.textBlock}>
        This is how <Link url={props.project.url}> {props.project.title} </Link> was born. <br />
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
    render() {  
        let project = {
            url: '/about/',
            title: 'Pileus'
        }      
        return (
            <div class={styles.home}>
                <Story />
                <div>
                    <UpperText project={project} />
                    <LowerText />
                </div>
            </div>
        );
    }
} 

