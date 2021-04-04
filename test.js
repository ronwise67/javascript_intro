// Callbacks

const greet = (name) => {
    console.log("Hello", name)
}

greet("Ron")

const delay = (cb, seconds) => {
    setTimeout(() => {
        cb(name)
    }, seconds * 1000)
}

delay(greet, "Ron", 5)
delay((data) => {
    console.log(data)
}, "Ron", 5)