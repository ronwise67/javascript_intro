// name(data) => data out
// f(x) = x * x // sqr function

/*
Way one;
<keyword> <yourName>(<what i need to work>){
    //What I do
    return <something> //what I need to get back
}
*/

//Two ways to write a function in js

function sqr(x){
    return x * x
}

console.log(sqr(5))

//second way

let aSqr = (x) => {
return x * x
}

let bSqr = (x) => x * x
let cSqr = x => x * x

function greet(){ //This needs no parameters to work
    console.log("Hello world")
}

greet()


function betterGreet(fName){ //This is a one parameter function
    console.log("Hello " + fName)
}
betterGreet("Ron")

let createFullName = (fName, lName) => `${fName} ${lName}`

let fullName = createFullName("Ron", "Wise")
console.log(fullName)

function add2(x, y) {
    return x + y
}

console.log(add2 (3, 5))