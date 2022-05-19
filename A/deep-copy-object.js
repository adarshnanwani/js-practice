function deepClone(ob){
    const cloneOb = {}

    Object.keys(ob).forEach(prop => {
        const value = ob[prop]
        if(typeof value === 'object' && !Array.isArray(value)){
            cloneOb[prop] = deepClone(value)
        } else if(Array.isArray(value)){
            cloneOb[prop] = value.slice()
        } else {
            cloneOb[prop] = value
        }
    })
    
    return cloneOb
}

const ob = {
    a: 'a',
    j: {
        b:'b',
        c: [1,2,3]
    },
    k: {
        r: {
            d: 'd',
            m: {
                e: 'e'
            }
        }
    }
}

const clone = deepClone(ob)