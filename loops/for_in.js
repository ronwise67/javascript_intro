// For  .. in Loop
/*
legend:
    keyword = for
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex: Array, Obj, or String

<keyword>(<var> in <collection>){
    // Do something
}
*/

// For In does not require that the thing you loop thru be numbered

let person = {
    name: "Ron",
    age: 53
}

console.log(person.name)
console.log(person["name"])

for(let property in person){
    console.log(property)
    console.log(person[property])
}

let randomNums = [1, 3, 5, 7, 9]
for(let rand in randomNums){
    //console.log(rand)
    if (rand % 2 === 0)
    console.log(randomNums[rand])
}

// For In loops

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1}

for (item in student){
    console.log(item)
    console.log(student[item])
}

let catArray = ['tabby', 'british shorthair', 'bumese', 'maine coon', 'rag doll']

for (cat in catArray){
 console.log(cat)   
 console.log(catArray[cat])
}

// Let's write a For In loop that capitalizes the first letter of a name

let instrutor = 'pAul'
let capName 

for (n in instrutor) {
    if (n == 0){
        capName = instrutor[n].toUpperCase()
    } else {
        capName += instrutor[n].toLowerCase()
    }
} 
console.log(capName)