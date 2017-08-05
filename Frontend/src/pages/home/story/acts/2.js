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

    const firstLapSteps = Math.floor(0.75 * context.props.lapSteps)
    const totalSteps = Math.floor((0.75 - 1 /* firstLap */ + context.props.lapsQuantity) * context.props.lapSteps)

    const scaleStep = (
        context.props.heroInnerR/context.props.heroInnerRSmall - 1
    ) / firstLapSteps

    let angle = Math.PI * 1.5 //1.5 coz y is inverted
    let completedScales = 0
    let completedLaps = 0
    let completedMorpthSteps = 0
    let completedSteps = 0

    context.changeText('Она растет и преображается', 500)

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
        
        if(completedMorpthSteps === 0) {
            setMorphSteps(
                context.beziers.children,
                context.props.bezierMorphSteps, 
                context.props.heroOuterR * 1.5
            )
        }

        context.beziers.children.forEach(curve => {
            redrawBezier(curve, {
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


        completedSteps++
        if(completedSteps === totalSteps) {
            context.hero.scaleInner(1 + scaleStep * completedScales)
            context.next()
        }

        if(completedSteps <= firstLapSteps) {
            context.hero.scaleInner(1 + scaleStep * completedScales)
            completedScales++
        }

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter)
        return context.stage
    }
}