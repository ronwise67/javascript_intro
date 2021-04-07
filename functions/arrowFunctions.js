/**
 ARROW FUNCTIONS
 */

 // Normal function declaration

 function coffee(){
     return 'coffee is good'
 }

 // Normal function expression

 let tea = function(){
     return 'tea is healthy'
 }

console.log(coffee())
console.log(tea())

// Fat Arrow (or Arrow) functions are *always* anonymous

// Arrow function expression

let hotChocolate = () => {
    return 'hot chocolate is king'
}

console.log(hotChocolate())

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`}

console.log(animals(3, 2))
console.log(animals(0, 0))
console.log(animals(33, 20))

// Example of Hoisting I pulled off the web
function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");

// Example of calling the function before we write it
  catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}

// Concise vs Block body

//Concise
let apples = x => `There are ${x} apples`
console.log(apples(10))

//Block body
let bananas = x => {
    return `There are ${x} bananas`
}
console.log(bananas(5))

// Return must be explicitly written in a block-body arrow function

let func = () => 'Hi'
console.log(func())

let secondFunc = () => 
"Hi"
console.log(secondFunc())