import { h, Component } from 'preact'

import align from '@utils/align'

import styles from './heroesWithTrails.sass'

const heroSize = parseInt(styles.heroSize, 10)
const animationDurationMobile = parseInt(styles.animationDurationMobile, 10)
const animationDurationDefault = parseInt(styles.animationDurationDefault, 10)
const animationDurationGiant = parseInt(styles.animationDurationGiant, 10)

const breakpointMobile = parseInt(styles.breakpointMobile, 10)
const breakpointGiant = parseInt(styles.breakpointGiant, 10)

const predictDuration = () => {
    const width = document.body.getBoundingClientRect().width

    if(width < breakpointMobile) return animationDurationMobile
    if(width > breakpointGiant) return animationDurationGiant
    
    return animationDurationDefault
}

const Hero = (props) => {
    let style = {
        left: props.x,
        top: props.y
    }
    return <div class={styles.hero} style={style} />
}

const Trail = (props) => {
    let maskStyle = {
        left: props.maskX,
        top: props.y
    } 

    let elStyle = {
        left: props.trailX,
    }
    return (
        <div class={styles.trailMask} style={maskStyle}>
            <div class={styles.trail} style={elStyle} />
        </div>
    )
}

export default class HeroesWithTrails extends Component {
    constructor(props) {
        super(props)
        this.state = {line: undefined, yShift: 0}
        this.run = this.run.bind(this)
        this.flush = this.flush.bind(this)
    }

    run(y, yShift, x, maskX, transitionCb, endCb) {        
        y -= heroSize/2
        yShift *= -1 //should compensate scroll, not worsen it 

        let newHero = <Hero y={y} x={x} />
        let newTrail = <Trail y={y} trailX={x - maskX} maskX={maskX} />

        let line = (
            <div class={styles.line}>
                {newHero}
                {newTrail}
            </div>
        )

        if(transitionCb) setTimeout(transitionCb, predictDuration()/2)
        if(endCb) setTimeout(endCb, predictDuration())

        this.setState({line, yShift})
    }

    flush() {
        this.setState({line: undefined})
    }

    render() {
        if(this.state.line)
            return (<div class={styles.wrapper} style={{top: this.state.yShift}}> {this.state.line} </div>)
        return null
    }
}