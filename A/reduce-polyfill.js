Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue

    this.forEach((item, index) => {
        accumulator = callback(accumulator, item, index, this)
    })

    return accumulator
}

const arr = [1,2,3,4,5]

const sum = arr.myReduce((sum, val) => val+sum, 0)
console.log(sum)