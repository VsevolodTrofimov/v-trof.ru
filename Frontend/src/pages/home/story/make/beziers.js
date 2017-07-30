const PIXI = require('pixi-reduced-to-graphics') 


export function redrawBezier(curve, props) {
    curve.clear()

    curve.beginFill(props.fill || curve.fill)
    // curve.lineStyle(...props.lineStyle)
    curve.moveTo(curve.start.x, curve.start.y)
    
    curve.bezierCurveTo(
        props.cp1X, props.cp1Y,
        props.cp2X, props.cp2Y,
        curve.end.x, curve.end.y
    )

    //object assign seems to be dangerous to use
    curve.cp1X = props.cp1X
    curve.cp1Y = props.cp1Y
    
    curve.cp2X = props.cp2X
    curve.cp2Y = props.cp2Y
    
    curve.endFill()
}

export function makeBeziers(quantity, props) {
    let beziers = new PIXI.Container()
    let curve

    for(let i = 0; i < quantity; i++) {
        curve = new PIXI.Graphics()
        curve.rotation =  (Math.PI * 2 / quantity) * i
        curve.morphStep = {
            cp1X: 0,
            cp1Y: 0,

            cp2X: 0,
            cp2Y: 0
        }

        curve.start = {
            x: -props.heroInnerRSmall, 
            y: 0
        }

        curve.end = {
            x: 0,
            y: 0
        }

        curve.fill = props.heroColor

        redrawBezier(curve, {
            lineStyle: props.lineStyle,

            cp1X: 0,
            cp1Y: 0,
            
            cp2X: 0,
            cp2Y: 0,
        })
        beziers.addChild(curve)
    }


    return beziers
}