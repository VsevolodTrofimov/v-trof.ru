import { h, Component } from 'preact'
import _curry from 'lodash.curry'

import Link from '@components/link~' 
import align from '@utils/align'
import prefetch from '@utils/prefetch'

import Story from './story/story'
import HeroesWithTrails from './heroesWithTrails~'

import styles from './home.sass'

let upperTextProjectsLink

let UpperText = (props) => (
    <div class={styles.textBlock}>
        Так появился <Link url={props.project.url}  
            ref={link => upperTextProjectsLink = link}> {props.project.title}  
        </Link> <br /> 
        Посмотреть <Link url='/projects/'> остальные проекты </Link> <br />
        Или <Link url='/contact/'> сделать следущий вашим </Link>
    </div>
)

let LowerText = () => (
    <div class={styles.textBlock}>
        Ах да, Я &mdash; <Link url='/about/'> Всеволод Трофимов </Link> <br />
        Frontend разработчик & UX дизайнер <br />
        из Санкт-Петербурга.
    </div>
)

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.lastStoryAct = this.lastStoryAct.bind(this)
        this.nextProject = this.nextProject.bind(this)
        this.state = {
            currentProject: 0,
            projects: [{title: '...', url: '/projects/'}],
            loaded: false
        }
    }

    componentWillMount() {
        prefetch('/data/home').then(res => {    
            if(res.status === 200) return res.clone().json()
        }).then(data => {
            if(data && data.featured) this.setState({projects: data.featured, loaded: true})
        })
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
                to: 'center'
            })

            align(self.lowerText.base, storyText, {to: 'center'})
        }
        
        reAlign()
        window.onresize = reAlign
        document.fonts.ready.then(reAlign)
    }

    nextProject() {
        this.setState({
            currentProject: (this.state.currentProject + 1) % this.state.projects.length
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


                <main class={styles.texts + (this.state.loaded ? '' : ' ' + styles.textsLoading)}>
                    <UpperText ref={el => this.upperText = el} 
                               project={this.state.projects[this.state.currentProject]} />
                    <LowerText ref={el => this.lowerText = el} />
                </main>


            </div>
        );
    }
} 

