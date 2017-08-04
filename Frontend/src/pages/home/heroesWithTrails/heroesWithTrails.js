import { h, Component } from 'preact'

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
        this.state = {
            HeroY: 0,
            HeroX: 0,
            maskX: 0,

        }
        this.run = this.run.bind(this)
        this.flush = this.flush.bind(this)
    }

    run(heroY, scrollY, heroX, maskX, transitionCb, endCb) {        
        heroY -= heroSize/2
        scrollY *= -1 //should compensate scroll, not worsen it 

        if(transitionCb) setTimeout(transitionCb, predictDuration()/2)
        if(endCb) setTimeout(endCb, predictDuration())

        this.setState({heroY, scrollY, heroX, maskX, render: true})
    }

    flush() {
        this.setState({render: false})
    }

    render() {
        if(this.state.render) return (
            <div class={styles.wrapper} style={{top: this.state.yShift}}> 
                <div class={styles.line}>
                    <Hero y={this.state.heroY} x={this.state.heroX} />
                    <Trail y={this.state.heroY} 
                           trailX={this.state.heroX - this.state.maskX} 
                           maskX={this.state.maskX} 
                    />
                </div>
            </div>
        )
        return null
    }
}