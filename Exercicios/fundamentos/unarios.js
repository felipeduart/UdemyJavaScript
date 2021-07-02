let num1 = 1
let num2 = 2

num1++ // forma posfixada
console.log(num1)
--num1 // essa forma prefixada tem precedencia da forma posfixada
console.log(num1)

console.log(++num1 === num2--) // num1 prefixado foi acrecentado antes de num2 posfixado ser decrementado por isso true
console.log(num1 === num2)

// sempre deixar o codigo o mais simples possivel