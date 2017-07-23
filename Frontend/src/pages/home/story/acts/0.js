import makeParticles from '@thisPage/story/make/particles'

//particleShift is called a lot of times, so we put declarations out of it
let distanceX
let distanceY
let distanceFull
let ratio

let particleAModifierX = 1
let particleAModifierY = 1
let particleBModifierX = 1
let particleBModifierY = 1

function particleShift(particleA, particleB, spreadR) {
    distanceX = particleA.x - particleB.x
    distanceY = particleA.y - particleB.y
    distanceFull = Math.sqrt(distanceX*distanceX + distanceY * distanceY)

    //so that they push each other away
    if(particleA.x > particleB.x) {
        particleAModifierX = 1
        particleBModifierX = -1
    } else {
        particleAModifierX = -1
        particleBModifierX = 1
    }

    if(particleA.y > particleB.y) {
        particleAModifierY = 1
        particleBModifierY = -1
    } else {
        particleAModifierY = -1
        particleBModifierY = 1
    }

    if(distanceFull < spreadR) {
        ratio = (spreadR/distanceFull) ** 2
        // console.log(ratio, distanceFull, distanceX, distanceY)
        particleA.shift.x += ratio * distanceX * particleAModifierX
        particleA.shift.y += ratio * distanceY * particleAModifierY

        particleB.shift.x += ratio * distanceX * particleBModifierX
        particleB.shift.y += ratio * distanceY * particleBModifierY
    }
}

function keepInCircle(particle, circleR, factor) {
    distanceX = particle.x - circleR
    distanceY = particle.y - circleR
    distanceFull = Math.sqrt(distanceX*distanceX + distanceY * distanceY)
    
    // ratio = (circleR/distanceFull) ** 2

    particle.shift.x -= distanceX * factor
    particle.shift.y -= distanceY * factor
}

export default function act0(context) {
    const numberOfParticles = context.props.numberOfParticles
    
    if( ! context.particles) {
        context.particles = makeParticles(context.props)
        context.stage.addChild(context.particles)
    }
    

    return function act0getRender() {
        for(let a = 0; a < numberOfParticles - 1; a++) {
            for(let b = a + 1; b < numberOfParticles; b++) {
                particleShift(context.particles.children[a],
                              context.particles.children[b],
                              context.props.spreadR)
            }    
        }
        
        context.particles.children.forEach(function(particle) {
            keepInCircle(particle, context.props.circleR, context.props.spreadR/20)

            particle.x += particle.shift.x * context.props.speedFactor
            particle.y += particle.shift.y * context.props.speedFactor
            
            particle.shift.x = (Math.random() - 0.5) * context.props.randomFactor
            particle.shift.y = (Math.random() - 0.5) * context.props.randomFactor
        });
        return context.stage
    }
}