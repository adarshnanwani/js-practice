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

function deepCopy(ob) {
    const cloneOb = {}

    Object.entries(ob).forEach(([key, value]) => {
        if(typeof value === 'object') {
            cloneOb[key] = deepCopy(value)
        } else {
            cloneOb[key] = value
        }
    })
    return cloneOb
}

const cloneOb = deepCopy(ob)