import makeHero from '@thisPage/story/make/hero'
import { makeBeziers, redrawBezier } from '@thisPage/story/make/beziers'

let morphTarget, controlPoint
function resetMorphTargets(beziers, morphFrames){
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
            ) / morphFrames
        }
    })
}


export default function act3(context) {
    const stepY = -context.props.neckLength/context.props.neckTravelFrames
    let completedSteps = 0

    context.changeText('...finally takes shape', 250)

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
                      context.props.bezierMorphFrames, )

    return function act3getFrame() {
        context.hero.y += stepY

        context.beziers.children.forEach(curve => {
            redrawBezier(curve, {
                // lineStyle: context.props.lineStyle,
                cp1X: curve.cp1X + curve.morphStep.cp1X,
                cp1Y: curve.cp1Y + curve.morphStep.cp1Y,
                
                cp2X: curve.cp2X + curve.morphStep.cp2X,
                cp2Y: curve.cp2Y + curve.morphStep.cp2Y
            })
        })

        completedSteps++
        if(completedSteps === context.props.neckTravelFrames) context.next()
        
        return context.stage
    }
}