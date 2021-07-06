const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // funcao dentro da chamada de uma funcao
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // funcao arrow dentro da chamada

const pessoa = {
    falar: function () { // nesse caso pode ser instanciada sem a chamada do function
        console.log('Funcao anonima')
    }
}

pessoa.falar()
