Function.prototype.myBind = function (context, ...args) {
  context.fn = this
  return function (...args2) {
    context.fn(...args, ...args2)
  }
}

function printName(age, location) {
  console.log(this.name)
  console.log(age)
  console.log(location)
}

const ob = {
  name: 'adarsh',
}

const boundFn = printName.bind(ob, 30)
boundFn('bangalore')

const myBoundFn = printName.myBind(ob, 30)
myBoundFn('bangalore')