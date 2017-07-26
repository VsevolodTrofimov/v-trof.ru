import makeParticles from '@thisPage/story/make/particles'
import getDistance from '@thisPage/story/utils/getDistance'

let circleCenter, ratio

function conditionalHide(particle, circleR) {
    ratio = getDistance(particle, circleCenter)/circleR
    
    
    if(ratio > 0.95) {
        particle.visible = false
    }
} 

function getAway(from, obj, spreadFactor) {
    obj.shift.x = 1/(obj.x - from.x) * spreadFactor
    obj.shift.y = 1/(obj.x - from.y) * spreadFactor
}

export default function act1(context) {
    let circleR = context.props.circleR
    let minDiff = circleR
    let minDiffParticle = -1

    circleCenter = {x: context.props.circleR, y: context.props.circleR}

    context.changeText('Then one takes over')
    
    if( ! context.particles) {
        context.particles = makeParticles(context.props)
        context.stage.addChild(context.particles)
    }
    
    context.particles.children.forEach((particle, idx) => {
        if(Math.abs(particle.x - circleR) < minDiff) {
            minDiff = particle.x - circleR
            minDiffParticle = particle
        }
    })

    console.log(minDiffParticle)
    minDiffParticle.fillColor = context.props.heroColor
    minDiffParticle.tint = context.props.heroColor
    // minDiffParticle.x = circleR
    minDiffParticle.shift.x = 0
    minDiffParticle.shift.y = 1

    context.particles.children.forEach(particle => {
        if(particle !== minDiffParticle) 
            getAway(minDiffParticle, particle, context.props.spreadFactor)
    })

    return function act1getRender() {
        context.particles.children.forEach(particle => {
            particle.x += particle.shift.x
            particle.y += particle.shift.y

            if(particle !== minDiffParticle) conditionalHide(particle, circleR)
        })

        return context.stage
    }
}