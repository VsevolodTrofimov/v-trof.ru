import { h, Component } from 'preact'
const PIXI = require('pixi.js') 

import makeStage from '@thisPage/story/make/stage'

import styles from './story.sass'

import act0 from './acts/0'
import act1 from './acts/1'


const antialias = 2
const context = {
    props: {
        numberOfParticles: 25,
        
        act0duration: 5000,
        lapPeriod: 500,
        lapsQuantity: 5,

        width: 300 * antialias,
        height: 300 * antialias,

        distance: 207 * antialias,

        padding: 30 * antialias,

        spreadFactor: 100,

        circleR: 47 * antialias,
        particleR: 2 * antialias,


        arrowSize: 7 * antialias,

        particleColor: 0x1e1e1e,
        lineStyle: [2 * antialias, 0x1e1e1e],

        heroColor: 0xb96ac9,
        heroAscensionSpeed: 2,
        heroInitialAlpha: 0.5,
        heroInnerRSmall: 4 * antialias,
        heroInnerR: 10 * antialias,
        heroOuterR: 21 * antialias,
        heroLineStyle: [2 * antialias, 0xb96ac9],
        heroScaleOuterFrames: 12
    },
    stage: {},
    changeText: () => {},
    next: () => {}
}

const acts = [act0, act1, () => () => context.stage]

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.animate = this.animate.bind(this)
        this.next = this.next.bind(this)
        this.end = this.end.bind(this)
    }

    componentDidMount() {
        this.renderer = PIXI.autoDetectRenderer(
            context.props.width + context.props.padding * 2, 
            context.props.height + context.props.padding * 2, {
            transparent: true,
            antialias: true
        })
        this.pixiHost.appendChild(this.renderer.view)
        context.stage = makeStage(context.props)

        //settign initial context
        context.next = this.next
        context.changeText = this.changeText.bind(this)

        //stage will start as +1 from here
        this.currentAct = -1
        this.next()

        this.animate()
    }

    changeText(text) {
        //mb a fancy transition later
        this.textHost.innerHTML = text
    }

    next() {
        this.currentAct++
        if(acts.length <= this.currentAct) {
            this.end()
        } else {
            this.currentActRender = acts[this.currentAct](context)
        }
    }

    animate() {
        this.renderer.render(this.currentActRender())
        this.frame = requestAnimationFrame(this.animate)
    }

    end() {
        // this.props.end()
    }

    render() {
        return (
            <div class={styles.PixiContainer}>
                <div class={styles.PixiHostWrapper}>
                    <div ref={(host) => { this.pixiHost = host }}
                        class={styles.PixiHost}></div>
                </div>
                
                <div ref={(arrowEnd) => { this.arrowEnd = arrowEnd }}
                     class={styles.arrowEnd}
                     id="story-arrow-end"></div>
                
                <div ref={(host) => { this.textHost = host }} 
                     class={styles.PixiContainerText} 
                     id='story-text'>Starting...</div>
            </div>
        )
    }
}