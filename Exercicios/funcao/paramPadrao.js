// Estrategia 1 para gerar um valor padrao
function soma1(a, b, c) {
    a = a || 1  //isso quer dizer que o parametro 'a' vai receber o valor dele mesmo caso seja setado e se nao for recebe o valor '1'
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(), soma1(3))
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
//nesse ultimo apresar de setado o valor '0' o parametro entendeu como sendo falso e setou automaticamente o valor '1' para a b c
console.log()

// estrategia 2, 3 e 4 para gerar valor padrao 
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // essa seria a melhor estrategia pq somente se nao for um numero que ira cair no valor padrao
    return a + b + c
}

console.log(soma2())
console.log(soma2(), soma2(3))
console.log(soma2(), soma2(3), soma2(1, 2, 3))
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))
// agora mesmo passando '0' como parametro nao foi usado o valor padrao '1'
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 'a')) // testando um NaN no parametro 'c'
console.log()

// valor padrao do ECMAScript 2015
// forma mais reduzida e facil de escrever e ler 
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(), soma3(3))
console.log(soma3(), soma3(3), soma3(1, 2, 3))
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0), soma3(0, 0, 'a')) // aqui nao foi da forma que eu queria
