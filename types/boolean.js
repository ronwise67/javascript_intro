// What is a boolean?
// They are either true / false

// var x = 5 <-- don't do this
// x = 5 <-- don't do this either
// let x = 5 <-- When you might want to change the value
// const x = 5 <-- When you want the value to stay the same

//creating a new variable (2 steps)

// Declaration
let y

// Initialization / variable assignment
y = 5


// How can we make booleans?
let x = Boolean(5) //Function that turns something into a bool
x = Boolean(o) // reassignment
console.log(x)

let z = false
z = true
console.log(typeof z)

let result = 5 > 4

// == checks for equality
// <=
// <
// >=
// >
// && returns true if both (a && b) are true
// || returns true if either (a || b) are true

let flippedBool = !true
console.log(flippedBool)
console.log(!true || false)

// Truthy / Falsey
// Truthy 'test', [1, 2], { test:5 }, 1

// Why are they useful?