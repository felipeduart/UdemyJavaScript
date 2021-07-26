function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([ // passando os valores a ser gerados
        gerarNumerosEntre(1, 60, 4000), // um numero entre 1 e 60 demorando 4 segundos
        gerarNumerosEntre(1, 60, 1000), // mesma coisa mas mudando o tempo entre geracoes de numeros 
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

console.time('promise')

gerarVariosNumeros() 
    .then(console.log) // só tras os resultados após ultimo elemento ser gerado
    .then(() => {
        console.timeEnd('promise')
    })