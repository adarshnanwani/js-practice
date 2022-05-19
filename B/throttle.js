function throttle(fn, timer) {
    let last = 0
    return function(...args){
        const now = new Date().getTime()

        if (now - last < timer) return
        last = now
        fn(...args)
    }
}

function run(name){
    console.log("hello " + name)
}

const throttledRun = throttle(run, 200)
throttledRun("a")
throttledRun("b")
throttledRun("c")
throttledRun("d")
setTimeout(() => {
    throttledRun("e")
}, 200)
