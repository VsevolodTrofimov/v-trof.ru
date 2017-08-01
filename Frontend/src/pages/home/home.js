import { h, Component } from 'preact'

import Link from '@components/link/link' 
import align from '@utils/align'
import Story from './story/story'

import HeroesWithTrails from './heroesWithTrails/heroesWithTrails'

import styles from './home.sass'

let upperTextProjectsLink 
let masks

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
        this.lastStoryAct = this.lastStoryAct.bind(this)
    }

    componentDidMount() {
        let self = this
        let storyEnd = this.story.heroEndPos
        let storyText = this.story.text

        function reAlign() {
            self.upperText.base.style.transform = ''
            self.lowerText.base.style.transform = ''

            if(document.body.getBoundingClientRect().width < 1200) return 0
            
            align(self.upperText.base, storyEnd, {
                by: upperTextProjectsLink.base,
                to: 'center',
                apply: true
            })

            align(self.lowerText.base, storyText, {
                by: self.lowerText.base,
                to: 'center',
                apply: true
            })
        }
        
        reAlign()
        window.onresize = reAlign
    }

    lastStoryAct(cb) {
        let storyEnd = this.story.heroEndPos
        let storyEndRect = storyEnd.getBoundingClientRect()
        let storyRect = this.story.base.getBoundingClientRect()

        this.heroesWithTrails.run(
            storyEndRect.top,
            storyEndRect.left,
            storyRect.left + storyRect.width
        )
        setTimeout(() => {
            this.heroesWithTrails.flush()
            cb()
        }, 3000)
    }

    render() {  
        let project = {
            url: '/about/',
            title: 'Pileus'
        }      
        
        return (
            <div class={styles.home}>
                <HeroesWithTrails ref={el => this.heroesWithTrails = el} />

                <Story ref={story => this.story = story} onEnd={this.lastStoryAct} />
                <div class={styles.texts}>
                    <UpperText ref={el => this.upperText = el} 
                               project={project} />
                    <LowerText ref={el => this.lowerText = el} />
                </div>
            </div>
        );
    }
} 

