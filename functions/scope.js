//let Const Var . . . others
let x = 5
const favNum = 42
var z = 10
//favNum = 50
y = 5

//Scope

if (true){
    let x = 8
    console.log(x)
}
console.log(x)

for (let i = 0; i < 10; i++){
    console.log(i)
}
console.log(i) 

for (var j = 0; j < 10; j++){
    console.log(j)
} 