// map nao muda o array original mas cria um novo array pra armazenar
const nums = [1, 2, 3, 4, 5]

// map é um For com propósito
let resultado = nums.map(function(e) {
    return e * 2 // se comentar essa linha vai dar undefined por isso precisa de um metodo para retorno
})

console.log(resultado, nums) // o resultado é o array nums mas multiplicado // nums nao foi modificado

const soma10 = e => e + 10 
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)