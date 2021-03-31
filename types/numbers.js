let str_num = 100
let x = 5
let y = 5.0
let z = Number('5')
let r = Number('test')
let cov_numb = Number(str_num)

console.table({x,y,z,r,cov_numb})

console.log(8 ** 2)
console.log(12 % 5)
console.log(5 / 2)

let total = 0
let i = 0
while(i <= 1000000){
    if(i % 1 == 0){
        console.log(i)
        total += i
    }
    i++
}