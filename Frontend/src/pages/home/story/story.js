import { h, Component } from 'preact'
const PIXI = require('pixi-reduced-to-graphics') 

import makeStage from '@thisPage/story/make/stage'

import styles from './story.sass'

import act0 from './acts/0'
import act1 from './acts/1'
import act2 from './acts/2'
import act3 from './acts/3'
import act4 from './acts/4'


const antialias = 2
const context = {
    props: {
        numberOfParticles: 25,
        
        act0duration: 3500,
        lapSteps: 300,
        lapsQuantity: 2,

        width: 300 * antialias,
        height: 300 * antialias,

        neckLength: 207 * antialias,

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
        heroInnerR: 8 * antialias,
        heroOuterR: 20 * antialias,
        heroLineStyle: [2 * antialias, 0xb96ac9],
        heroScaleOuterSteps: 6,
        
        heroBeziers: 10,
        bezierMorphSteps: 120,

        neckTravelSteps: 190,
        
        heroOuterRSpreadMax: 0.2,
        heroOuterRSpreadSteps: 30
    },
    stage: {},
    changeText: () => {},
    next: () => {}
}

const pause = () => () => context.stage
const acts = [act0, act1, act2, act3, act4, pause]

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

    changeText(text, duration) {
        let self = this
        duration = duration || 150
        self.textHost.style.opacity = 0
        self.textHost.style.transitionDuration = duration + 'ms'
        setTimeout(() => {
            self.textHost.innerHTML = text
            self.textHost.style.opacity = 1
        }, duration)
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