//Hoisting

const add2 = (x, y) => { //Fat arrow functions don't get hoisted
    return x + y
}

console.log(add2(2, 5), adder(2, 5))

function adder (x, y){ //Functions can be defined after the call 
    return x + y
}

//Example 1

console.log(scissors)
var scissors = 'blue'

//Example 1 breakdown

var scissors
console.log(scissors)
scissors = 'blue'

//Example 2

function hoistTest(){
    console.log(testVar)
    var testVar = 10
    console.log(testVar)
}

hoistTest()

//Example 2 breakdown

function hoistTest(){
    var testVar
    console.log(testVar)
    testVar = 10
    console.log(testVar)
}

hoistTest()