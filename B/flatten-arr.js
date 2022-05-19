const arr = [1, 2, [3, 4], [[[5]]], 6, 7]

function flattenArray(arr) {
    const flatArr = []
    arr.forEach(item => {
        if(!Array.isArray(item))  {
            flatArr.push(item)
        } else {
            const data = flattenArray(item)
            data.forEach(item => flatArr.push(item))
        }
    })
    return flatArr
}