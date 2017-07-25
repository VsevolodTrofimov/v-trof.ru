import makeParticles from '@thisPage/story/make/particles'

//for no memory allocation lag on slow devices
let circleCenter, particlePrediction = {x: 0, y: 0}
let direction, ratio, ratioPrediction
let distanceX, distanceY

function getDistance(objA, objB) {
    distanceX = objA.x - objB.x 
    distanceY = objA.y - objB.y 
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY) 
}

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

    circleCenter = {x: context.props.circleR, y: context.props.circleR}

    if( ! context.particles) {
        context.particles = makeParticles(context.props)
        context.stage.addChild(context.particles)
    }

    context.particles.children.forEach(particle => {
        direction = Math.random() * Math.PI * 2
        particle.direction = direction
        applyTurn(particle)
    })
    

    return function act0getRender() {
        context.particles.children.forEach(function(particle) {
            conditionalTurn(particle, context.props.circleR)
            particle.direction += Math.PI * (Math.random() - 0.5) / 36
            applyTurn(particle)
            particle.x += particle.shift.x
            particle.y += particle.shift.y
        });
        return context.stage
    }
}