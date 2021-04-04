// Scope 

// What is Scope?

// Javascript has both LOCAL and GLOBAL scope

//Example 1
var x = 12

function scope(){
    var x = 33
    console.log(x)
}

scope() //logs 33
console.log(x) //logs 12

//Example 2
var x = 12

function scope(){
    x = 33
    console.log(x)
}

scope()
console.log(x)

//Example 3

var x = 1

function scope(){
 var x = 2
 function scopeInner(){
     var x = 3
     console.log(x)
 }
 scopeInner()
 console.log(x)   
}
scope()
console.log(x)

//Example 4 contrasts with 3

var x = 12

function scope(){
    var x = 33
    if (true){
        let x = 45
        console.log(x)
    }
    console.log(x)
}

scope()
console.log(x)

//Example 5 contrasts with 4

var x = 12 

function scope(){
    var x = 33
    if (true){          //Block scope
        var x = 45      //
        console.log(x)  
    }
    console.log(x)      //var doesn't obey 'block' scope
}

scope()
console.log(x)