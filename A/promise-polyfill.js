const states = {
    pending: 'PENDING',
    fulfilled: 'FULFILLED',
    rejected: 'REJECTED'
}

function MyPromise(executor) {
    let promiseStatus = states.pending
    let value
    const handlers = []
    const catchers = []

    function resolve(res){
        if (promiseStatus !== states.pending) return
        promiseStatus = states.fulfilled
        value = res

        handlers.forEach(handler => {
            value = handler(value)
        })
    }

    function reject (err) {
        if (promiseStatus !== states.pending) return
        promiseStatus = states.rejected
        value = err

        catchers.forEach(catcher => value = catcher(value))
    }

    this.then = function(callback) {
        if (promiseStatus === states.fulfilled) {
            callback(value)
        } else {
            handlers.push(callback)
        }
    }

    this.catch = function(callback) {
        if (promiseStatus === states.rejected) {
            callback(value)
        } else {
            catchers.push(callback)
        }
    }

    executor(resolve,reject)
}

const myPromise = new MyPromise((resolve, reject)=> {
    setTimeout(resolve, 2000, 'hello from success')
})

myPromise.then(res => {
    console.log(res)
    return res + ' added'
}).then(res => {
    console.log(res)
})