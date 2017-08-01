import { h, Component } from 'preact'

import align from '@utils/align'

import styles from './heroesWithTrails.sass'

const heroSize = parseInt(styles.heroSize, 10)
let hero, trail

const Hero = (props) => {
    let style = {
        left: props.x,
        top: props.y
    }
    return <div class={styles.hero} ref={el => hero = el} style={style} />
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
            <div class={styles.trail} ref={el => trail = el} style={elStyle} />
        </div>
    )
}

export default class HeroesWithTrails extends Component {
    constructor(props) {
        super(props)
        this.state = {line: undefined}
    }

    run(y, x, maskX) {
        y -= heroSize/2
        let maskChildrenX

        let newHero = <Hero y={y} x={x} />
        let newTrail = <Trail y={y} trailX={x - maskX} maskX={maskX} />

        let line = (
            <div class={styles.line}>
                {newHero}
                {newTrail}
            </div>
        )

        setTimeout(() => {
            console.log(hero)
            hero.style.transform = 'translateX(100vw)'
            trail.style.transform = 'translateX(100vw)'
        }, 0)

        this.setState({line})
    }

    flush() {
        hero.style.transform = 'translateX(0)'
        trail.style.transform = 'translateX(0)'
        this.setState({line: undefined})
    }

    render() {
        if(this.state.line)
            return (<div class={styles.wrapper}> {this.state.line} </div>)
        return null
    }
}