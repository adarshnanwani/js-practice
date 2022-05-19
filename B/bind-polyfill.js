const ob = {
    name: 'adarsh'
}

function getName(age, location) {
    console.log(this.name)
    console.log(age)
    console.log(location)
}

Function.prototype.myBind = function(context, ...args) {
    context.fn = this
    return function(...fnArgs) {
        context.fn(...args, ...fnArgs)
    }
}
const boundFn = getName.myBind(ob, 30)
boundFn('Blr')