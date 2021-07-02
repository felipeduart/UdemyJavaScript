// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2) // Not a Number// o segundo valor fica como undefined
imprimirSoma(2, 10, 3, 5, 6)// sem Erro // pegou os primeiros dois valores e somou ignorando o restante
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())