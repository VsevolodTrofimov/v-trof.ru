import makeHero from '@thisPage/story/make/hero'

function setCurrentPos(hero, angle, circleR, circleCenter) {
    hero.x = Math.cos(angle) * circleR + circleCenter.x
    hero.y = -Math.sin(angle) * circleR + circleCenter.y
}

let targetScale
function getScaleStep(maxSpread, quantity, currentScale) {
    //pushing it off-norm with ^2
    targetScale = (1 + Math.random() * 2 * maxSpread - maxSpread) ** 2
    return (targetScale - currentScale) / quantity
}


export default function act2(context) {
    const angleStep = Math.PI * 2 / context.props.lapSteps 

    const circleCenter = {
        x: context.props.width/2 - context.props.circleR, 
        y: context.props.circleR
    }
    
    let angle = 0
    let scaleStep = 0
    let completedScaleSteps = context.props.heroOuterRSpreadSteps
    let currentScale = 1
    let maxSpread = context.props.heroOuterRSpreadMax

    context.changeText('...gets adjusted', 250)

    if( ! context.hero) {
        context.hero = makeHero({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        })

        context.stage.addChild(context.hero)
    }


    context.hero.x = circleCenter.x + context.props.circleR
    context.hero.y = circleCenter.y

    return function act2getFrame() {
        angle += angleStep

        if(completedScaleSteps === context.props.heroOuterRSpreadSteps) {
            scaleStep = getScaleStep(
                            maxSpread,
                            context.props.heroOuterRSpreadSteps,
                            currentScale
                        )
            
            completedScaleSteps = 0
        }
        
        currentScale += scaleStep
        context.hero.scaleOuter(currentScale)
        console.log(currentScale)
        completedScaleSteps++

        if(context.hero.position.y === circleCenter.y + context.props.circleR)
            context.next()

        if(context.hero.position.x === circleCenter.x - context.props.circleR)
            maxSpread = 0

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter)
        return context.stage
    }
}