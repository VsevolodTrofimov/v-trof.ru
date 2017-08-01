import makeHero from '@thisPage/story/make/hero'

export default function act5(context) {
    const accelX = context.props.circleR * 2 / context.props.act5TravelSteps 
    const circleCenter = {
        x: context.props.width/2 - context.props.circleR, 
        y: context.props.circleR
    }
    
    let stepX = context.props.heroSpeed

    context.changeText('Наконец, она становится доступной для остальных', 150)

    if( ! context.hero) {
        context.hero = makeHero({
            innerR: context.props.heroInnerR,
            outerR: context.props.heroOuterR,
            fill: context.props.heroColor,
            lineStyle: context.props.heroLineStyle
        })

        context.stage.addChild(context.hero)
    }


    context.hero.x = circleCenter.x
    context.hero.y = circleCenter.y + context.props.circleR
    context.hero.scaleOuter(1)


    return function act5getFrame() {
        context.hero.visible = false
        // context.hero.alpha = 0.4
        context.next()

        return context.stage
    }
}