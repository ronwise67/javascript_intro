// Objects

/*
syntax:
let obj = {
    k1: v1
    k2: v2
}

key can be in "" but don't have to be in they are valid var names,
ie they don't start with a "number" of have valid characters or has spaces.
*/

let obj1 = {
    name: "Ron"
}
let obj2 = {
    "name": "Bob"
}

// There are two ways to get things out of objects "Dot" notation and "square brackets" notation.

console.log(obj1.name)
console.log(obj1['name'])

let car = {
    make: 'mazda',
    model: '3',
    year: 2012,
    miles: 120_000,
    owners: ['Ron', 'Diane'] 
}
console.log(car.miles)
console.log(car['miles'])
console.log(car.owners[1]) // obj can hold more than just primitive types

let person = {
    fName: 'Ron',
    lName: 'Wise',
    fullName: function() {
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

let builderObj = {} // an empty array
console.log(builderObj)
builderObj.name = "Ron"
builderObj["age"] = 53
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj)


// A look ahead STACKS and QUEUES <= we can build these with objects
//  Stacks are LIFO
// Queues are FIFO

