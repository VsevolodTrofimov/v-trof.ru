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

const lineWidth = parseInt(styles.pixiLineWidth, 10)
const padding = parseInt(styles.pixiPaddingInner, 10)
const size = parseInt(styles.pixiCanvasSize, 10) - padding * 2
const antialias = parseInt(styles.pixiAntialias, 10)

const heroSpeed = 1.2

const circleR = parseInt(styles.pixiCircleR, 10)
const heroOuterR = parseInt(styles.pixiHeroOuterR, 10)
const heroInnerR = parseInt(styles.pixiHeroInnerR, 10)

const context = {
    props: {
        //initial setuop
        width: size * antialias,
        height: size * antialias,

        neckLength: 207 * antialias,

        padding: padding * antialias,

        circleR: circleR * antialias,

        arrowSize: 7 * antialias,
        
        lineStyle: [lineWidth * antialias, styles.pixiNeutralColor],

        heroSpeed: heroSpeed * antialias,
        //act 0+
        act0Duration: 3500,
        act0AlphaSteps: 30,
        numberOfParticles: 20,
        particleR: 2 * antialias,
        particleColor: styles.pixiNeutralColor,

        //act 1+
        heroColor: styles.pixiHeroColor,
        heroAscensionSpeed: 2,
        heroInitialAlpha: 0.5,
        heroInnerRSmall: 4 * antialias,
        heroInnerR: heroInnerR * antialias,
        heroOuterR: heroOuterR * antialias,
        heroLineStyle: [lineWidth * antialias, styles.pixiHeroColor],
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
const acts = [act0, act1, act2, act3, act4, act5]

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.animate = this.animate.bind(this)
        this.next = this.next.bind(this)
        this.start = this.start.bind(this)
        this.end = this.end.bind(this)
        this.changeText = this.changeText.bind(this)
    }

    componentDidMount() {
        this.renderer = PIXI.autoDetectRenderer(
            context.props.width + context.props.padding * 2, 
            context.props.height + context.props.padding * 2, {
            transparent: true,
            antialias: true
        })
        this.pixiHost.appendChild(this.renderer.view)

        this.start()
    }

    changeText(text, duration) {
        let self = this
        duration = duration || 150
        self.text.style.opacity = 0
        self.text.style.transitionDuration = duration + 'ms'
        setTimeout(() => {
            self.text.innerHTML = text
            //edge fix
            setTimeout(() => self.text.style.opacity = 1, 1)
        }, duration)        
    }

    start() {
        //first act will be +1 from this value
        this.currentAct = 4 - 1

        context.stage = makeStage(context.props)
        context.hero = undefined
        context.beziers = undefined
        context.particles = undefined
        //settign initial context
        context.next = this.next
        context.changeText = this.changeText

        this.continueAnumation = true
        this.next()
        this.animate()
    }

    next() {
        this.currentAct++
        if(acts.length <= this.currentAct) {
            this.end()
            this.continueAnumation = false
        } else {
            this.currentActRender = acts[this.currentAct](context)
        }
    }

    animate() {
        this.renderer.render(this.currentActRender())
        if(this.continueAnumation) requestAnimationFrame(this.animate)
    }

    end() {
        this.props.onEnd(this.start)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false
    }

    render() {
        return (
            <div class={styles.PixiContainer}>
                <div class={styles.PixiHostWrapper}>
                    <div ref={host => this.pixiHost = host}
                        class={styles.PixiHost}></div>
                </div>
                
                <div ref={heroEndPos => this.heroEndPos = heroEndPos} class={styles.heroEndPos} />
                
                <div ref={text => this.text = text} 
                     class={styles.PixiContainerText} 
                     id='story-text'>Starting...</div>
            </div>
        )
    }
}