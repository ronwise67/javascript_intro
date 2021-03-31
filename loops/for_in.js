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