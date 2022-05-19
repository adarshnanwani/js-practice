Function.prototype.myApply = function(context, arrArgs) {
  context.fn = this
  return context.fn(...arrArgs)
}

const ob = {
  name: 'adarsh'
}

function getName(age) {
  console.log(this.name)
  console.log(age)
}

getName.myApply(ob, [30])