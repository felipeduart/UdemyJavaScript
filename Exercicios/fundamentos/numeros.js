const peso1 = 1.0
const peso2 = 1.1 // esta aqui somente por criterio de teste
const peso3 = Number('2.0')

console.log(peso1,peso2,peso3)
console.log(Number.isInteger(peso1)) // isInteger confere se um numero é do tipo inteiro ou nao
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso3
const media = total / (peso1+peso3)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number)