import makeParticles from '@thisPage/story/make/particles'
import getDistance from '@thisPage/story/utils/getDistance'

//for no memory allocation lag on slow devices
let circleCenter, particlePrediction = {x: 0, y: 0}
let direction, ratio, ratioPrediction

function applyTurn(particle) {
    particle.shift.x = Math.cos(particle.direction)
    particle.shift.y = Math.sin(particle.direction)
}


function conditionalTurn(particle, circleR) {
    ratio = getDistance(particle, circleCenter)/circleR
    
    if(ratio > 0.9) {
        particlePrediction.x = particle.x + particle.shift.x
        particlePrediction.y = particle.y + particle.shift.y
        ratioPrediction = getDistance(particlePrediction, circleCenter)/circleR

        //moves out
        if(ratioPrediction > ratio) {
            particle.direction += Math.PI * (0.75 + Math.random()/2)
        }
    }
}


export default function act0(context) {
    const numberOfParticles = context.props.numberOfParticles
    let shouldEnd = false
    let particle

    circleCenter = {x: context.props.circleR, y: context.props.circleR}

    context.changeText('Many ideas wander in my mind')

    if( ! context.particles) {
        context.particles = makeParticles(context.props)
        context.stage.addChild(context.particles)
    }

    context.particles.children.forEach(particle => {
        direction = Math.random() * Math.PI * 2
        particle.direction = direction
        applyTurn(particle)
    })

    setTimeout(function() {
        shouldEnd = true
    }, context.props.act0Duration);

    return function act0getFrame() {
        for(let i = 0; i < numberOfParticles; i++) {
            particle = context.particles.children[i]
            conditionalTurn(particle, context.props.circleR)
            particle.direction += Math.PI * (Math.random() - 0.5) / 36
            applyTurn(particle)
            particle.x += particle.shift.x
            particle.y += particle.shift.y

            if(shouldEnd && Math.round(particle.x) === context.props.circleR && particle.y >= context.props.circleR) {
                context.next()
                break
            }
        }
        return context.stage
    }
}