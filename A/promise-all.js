Promise.myAll = function(arr) {
    const results = []
    let count = 0
    return new Promise(function (resolve, reject) {
        arr.forEach((value, index) => {
            Promise.resolve(value).then(res => {
                results[index] = res
                count++
                if (count === arr.length) resolve(results)
            }).catch(err => reject(err))
        })
    })
}

const promiseA = Promise.resolve('A')
const promiseB = Promise.resolve('B')
const C ='C'
const rejectD = Promise.reject('D')

Promise.myAll([promiseA, C, promiseB, rejectD])
    .then(res => console.log(res))
    .catch(err => console.error(err))