// novo recurso do ES 2015

const pessoa = {
    nome: 'Nat',
    idade: 21,
    endereco: {
        logradouro: 'abc',
        numero: 1999
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// ERROR!
// const {consta: { agencia, numero}} = pessoa
// console.log(agencia, numero)