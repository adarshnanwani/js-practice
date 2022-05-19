function flatten(arr) {
    const flatArr = []
    arr.forEach(item => {
        if(Array.isArray(item)) {
            const data = flatten(item)
            data.forEach(i => flatArr.push(i))
        } else {
            flatArr.push(item)
        }
    })
    return flatArr
}

const arr = [1, 2, [3, 4], [[[5]]], 6, 7]

console.log(flatten(arr))