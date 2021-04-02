//Hoisting

const add2 = (x, y) => { //Fat arrow functions don't get hoisted
    return x + y
}

console.log(add2(2, 5), adder(2, 5))

function adder (x, y){ //Functions can be defined after the call 
    return x + y
}