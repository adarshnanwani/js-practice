function debounce(fn, timer) {
  let timeout
  return function(...args){
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(function() {
      timeout = null
      fn(...args)
    }, timer)
  }
}