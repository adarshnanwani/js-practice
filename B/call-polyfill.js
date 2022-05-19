const ob = {
    name: 'adarsh'
}

function getName(age, location) {
    console.log(this.name)
    console.log(age)
    console.log(location)
}

Function.prototype.myCall = function(context, ...args){
    context.fn = this
    context.fn(...args)
}

getName.myCall(ob, 30, 'BLR')