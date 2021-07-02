let valor // nao inciada
console.log(valor) // undefined
//console.log(valor2) // esse gera erro 'valor2 is not defined' que é diferente de undefined
valor = null
console.log(valor) // null ou seja ausência de valor // nao é legal trabalhar com undefined 
// console.log(valor.toString()) // Error!

const produto = {} // criando objeto vazio
console.log(produto.preco) 
//console.log(produto.preco.a) // TypeError 'a' of undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // !! converte para bollean
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)