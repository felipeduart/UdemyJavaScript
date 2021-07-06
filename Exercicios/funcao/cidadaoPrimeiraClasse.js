// Funcao em JS é First-Class Object (Citizens)
// Higher-order function ( funcao de primeira ordem)

// criar de forma literial
function fun1() { }

// armazenar uma funcao em uma variavel
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](1, 2))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'teste' }
console.log(obj.falar())

// passar uma funcao como parametro para outra funcao
function run(funcao) {
    funcao() // pra invocar precisa dos parenteses se nao colocar nao invoca a funcao 
}

run(function () { console.log('executando teste') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
//outra forma de fazer a mesma coisa
const cincoMais = soma(2, 3)
cincoMais(4)