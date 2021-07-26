// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians') // pode encadear 
times.add('Flamengo')
times.add('Vasco') // nao aceita repeticao

console.log(times)
console.log(times.size) // tamanho do set
console.log(times.has('vasco')) // respeitar as maiusculas e minusculas!
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // pode ser criada a partir de um array tradicinal
const nomesSet = new Set(nomes)
console.log(nomesSet)