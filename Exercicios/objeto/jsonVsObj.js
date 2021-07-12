const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // gerando um formato textual

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // erro, nao é formato valido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // erro, nao é formato valido 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // formato valido
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) 
// todo nome de atributo precisa estar entre aspas duplas e strings tambem