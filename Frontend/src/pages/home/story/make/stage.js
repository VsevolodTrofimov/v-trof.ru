const PIXI = require('pixi.js') 

function makeCircle(props) {
    let circle = new PIXI.Graphics()
    
    if(props.fill) circle.beginFill(props.fill)
    if(props.lineStyle) circle.lineStyle(...props.lineStyle)

    if(typeof props.arcStart === 'number') {
        circle.arc(props.x, props.y, props.r,
                   props.arcStart, props.arcEnd, props.arcAnticlockwise
                  )
    } else {
        circle.drawCircle(props.x, props.y, props.r)
    }

    
    circle.endFill()

    return circle
}

function makeLine(props) {
    let line = new PIXI.Graphics()
    
    line.lineStyle(...props.lineStyle)

    line.moveTo(0, 0)
    line.lineTo(props.width || 0, props.height || 0)

    line.x = props.x
    line.y = props.y
    
    return line
}

export default function makeStage(props) {
    let stage = new PIXI.Container()

    stage.x = props.padding
    stage.y = props.padding

    let upperCircle = makeCircle({
        x: props.width/2 - props.circleR,
        y: props.circleR,
        lineStyle: props.lineStyle,
        r: props.circleR,
        arcStart: 0,
        arcEnd: 0.5 * Math.PI,
        arcAnticlockwise: true
    })
    
    let lowerCircle = makeCircle({
        x: props.width/2 + props.circleR,
        y: props.distance + props.circleR,
        lineStyle: props.lineStyle,
        r: props.circleR
    })

    let neck = makeLine({
        y: props.circleR,
        x: props.width/2,
        
        lineStyle: props.lineStyle,

        height: props.distance
    })

    let arrowWay = makeLine({
        y: props.circleR * 2,
        x: props.width/2 - props.circleR,
        
        lineStyle: props.lineStyle,

        width: props.circleR * 2
    })

    let arrowTop = makeLine({
        y: props.circleR * 2 - props.arrowSize,
        x: props.width/2 + props.circleR - props.arrowSize,
        
        lineStyle: props.lineStyle,

        width: props.arrowSize,
        height: props.arrowSize
    })

    let arrowBottom = makeLine({
        y: props.circleR * 2 + props.arrowSize,
        x: props.width/2 + props.circleR - props.arrowSize,
        
        lineStyle: props.lineStyle,

        width: props.arrowSize,
        height: -props.arrowSize
    })

    stage.addChild(upperCircle)
    // stage.addChild(lowerCircle)
    // stage.addChild(neck)
    stage.addChild(arrowWay)
    stage.addChild(arrowTop)
    stage.addChild(arrowBottom)

    return stage
}