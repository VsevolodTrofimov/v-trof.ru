const memCache = {}

//for debugging
export const getCache = () => Object.assign(memCache)

const standartize = arg => {
    const defaults = {
        noCache: false,
        forceUpdate: false
    }

    if(arg instanceof String || typeof arg === 'string') arg = {url: arg}
    return Object.assign({}, defaults, arg)
}

export default function prefetch() {
    const args = [...arguments]

    console.log('prefetching', args)

    const promises = args.map(arg => {
        arg = standartize(arg)
        if(arg.noCache) return fetch(arg.url)
        if( ! memCache.hasOwnProperty(arg.url) || arg.forceUpdate) memCache[arg.url] = fetch(arg.url)
        
        return memCache[arg.url]
    })

    if(promises.length === 1) return promises[0]
    return Promise.all[promises]
}