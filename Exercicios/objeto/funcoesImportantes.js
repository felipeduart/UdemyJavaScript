const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega as chaves do objeto
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // pega os registros em forma de array

Object.entries(pessoa).forEach(([chave, valor]) => { // percorrendo os elementos do array gerado pelo entries/ usando destructor
    console.log(`${chave}: ${valor}`) 
})

Object.defineProperty(pessoa, 'dataNascimento', { // definindo propiedadecomo caracteristicas como se pode ou nao ser alterada etc
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj) //congela o obj funciona como se tranformasse numa const
obj.c = 1234 // nao alterou o valor por fcaussa do freeze
console.log(obj)