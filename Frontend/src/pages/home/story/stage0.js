function shift(particle1, particle2) {
    particle1.xShift += 1;
    particle1.yShift += 1;

    particle2.xShift += 1;
    particle2.yShift += 1;
}

let state = {}

export default function stage0 (givenState) {
    return {
        setup: () => {
            state = givenState
            r = state.r

            state.particles = []
            for(let i = 0; i < state.numberOfParticles; i++) {
                state.particles.push({
                    x: Math.random() * r * sqrt(2) + r*0.3, //so it will spawn inside circle 100%
                    y: Math.random() * r * sqrt(2) + r*0.3,
                    xShift: 0,
                    yShift: 0
                })
            }
        },
        getFrame: () => {
            for(let i = 0; i < state.numberOfParticles - 1; i++) {
                for(let j = i + 1; j < state.numberOfParticles; j++) {
                    shift(state.particles[i], state.particles[j])
                }
            }

            for(let i = 0; i < state.numberOfParticles; i++) {
                //set center gravity
            }
        }
    }
}