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

function flattenOb(ob) {
    const flatOb = {}
    Object.entries(ob).forEach(([key, value]) => {
        if(typeof value === 'object' && !Array.isArray(value)) {
            const data = flattenOb(value)
            Object.entries(data).forEach(([key, value]) => {
                flatOb[key] = value
            })
        } else {
            flatOb[key] = value
        }
    })
    return flatOb
}