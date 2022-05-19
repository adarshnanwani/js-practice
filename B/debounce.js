function debounce(fn, timer) {
    let timeout
    return function(...args){
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null
            fn(...args)
        }, timer)
    }
}

function run(name){
    console.log("hello " + name)
}

const debouncedRun = debounce(run, 2000)
debouncedRun("a")
debouncedRun("b")
debouncedRun("c")
debouncedRun("d")
