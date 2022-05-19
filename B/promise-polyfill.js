const states = {
    pending: 'PENDING',
    fulfilled: 'FULFILLED',
    rejected: 'REJECTED'
}

function MyPromise(executor) {
    this.status = states.pending
    let isResolved = false
    let isRejected = false
    let value
    const handlers = []
    const catchers = []

    function resolve(value) {
        isResolved= true
        this.status = states.fulfilled
        value = value
        let that = this

        handlers.forEach(({successCallback, failureCallback}) => {
            try {
                value = successCallback(value)
            } catch(err) {
                that.status = states.rejected
                value = err
                reject(value)
            }
        })
    }

    function reject(reason) {
        isRejected = true
        this.status = states.rejected
        value = reason
        catchers.forEach(catcher => {
            value = catcher(value)
        })
    }

    this.then = function(successCallback, failureCallback) {
        if (this.status === states.fulfilled) {
            try {
                successCallback(value)
            } catch(err) {
               if(failureCallback) failureCallback(err)
            }
        }
        else {
            handlers.push({successCallback, failureCallback})
        }
        return this
    }

    this.catch = function(failureCallback) {
        if (this.status === states.rejected) failureCallback(value)
        else catchers.push(failureCallback)
        return this
    }

    executor(resolve, reject)
}

const myPromise = new MyPromise((resolve, reject)=> {
    setTimeout(resolve, 2000, 'hello from success')
})

myPromise.then(res => {
    console.log(res)
    return res + ' added'
}).then(res => {
    console.log(res)
    throw new Error('whaaaaaa')
}).catch(err => console.log(err))