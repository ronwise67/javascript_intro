// For Loops
/* 

Loops offer a quick and easy way to do something repeatedly.

There are different kinds of loops but they all do roughly the same thing:
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map

legend:
    keyword = for
    1 = a variable tp keep track of "iteration" and its start value (creation of an indexing variable)
    2 = a condition to check each "iteration" (run condition)
    3 = how to modify your variable (change to the indexing variable)



<keyword> (<1>; <2>; <3>){
    //What we want to do
}

ex: for(let i = 0; i <= 10; i = i+1){
    console.log(i)
}
*/

for(let x = 0; x < 50000; x++){
    if(x % 2 === 0){
        console.log(x)
    } else {
        console.log("This is an odd number")
    }
}

let myName = "Ron"
for(let i=0; i<myName.length; i++){
    console.log(myName[i]) //Collection Indexing ie Strings or Arrays
}

// Count to 10 from 0 and log the numbers

for (let i = 0; i <= 10; i++){
    console.log(i)
}

// Counts to -25 by -3, starting from 2, log the numbers

for (let i = 2; i >=-25; i = i - 3){
console.log(i)
}

// Display the letters in a name individually

let name = 'Kinkade'

for (let i = 0; i < name.length; i++){
console.log(name [i])
}

// For Loops can use lots of variables:

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i)
}