function compose(...fnArr) {
    let result 
    return function(value) {
        result = value
        for(let i = fnArr.length-1; i>-1; i--) {
            result = fnArr[i](result)
        }
        return result 
    }
}

const addTwo = n => n+2
const multipleBy5 = n => n*5

const composed = compose(multipleBy5, addTwo)
console.log(composed(3))