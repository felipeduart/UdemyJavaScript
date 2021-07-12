// Object.preventExtensions // previne extencoes do objeto// nao pode add novos objetos mas pode deletar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // tentando alterar // isso pode
produto.descricao = 'Borracha escolar branca' // tentando adicionar // isso nao vai surtir efeito 
delete produto.tag // isso pode tambem 
console.log(produto)

// Object.seal // nao consegue adicionar ou excluir // mas pode modificar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // nao surte efeito
delete pessoa.nome // nao surte efeito
pessoa.idade = 29 // porem alterou a idade pois pode alterar
console.log(pessoa)

// Object.freeze = selado + valores constantes // nao pode incluir/excluir ou mudar valores