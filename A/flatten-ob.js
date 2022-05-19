function flatten(ob) {
    const flatOb = {}

    Object.keys(ob).map(prop => {
        const value = ob[prop]
        if (typeof value === 'object' && !Array.isArray(value)) {
            const data = flatten(value)
            Object.keys(data).map(key => flatOb[key] = data[key])
        } else if (Array.isArray(value)) {
            flatOb[prop] = value.slice()
        } else {
            flatOb[prop] = value
        }
    })
    return flatOb
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

console.log(flatten(ob))