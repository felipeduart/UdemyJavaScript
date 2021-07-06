// factory  // funcao que retrona objeto u funcao agrupada

function criarPessoa(nome, sobrenonme) {
    return {
        nome, sobrenonme
    }
}
console.log(criarPessoa('a', 'b'))

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('c', 1000))
console.log(criarProduto('c', 100))