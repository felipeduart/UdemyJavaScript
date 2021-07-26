// map é muitas vezes mais flexivel que objeto
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react')) // forma corretass
console.log(tecnologias.get('react').framework) // forma correta

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // se um elemento esta ou nao contido
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // quantos elementos estao presentes no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // nao pode haver chaves que tenham o mesmo valor
chavesVariadas.set(456, 'b') // no valor pode haver repeticao
console.log(chavesVariadas)