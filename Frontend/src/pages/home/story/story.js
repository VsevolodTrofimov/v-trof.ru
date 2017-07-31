import { h, Component } from 'preact'
const PIXI = require('pixi-reduced-to-graphics') 

import makeStage from '@thisPage/story/make/stage'

import styles from './story.sass'

import act0 from './acts/0'
import act1 from './acts/1'
import act2 from './acts/2'
import act3 from './acts/3'
import act4 from './acts/4'
import act5 from './acts/5'


//parsing hex colors into pixi int colors
for(let key in styles) {
    if(styles[key][0] === '#' && key.indexOf('pixi') === 0) 
        styles[key] = parseInt(styles[key].slice(1), 16) 
}

const size = parseInt(styles.pixiCanvasSize, 10) - parseInt(styles.pixiPaddingInner, 10)
const antialias = parseInt(styles.pixiAntialias, 10)

const heroSpeed = 1.2 * antialias
const circleR = parseInt(styles.pixiCircleR, 10) * antialias

const context = {
    props: {
        //initial setuop
        width: size * antialias,
        height: size * antialias,

        neckLength: 207 * antialias,

        padding: 30 * antialias,

        circleR: circleR,

        arrowSize: 7 * antialias,
        
        lineStyle: [2 * antialias, styles.pixiNeutralColor],

        heroSpeed: heroSpeed,
        //act 0+
        act0Duration: 3500,
        numberOfParticles: 20,
        particleR: 2 * antialias,
        particleColor: styles.pixiNeutralColor,

        //act 1+
        heroColor: styles.pixiHeroColor,
        heroAscensionSpeed: 2,
        heroInitialAlpha: 0.5,
        heroInnerRSmall: 4 * antialias,
        heroInnerR: 8 * antialias,
        heroOuterR: 20 * antialias,
        heroLineStyle: [2 * antialias, styles.pixiHeroColor],
        heroScaleOuterSteps: 12,
        spreadFactor: 100,
        
        //act 2+
        lapSteps: 2 * circleR * Math.PI/heroSpeed,
        lapsQuantity: 2,
        heroBeziers: 10,
        bezierMorphSteps: 120,

        //act 3
        bezierResetDelaySteps: 10,
        
        //act 4
        heroOuterRSpreadMax: 0.1,
        heroOuterRSpreadSteps: 12,

        //act5
        act5TravelSteps: 30,
    },
    stage: {},
    changeText: () => {},
    next: () => {}
}

const pause = () => () => context.stage
const acts = [act0, act1, act2, act3, act4, act5, pause]

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.animate = this.animate.bind(this)
        this.next = this.next.bind(this)
        this.start = this.start.bind(this)
        this.end = this.end.bind(this)
    }

    componentDidMount() {
        this.start()
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

    start() {
        //first act will be +1 from this value
        this.currentAct = -1

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

        this.next()

        this.animate()
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