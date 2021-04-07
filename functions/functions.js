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

/*
General ideas: at their broadest level, functions do the following:
1) they take some input which the function will handle/process
2) the process the input given to them
3) they usually, but not always, return some value
4) they can be invoked (used) as many times as we want, cutting down on code repetition
*/

//Example 1

function newFunc(num){
    return num + 1
}

console.log(newFunc(7))
console.log(newFunc(10))
console.log(newFunc(11))
console.log(newFunc(-2))

//Example 2

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}.`
}

console.log(sentence('Ron', 'Wise'))
console.log(sentence('Tyler', 'Shelton'))

let superImportantSentence = sentence('Nicky', 'Diborough')
console.log(superImportantSentence)

// Let's build a function that takes a complex type -- an array in this case -- and console.log each item in the input array

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!']
let arr2 = [5,6,7,8,9,10]

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element)
    }
}
iteratorFunc(arr)
iteratorFunc(arr2)