Function.prototype.myCall = function(context, ...args) {
    context.fn = this
    context.fn(...args)
}

function printName(age, location) {
  console.log(this.name)
  console.log(age)
  console.log(location)
}

const ob = {
    name: 'adarsh',
}

printName.myCall(ob, 30, "BLR")