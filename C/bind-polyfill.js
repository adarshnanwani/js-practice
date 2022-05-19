Function.prototype.myBind = function(context, ...args) {
  context.fn = this
  return function(...args2) {
    context.fn(...args, ...args2)
  }
}
const ob = {
  name: 'adarsh'
}

function getName(age, location) {
    console.log(this.name)
    console.log(age)
    console.log(location)
}

const boundFn = getName.myBind(ob, 30)
boundFn('Blr')