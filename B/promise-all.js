Promise.myAll = function(promiseArr) {
    let resolvedCount = 0
    const data = []

    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                data[index] = res
                resolvedCount++
                if (resolvedCount === promiseArr.length) resolve(data)
            }).catch(err => reject(err))
        })
    })
}


const promiseA = Promise.resolve('A')
const promiseB = Promise.resolve('B')
const C ='C'
// const rejectD = Promise.reject('D')

Promise.myAll([C, promiseB, promiseA])
    .then(res => console.log(res))
    .catch(err => console.error(err))