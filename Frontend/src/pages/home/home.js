import { h, Component } from 'preact'
import _curry from 'lodash/curry'

import Link from '@components/link/link' 
import align from '@utils/align'
import Story from './story/story'

import HeroesWithTrails from './heroesWithTrails/heroesWithTrails'

import styles from './home.sass'

let upperTextProjectsLink
const projects = [{
        title: 'Ripple.js',
        url: '/project/ripple' 
    }, {
        title: 'этот сайт',
        url: '/project/v-trof' 
    }, {
        title: 'Artistlib',
        url: '/project/artistlib' 
    }
]

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
        this.nextProject = this.nextProject.bind(this)
        this.state = {currentProject: 0}
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

    nextProject() {
        this.setState({
            currentProject: (this.state.currentProject + 1) % projects.length
        })
    }

    lastStoryActMobile(runHeroFromStoryEnd, cb) {
        const nextCb = () => {
            const linkRect = upperTextProjectsLink.base.getBoundingClientRect()
            this.heroesWithTrailsLower.run(
                linkRect.top + linkRect.height / 2, 
                document.body.getBoundingClientRect().top,
                 -100, -100,
                this.nextProject,
                () => {
                    this.heroesWithTrailsLower.flush()
                    cb()
                }
            )
        }

        runHeroFromStoryEnd(nextCb, this.heroesWithTrails.flush)
    }

    lastStoryAct(cb) {
        const bodyRect = document.body.getBoundingClientRect()
        const storyEndRect = this.story.heroEndPos.getBoundingClientRect()
        const storyRect = this.story.base.getBoundingClientRect()
        const runHeroFromStoryEnd = _curry(this.heroesWithTrails.run)(
                                        storyEndRect.top, 
                                        bodyRect.top,
                                        storyEndRect.left,
                                        storyRect.left + storyRect.width
                                    )
        
        if(bodyRect.width < 1200) 
            return this.lastStoryActMobile(runHeroFromStoryEnd, cb)

        runHeroFromStoryEnd(this.nextProject,
                            () => {
                                this.heroesWithTrails.flush()
                                cb()
                            })
    }

    render() {  
        return (
            <div class={styles.home}>
                <HeroesWithTrails ref={el => this.heroesWithTrails = el} />
                <HeroesWithTrails ref={el => this.heroesWithTrailsLower = el} />

                <Story ref={story => this.story = story} onEnd={this.lastStoryAct} />
                <div class={styles.texts}>
                    <UpperText ref={el => this.upperText = el} 
                               project={projects[this.state.currentProject]} />
                    <LowerText ref={el => this.lowerText = el} />
                </div>
            </div>
        );
    }
} 

