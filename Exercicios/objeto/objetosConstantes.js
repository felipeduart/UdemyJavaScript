
// pessoa -> 123 -> {...} // possoa aponta pra um endereco de memoria que so ai aponta para o objeto
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // pessoa continua apontando pro mesmo lugar da memoria 
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)