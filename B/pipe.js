function pipe(...fnArr) {
    let result 
    return function(value) {
        result = value
        for(let i = 0; i<fnArr.length; i++) {
            result = fnArr[i](result)
        }
        return result 
    }
}

const addTwo = n => n+2
const multipleBy5 = n => n*5

const piped = pipe(multipleBy5, addTwo)
console.log(piped(3))