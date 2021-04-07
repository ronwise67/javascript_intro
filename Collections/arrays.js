// Arrays
// Arrays are used to store multiple values in a single variable
// There are array methods that allow us to traverse, as well as mutate the data being stored within the array
// Array are 0 indexed, first value will have an index of 0, and the last item will have an idex of the array length - 1

let arr = ['first', 'second', 'third']
console.log(arr[arr.length - 1])

let arr2 = Array(3)
console.log(arr2.length)

// Foreach
let boardGames = ['Monopoly', 'Sorry', 'Risk', 'Clue']
boardGames.forEach(function (game){
    console.log(game)
})

// Methods

// Array.push
// Add an element to the end of the array

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.push('salt'))
console.log(shoppingList)

// Array.pop
// Removes the last element in our array, and it'll return that element

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.push('salt'))
console.log(shoppingList)


// MISSING ITEMS!!

// Array.map()
// Transforms the elements in the original array by calling the given functions once for each element in the array

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.map((item) => item.toUpperCase()))

// Array.filters()
// Creates a new array with only the elements that pass the test in the given function


// Array.find
// Returns the first element in an array that passes a test given as a function

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.find((item) => item.startsWith('l')))

// Array.reduce()
// Executes a given function for each value for the array and returns a single value

// LOOK AT 6:15 ON THE VIDEO!!

let costs = [2.00, 3.00, 4.00, 5.00]
//console.log(costs.reduce((acc, currentView) => {
//    return acc + currentView
//})

let costs2 = [1,1,1,1,1]
console.log(costs2.reduce((acc, currentValue) => {
    return acc + currentValue
},10))

// Array.include
// Determines whether an array has a specific element

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.includes('limes'))

// Array.index()
// Search the array for a specific element and return its first index and it will return -1 if the element is not found

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.indexOf('limes'))

// Array.findIndex ()
// Returns the index of the first element in an array that passes the test in a given function. Returns -1 when the element is not found

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.findIndex(item => item.startsWith('l')))

// Array.every()
// Checks if all elements of an array pass a test as a function. If there is 1 element that returns a false value, the function returns and does not check the rest of the elements.

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.every(item => item.startsWith('c')))   //false
console.log(shoppingList.every(item => item.length > 1))        //true

// Array.concat()
// Merge two or more arrays and returns a new array

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
let shoppingList2 = ['eggs', 'sugar']
console.log(shoppingList.concat(shoppingList2)) 

let fullList = shoppingList.concat(shoppingList2)
console.log(fullName)

// Array.slice()
// Selects a part of an array and returns a new array. Selects a elements starting at the provided argument, and ends at, but does not include the provided end argument.

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.slice(1,3)) 

// Array.splice()
// Add/remove elements in an array and returns the removed elements. First argument takes in an integer and specifies at what index to add/remove the elements. Second argument takes in the number of the items 

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
shoppingList.splice(2,1, 'cherries')
console.log(shoppingList)

// Array.sort()
// Sorts the items in the array. The sort order and either be alphabetic or numeric, and either ascending or descending. By default soft() orders the value as strings in the alphabetic and ascending order. Can take in ...

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.sort())

let costs = [3,2,67,5]
console.log(costs.sort((a,b) => a-b))
console.log(costs.sort((a,b) => b-a))

// Array.reverse
// Reverses the order of the elements in an array

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.reverse())

// Array.toStrings()
// Convert an array into a string

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.toString())
let stringArr = shoppingList.toString()
console.log(typeof stringArr)

// Array.join()
// Converts the elements of an array into a string. Can accept an optional parameter. "Separator", which indicates how the elements will be separated. Default separator is a comma.

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
console.log(shoppingList.join('!, and '))

// Spread operator
// The spread operator, indicated by '...', expands the contents of the contents of an array and takes them out of the array structure

let shoppingList = ['celery', 'limes', 'lemons', 'salt', 'oranges']
let arr2 = [1,2,3,4]
let values = [ ... shoppingList, ... arr2]
console.log(values)
