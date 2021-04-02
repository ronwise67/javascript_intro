// Switch statements

let friend = 'Alex'

switch (friend) {
    case 'Tom':
        console.log("Hey Tom, when are you going to bring some sourdough bread for me?")        
        break;
    case 'Ken':
        console.log("Hey Ken, do you own a wolf in your backyard?")
        break;
    case 'Alex':
        console.log("Hey Alex, how many magic cards do you own?")
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}

let yep = true

switch (typeof yep == 'string' || typeof yep == "boolean")  {
    case true:
        console.log('Yep is a string or a boolean.')
        break;
    default:
        console.log('Yep is not a string or a number.')
}