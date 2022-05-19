Function.prototype.myApply = function(context, argsArray) {
    context.fn = this
    context.fn(...argsArray)
}

function printName(age, location) {
  console.log(this.name)
  console.log(age)
  console.log(location)
}

const ob = {
    name: 'adarsh',
}

printName.myApply(ob, [30, "BLR"])