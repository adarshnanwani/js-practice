function compose(...fns) {
  let result 
  return function(val) {
    result = val
    for (let i = fns.length-1; i>-1; i--) {
      result = fns[i](result)
    }
    return result
  }
}


const addTwo = n => n+2
const multipleBy5 = n => n*5

const composed = compose(multipleBy5, addTwo)
console.log(composed(3))