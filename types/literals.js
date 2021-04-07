// LITERALS

// We use the Type Function to create an instance of said type

let favNum = strings(5) //string
let favNum = Number("5.0") //number
let favNum = new Number("5.0") //a look ahead - this is a Type Constructor


// When we just write the js notation of the type ie...

let litStr = "This is a string"
let litNum = 5.5
let litArr = [1, 2]
let litObj = {
    
}

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekDays.toString()) //toString is a 'method'
console.log(weekDays[3])

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.a)

// Array and Object Literals can hold primitive and 'complex' types (arrays, object, functions)

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}]
console.log(complexArrLiteral[5])
console.log(complexArrLiteral[3])

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3],
obj: {key: 'test'}, func: function(){return 'yes'}}
console.log(complexObjLiteral.func)
console.log(complexObjLiteral.arr)
