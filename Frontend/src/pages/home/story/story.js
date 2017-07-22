import { h, Component } from 'preact'
const PIXI = require('pixi.js') 

import stage0 from './stage0'
import styles from './story.css'

const props = {
    numberOfParticles: 10,
    mainIdeaPeriod: 500,
    mainIdeaLowerLaps: 5,
    width: 500,
    height: 500,
    r: 60
}

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.animate = this.animate.bind(this)
    }

    componentDidMount() {
        this.renderer = PIXI.autoDetectRenderer(width, height, {
            transparent: true,
        })
        this.pixiHost.appendChild(this.renderer.view)
        this.stage = new PIXI.Container()
    
        //settign initial stage
        this.currentStage = stage0.setup();
    }

    animate() {
        this.renderer.render(this.currentStage.getFrame)
        this.frame = requestAnimationFrame(this.animate)
    }

    render() {
        return (
            <div class={styles.PixiContainer}>
                <div class="pixiHost" ref={(host) => { this.pixiHost = host }}></div>
                <div class={styles.PixiContainerText}>It grows and mutates</div>
            </div>
        )
    }
}