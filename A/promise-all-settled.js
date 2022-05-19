Promise.myAllSettled = function(promises) {
    let results= []
    if (promises.length === 0) return results
    let count= 0
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then((value) => {
                    results.push({
                        status: 'fulfilled',
                        value
                    })
                    count++
                    if (count===promises.length) resolve(results)
                }).catch((reason) => {
                    results.push({
                        status: 'rejected',
                        reason
                    })
                    count++
                    if (count===promises.length) resolve(results)
                })
        });
    })
}

const promiseA = Promise.resolve('A')
const promiseB = Promise.resolve('B')
const C ='C'
const rejectD = Promise.reject('D')

Promise.myAllSettled([])
    .then(res => console.log(res))
    .catch(err => console.error(err))