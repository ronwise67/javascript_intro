//single line comment
console.log('This is the text and the string');

/* This is a multi-line comment 
See? */

let str_a = "This is a doube quote string"
let str_b = 'This is a single quote string'
let str_c = `This is a backtick string`
let str_d = String(5)

let f_name = 'Ron'
let l_name = 'Wise'
//New op: unary operator that gives back type info
console.log(typeof f_nane)
console.log(typeof "What is this?")

let full_name = f_name + ' ' + l_name
let template_full = `${f_name} ${l_name}`

console.log(full_name)
console.log(template_full)

let demo_str = 'This is a demo'
let result = demo_str.slice(3)
console.log(result)

let indexed_str = "Hello World!"
console.log(indexed_str)
console.log(indexed_str[6])