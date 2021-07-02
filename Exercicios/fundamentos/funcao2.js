// Armazenand uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 4)

// Armazenando uma funcao ARROW em uma variavel
const soma = (a, b) => {  // '=>' representa FUNCTION
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito
const subtraçao = (a, b) => a - b  // TODA A FUNCAO EM UMA UNICA LINHA
console.log(subtraçao(2,3))

const imprimir2 = a=> console.log(a)
imprimir2 ('Teste')