Promise.myAllSettled = function(promiseArr) {
    const result = []
    let count = 0
    return new Promise((resolve, reject) => {
        if (promiseArr.length === 0) resolve(promiseArr)

        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                count++
                result[index] = {
                    status: 'fulfilled',
                    value
                }
                if (count === promiseArr.length) resolve(result)
            }).catch(reason => {
                count++
                result[index] = {
                    status: 'rejected',
                    reason
                }
                if (count === promiseArr.length) resolve(result)
            })
        })

    })
}
Promise.myAllSettled([Promise.reject('D')])
    .then(res => console.log(res))
    .catch(err => console.error(err))