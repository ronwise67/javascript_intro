// Say you have a list of numbers and you want 1 array: with evens numbers

let demoArr = []
for(let i = 0; i < 100; i++){
    demoArr.push(i)
}

let checkEven = (num) => {
    return num % 2 === 0
}

console.log(demoArr)
console.log(demoArr.filter(elem => elem % 2 == 0))
console.log(demoArr.filter(checkEven))

// This is the function that will be used by the filter method

let sqr = (x) => {
    return x*x
} // {} - block body, you have to explicitly "return" what you want to give back

let splitArr = []
for(let z = 0; z < 100; z++){
    if (z % 2 == 0){
        splitArr.push(z)
    }
}
//console.log(splitArr)

for(let curNum of splitArr){
    console.log(splitArr[curNum])
}
splitArr.forEach((x) => console.log(x))