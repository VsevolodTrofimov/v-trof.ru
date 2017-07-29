import makeHero from '@thisPage/story/make/hero'

function setCurrentPos(hero, angle, circleR, circleCenter) {
    hero.x = Math.cos(angle) * circleR + circleCenter.x
    hero.y = -Math.sin(angle) * circleR + circleCenter.y
}


export default function act2(context) {
    const angleStep = Math.PI * 2 / context.props.lapFrames 

    const circleCenter = {
        x: context.props.width/2 - context.props.circleR, 
        y: context.props.circleR
    }
    
    let angle = 0

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

        if(context.hero.position.y === circleCenter.y + context.props.circleR) context.next()

        setCurrentPos(context.hero, angle, context.props.circleR, circleCenter)
        return context.stage
    }
}