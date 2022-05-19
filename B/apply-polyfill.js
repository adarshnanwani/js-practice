Function.prototype.myApply = function(context, argsArr=[]){
    context.fn = this
    context.fn(...argsArr)
}

const ob = {
    name: 'adarsh'
}

function getName(age) {
    console.log(this.name)
    console.log(age)
}

getName.myApply(ob, [30])