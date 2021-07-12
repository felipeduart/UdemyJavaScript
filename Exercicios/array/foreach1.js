const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { // percorrendo o array
    console.log(`${indice + 1}) ${nome}`) // pra cada indice executado soma 1 ao indice
})

aprovados.forEach(nome => console.log(nome)) // fazendo a mesma coisa mas sem passa o indice
console.log()

const exibirAprovados = aprovado => console.log(aprovado)  // armazenando em uma variavel pra dos passar pro forEach
aprovados.forEach(exibirAprovados)