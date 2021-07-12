  // simulando arary como objeto
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' } // é um objetro e nao um aray 
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // fazendo com que objeto se pareça com array
    value: function() { return Object.values(this) }, 
    enumerable: false // significa que nao vai aparecer na impressao do objeto
})

console.log(quaseArray[0]) // acessando a partir do atributo 0 cmo se fosse um array

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) // a mesma impressao 