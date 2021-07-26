// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // '...' significa espalhar dentro de clone todos os atribitos de funcinatio // nao muda em funcionario
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] // espalhando grupoA dentro do grupoFinal
const grupoB = ['PessoaA', 'PessoaB', ...grupoFinal]
console.log(grupoFinal)
console.log(grupoB)