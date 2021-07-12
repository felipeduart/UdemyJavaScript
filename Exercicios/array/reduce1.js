const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) 
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {// extraindo apenas as notas por arrow
    console.log(acumulador, atual)
    return acumulador + atual
},0) // valor inicial 0 nao altera o resultado final

console.log(resultado) // resultado final