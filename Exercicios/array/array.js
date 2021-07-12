// array é um objeto
// priorizar nao misturtar os dados // trabalhar com dados todos do mesmo tipo 
// ou seja nao misturar string com number ou com boolean etc
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // nao é a forma mais ideal de se criar um array
console.log(aprovados)

aprovados = ['Bian', 'Carlos', 'Ana'] // forma mais cotidiana
console.log(aprovados[0]) // acessando o primeiro elemento do array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // nao existe no array // nao retorna erro mas undefined

aprovados[3] = 'Paulo' // add elemento no array 
aprovados.push('Abia') // mais apropiado para add no array
console.log(aprovados.length) 

aprovados[9] = 'Rafael' // vai dar certo mas entre os indices 4 e 8 fica como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false

console.log(aprovados)
aprovados.sort() // causa alteracao no array alterando o array original
console.log(aprovados)

delete aprovados[1] // exclui mas nao reordena o array // indece 1 passa a ficar undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // remove, adiciona ou muda elementos do array (numero do indece, numero de elementos que quer excluir)
console.log(aprovados)
aprovados.splice(1, 0, 'elemento') // adicionando elemento 
console.log(aprovados)