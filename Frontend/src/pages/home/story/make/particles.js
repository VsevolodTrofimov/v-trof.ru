function makeParticle(props) {
    let particle = new PIXI.Graphics()
    
    particle.beginFill(props.color)
    
    if(props.lineStyle) particle.lineStyle(...props.lineStyle)
    
    particle.drawCircle(0, 0, props.r)

    particle.x = props.x
    particle.y = props.y

    particle.endFill()

    return particle
}


function randomShiftInCircle(r) {
    //they are in square inside circle of given radius
    return Math.random() * r * (Math.sqrt(2) - 0.1) + r * 0.35
}

export default function makeParticles(props) {
    let particles = new PIXI.Container(props.circleR * 2, props.circleR * 2)
    particles.x = props.width/2
    particles.y = props.distance

    let particle = undefined
    
    for(let i = 0; i < props.numberOfParticles; i++) {
        particle = makeParticle({
            x: randomShiftInCircle(props.circleR),
            y: randomShiftInCircle(props.circleR),
            r: props.particleR,
            color: props.particleColor
        })

        particle.shift = {}
        particle.shift.x = 0
        particle.shift.y = 0

        particles.addChild(particle)
    }

    return particles
}



//For debug only
function addParticleZone(particles, props) {
    let particleZone = new PIXI.Graphics()
    particleZone.beginFill(0xff0000, 0.5)
    particleZone.drawRect(props.circleR * 0.35, props.circleR * 0.35, 
                          props.circleR * (Math.sqrt(2) - 0.1), 
                          props.circleR * (Math.sqrt(2) - 0.1))

    particles.addChild(particleZone)
}