Function.prototype.myCall = function(context, ...args) {
  context.fn = this
  context.fn(...args)
}

const ob = {
  name: 'adarsh'
}

function getName(age) {
  console.log(this.name)
  console.log(age)
}

getName.myCall(ob, 30)