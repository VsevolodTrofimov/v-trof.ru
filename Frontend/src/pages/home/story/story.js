import { h, Component } from 'preact'
import makeStage from '@thisPage/story/make/stage'
const PIXI = require('pixi.js') 

import styles from './story.css'

import act0 from './acts/0'

const context = {
    props: {
        numberOfParticles: 10,
        
        lapPeriod: 500,
        lapsQuantity: 5,

        width: 300 * 2,
        height: 300 * 2,

        distance: 207 * 2,

        padding: 30 * 2,
        
        force: 1,
        
        circleR: 47 * 2,
        mainR: 10 * 2,
        spreadR: 10 * 2,

        arrowSize: 7 * 2,

        lineStyle: [1.7 * 2, 0x000000]
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
        // this.frame = requestAnimationFrame(this.animate)
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