const PIXI = require('pixi-reduced-to-graphics') 

function redrawInner(inner, props) {
    inner.clear()
    inner.beginFill(props.fill)
    inner.drawCircle(0, 0, props.r)
    inner.endFill()
}

function redrawOuter(outer, props) {
    outer.clear()
    outer.lineStyle(...props.lineStyle)
    outer.drawCircle(0, 0, props.r)
    outer.endFill()
}

export default function makeHero(props) {
    let hero = new PIXI.Container()
    
    let inner = new PIXI.Graphics()
    redrawInner(inner, {
        fill: props.fill,
        r: props.innerR
    })

    let outer = new PIXI.Graphics()
    redrawOuter(outer, {
        lineStyle: props.lineStyle,
        r: props.outerR
    })


    hero.addChild(inner)
    hero.addChild(outer)

    hero.scaleInner = (ratio) => redrawInner(inner, {
        fill: props.fill,
        r: props.innerR * ratio
    })

    hero.scaleOuter = (ratio) => redrawOuter(outer, {
        lineStyle: props.lineStyle,
        r: props.outerR * ratio
    })


    return hero
}