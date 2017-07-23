import { h, Component } from 'preact'
import makeStage from '@thisPage/story/make/stage'
const PIXI = require('pixi.js') 

import styles from './story.css'

import act0 from './acts/0'


const antialias = 2
const context = {
    props: {
        numberOfParticles: 20,
        
        lapPeriod: 500,
        lapsQuantity: 5,

        width: 300 * antialias,
        height: 300 * antialias,

        distance: 207 * antialias,

        padding: 30 * antialias,
        
        speedFactor: 10 ** (-3),
        randomFactor: 0 * antialias,
        
        circleR: 47 * antialias,
        particleR: 2 * antialias,
        mainR: 10 * antialias,
        spreadR: 23 * antialias,

        arrowSize: 7 * antialias,

        particleColor: 0x000000,
        lineStyle: [1.7 * antialias, 0x000000]
    },
    stage: {},
    changeText: () => {},
    next: () => {}
}

const acts = [act0]

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
                <div ref={(host) => { this.pixiHost = host }}
                     class={styles.PixiHost}></div>
                
                <div ref={(arrowEnd) => { this.arrowEnd = arrowEnd }} 
                     id="story-arrow-end"></div>
                
                <div ref={(host) => { this.textHost = host }} 
                     class={styles.PixiContainerText} 
                     id='story-text'>And then it goes public</div>
            </div>
        )
    }
}