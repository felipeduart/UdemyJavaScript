const notas = [6.6, 5.4, 2.1, 3.2, 2, 4.5]

for (let i in notas) { // lembrar que é sempre melhor usar o let pra garantir que a variavel criada fique somente dentro daquele escopo
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'ana',
    sobrenome: 'vitoria',
    idade: 25,
    peso: 63
}

for ( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}