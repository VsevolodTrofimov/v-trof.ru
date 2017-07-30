import makeHero from '@thisPage/story/make/hero'
import { makeBeziers, redrawBezier } from '@thisPage/story/make/beziers'

let morphTarget, controlPoint, yMorph
function setMorphSteps(beziers, morphSteps, boundary){
    beziers.forEach(curve => {
        yMorph =  (Math.random() * 0.75 + 0.125) * boundary
        morphTarget = {
            cp1X: -(Math.random() * 0.75 + 0.125) * boundary,
            cp1Y: yMorph,
            
            cp2X: (Math.random() * 0.75 + 0.125) * boundary,
            cp2Y: yMorph
        }

        for(controlPoint in morphTarget) {
            curve.morphStep[controlPoint] = (
                 morphTarget[controlPoint] - curve[controlPoint]
            ) / morphSteps
        }
    })
}


function setCurrentPos(hero, angle, circleR, circleCenter) {
    hero.x = Math.cos(angle) * circleR + circleCenter.x
    hero.y = Math.sin(angle) * circleR + circleCenter.y
}


export default function act2(context) {
    const angleStep = Math.PI * 2 / context.props.lapSteps 

    const circleCenter = {
        x: context.props.width/2 + context.props.circleR, 
        y: context.props.neckLength + context.props.circleR
    }

    const scaleStep = (
        context.props.heroInnerR/context.props.heroInnerRSmall
    ) / context.props.lapSteps
    
    let angle = Math.PI * 1.5 //1.5 coz y is inverted
    let completedScales = 0
    let completedLaps = 0
    let completedMorpthSteps = 0

    context.changeText('It grows and mutates', 500)

    if( ! context.hero) {
        context.hero = makeHero({
            innerR: context.props.heroInnerRSmall,
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

    context.hero.x = circleCenter.x
    context.hero.y = context.props.neckLength

    return function act2getFrame() {
        angle += angleStep
        if(context.hero.x === context.props.width/2) {
            completedLaps++
            if(completedLaps == context.props.lapsQuantity) {
                context.next()
            }
        }

        if(completedLaps < 1) {
            context.hero.scaleInner(1 + scaleStep * completedScales)
            completedScales++
        }
        
        if(completedMorpthSteps === 0) {
            setMorphSteps(
                context.beziers.children,
                context.props.bezierMorphSteps, 
                context.props.heroOuterR * 1.5
            )
        }

        context.beziers.children.forEach(curve => {
            redrawBezier(curve, {
                // lineStyle: context.props.lineStyle,
                cp1X: curve.cp1X + curve.morphStep.cp1X,
                cp1Y: curve.cp1Y + curve.morphStep.cp1Y,
                
                cp2X: curve.cp2X + curve.morphStep.cp2X,
                cp2Y: curve.cp2Y + curve.morphStep.cp2Y
            })

            //I've put it here accidentelly, but it's better this way
            completedMorpthSteps++
            if(completedMorpthSteps === context.props.bezierMorphSteps) {
                completedMorpthSteps = 0
            }
        })

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter)
        return context.stage
    }
}