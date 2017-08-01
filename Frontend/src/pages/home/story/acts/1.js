import makeParticles from '@thisPage/story/make/particles'
import makeHero from '@thisPage/story/make/hero'
import getDistance from '@thisPage/story/utils/getDistance'

let circleCenter, ratio
function conditionalHide(particle, circleR) {
    ratio = getDistance(particle, circleCenter)/circleR
    
    
    if(ratio > 0.95) {
        particle.visible = false
    }
}


function getAway(from, obj, spreadFactor) {
    obj.shift.x += 1/(obj.x - from.x) * spreadFactor
    obj.shift.y += 1/(obj.x - from.y) * spreadFactor
}


export default function act1(context) {
    let circleR = context.props.circleR
    let minDiff = circleR
    let minDiffParticle = -1
    let distance, alphaStep
    let heroScaleOuterDone = 1

    circleCenter = {x: context.props.circleR, y: context.props.circleR}

    context.changeText('Затем одна вытесняет другие')

    if( ! context.hero) {
        context.hero = makeHero({
            innerR: context.props.heroInnerRSmall,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        })
    }

    if( ! context.particles) {
        context.particles = makeParticles(context.props)
        context.stage.addChild(context.particles)
    }

    let hero = context.hero
    context.stage.addChild(hero)
    
    context.particles.children.forEach((particle, idx) => {
        if(Math.abs(particle.x - circleR) < minDiff) {
            minDiff = Math.abs(particle.x - circleR)
            minDiffParticle = particle
        }
    })

    
    hero.x = circleR + context.props.width/2
    hero.y = minDiffParticle.y + context.props.neckLength
    hero.children[0].alpha = context.props.heroInitialAlpha
    hero.scaleOuter(0)

    alphaStep = context.props.heroAscensionSpeed * (1-context.props.heroInitialAlpha)/minDiffParticle.y

    minDiffParticle.x = circleR
    minDiffParticle.shift.x = 0
    minDiffParticle.shift.y = -context.props.heroAscensionSpeed

    context.particles.children.forEach(particle => {
        if(particle !== minDiffParticle) 
            getAway(minDiffParticle, particle, context.props.spreadFactor)
    })

    return function act1getFrame() {
        context.particles.children.forEach(particle => {
            particle.x += particle.shift.x
            particle.y += particle.shift.y

            conditionalHide(particle, circleR)
        })

        hero.children[0].alpha += alphaStep
        hero.y -= context.props.heroAscensionSpeed

        if(heroScaleOuterDone <= context.props.heroScaleOuterSteps) {
            hero.scaleOuter(heroScaleOuterDone/context.props.heroScaleOuterSteps)
            heroScaleOuterDone++
        }

        if(hero.y <= context.props.neckLength) {
            context.particles.visible = false
            context.next()
        }

        return context.stage
    }
}