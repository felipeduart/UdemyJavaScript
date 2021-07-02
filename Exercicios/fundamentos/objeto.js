const prod1 = {} // criando um objeto vazio
prod1.nome = 'Celular Ultra Mega' // mesmo sem criar atributo 'nome' aceitou (nao entendi bem como funciona) 
// atributo nome foi criado dinamicamente sem precisar ser instanciado antes 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}