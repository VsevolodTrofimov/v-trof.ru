import makeHero from '@thisPage/story/make/hero'
import { makeBeziers, redrawBezier } from '@thisPage/story/make/beziers'

let morphTarget, controlPoint
function resetMorphTargets(beziers, morphSteps){
    beziers.forEach(curve => {
        morphTarget = {
            cp1X: 0,
            cp1Y: 0,
            
            cp2X: 0,
            cp2Y: 0
        }

        for(controlPoint in morphTarget) {
            curve.morphStep[controlPoint] = (
                 morphTarget[controlPoint] - curve[controlPoint]
            ) / morphSteps
        }
    })
}


export default function act3(context) {
    const stepY = -context.props.heroSpeed
    const neckTravelSteps = Math.floor(context.props.neckLength / -stepY)

    let completedSteps = 0
    let beziersToMorph = 1
    let bezierResetDelayStepsCompelted = 0
    let i, curve

    context.changeText('Принимает форму', 250)

    if( ! context.hero) {
        context.hero = makeHero({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        })

        context.stage.addChild(context.hero)
    }

    if( ! context.beziers) {
        context.beziers = makeBeziers(context.props.heroBeziers,
                                      context.props)
        context.hero.addChild(context.beziers)
    }

    context.hero.x = context.props.width/2
    context.hero.y = context.props.neckLength + context.props.circleR

    resetMorphTargets(context.beziers.children,
                      context.props.bezierMorphSteps, )

    return function act3getFrame() {
        context.hero.y += stepY

        for(i = 0; i < beziersToMorph; i++) {
            curve = context.beziers.children[i]
            redrawBezier(curve, {
                cp1X: curve.cp1X + curve.morphStep.cp1X,
                cp1Y: curve.cp1Y + curve.morphStep.cp1Y,
                
                cp2X: curve.cp2X + curve.morphStep.cp2X,
                cp2Y: curve.cp2Y + curve.morphStep.cp2Y
            })
        }

        bezierResetDelayStepsCompelted++
        if(bezierResetDelayStepsCompelted === context.props.bezierResetDelaySteps) {
            bezierResetDelayStepsCompelted = 0
            if(beziersToMorph < context.props.heroBeziers) beziersToMorph++
        }

        completedSteps++
        if(completedSteps === neckTravelSteps) context.next()
        
        return context.stage
    }
}