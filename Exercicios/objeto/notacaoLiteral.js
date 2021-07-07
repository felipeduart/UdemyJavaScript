// algumas mudancas no ES2015

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // essa forma é usada para poder mudar o nome associado a variavel
const obj2 = { a, b, c }// forma mais simples de fazer o mesmo de cima porem sem poder mudar o nome associado
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() { // mesma coisa porem mais curto 
        // ...
    }
}
console.log(obj5)