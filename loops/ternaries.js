// Ternaries

let x = -6

x > 0 ? console.log("x is positive") : console.log("x is negative")

let greeting = 'salutations!'

if (greeting.length > 10) {
    console.log('That is a long greeting!');
} else if (greeting == 10) {
    console.log('That greeting is exactly 10 characters!')
} else {
    console.log('What a normal greeting')
}

greeting.length > 10 ? console.log('That is a long greeting!') : 
greeting.length == 10 ? console.log('That greeting is exactly 10 characters!') :
console.log('What a normal greeting')