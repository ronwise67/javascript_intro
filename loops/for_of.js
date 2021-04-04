// For .. of loop

/*
legend:
    keyword = for
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex: Array, Obj, or String

    Note: This is better usually for arrays and strings if you want the items

<keyword>(<var> in <collection>){
    // Do something
}
*/

let students = ['Amy', 'Adam', 'Blake', 'Drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet)
console.log(letter)

// For Of requires that the 'thing' you're looping thru be iterable -- that means it needs to be numbered

let student = {name: 'Peter', isAwesome = true, degree = 'javascript', week: 1}

for (item of student){
    console.log(item)
}

let catArray = ['tabby', 'british shorthair', 'bumese', 'maine coon', 'rag doll']

for (cat of catArray){
    console.log(cat, "says meow")
}