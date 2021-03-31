console.log('hi')

// Conditional Statement
// Conditionals are used to execute a piece of code if the condition is true. The allow our code to make decisions and carry them out based on those decisions

// If statements
// Switches
// Ternaries

// If statements

let mathResults = 2 + 2 === 4
console.log(mathResults)

if(mathResults) console.log('This equates to true')

// Block body + Else

let mathResults = 2 + 2 === 5
if(mathResults){
    console.log('This equates to true')
}else{
    console.log('This equates to false')
}

// Chaining if/else statements

let tempF = 55

if(tempF > 95){
    console.log("It's hot!")
} else if(tempF > 50){
    console.log("It's warm!")
} else if(tempF < 32){
    console.log("It's cold!")
}

// Testing multiple conditions

let myName = 'Ron'
let age = 53

if(myName === 'Ron'){
    console.log('Name Logged')
} else if(age === 53){
    console.log('Age Logged')
} else if(myName === 'Ron' && age === 53){
    console.log('Name & Age Logged')
}

// Switches
// Run a block of code based on different cases

let tempF = 22

switch(true){
    case tempF > 95:
        console.log("It's hot!")
        break
    case tempF > 50:
        console.log("It's warm!")
        break
    case tempF < 32:
        console.log("It's cold!")
}

let dog = 'husky'

switch(dog){
    case husky:
        console.log("The husky jumped in the snow!")
        break;
    case lab:
        console.log("The lab caught the ball!")
        break;
}

let firstName = "Ron"

switch (firstName) {
    case 'Ron':
    case 'Justin':
        console.log("They are a student")
        break;

    default: console.log("They are a teacher")
}

// Ternaries
// Conditions ? True : False

let lightSwitch = true

lightSwitch ? console.log('Lights are on') : console.log('Lights are off')

tempF = 25

tempF > 95 ? console.log("It's hot!") : 
tempF > 50 ? console.log("It's warm") :
tempF > 32 ? console.log("It's chilly!") :
tempF < 32 ? console.log("It's freezing!") :
console.log("I cannot predict the weather")