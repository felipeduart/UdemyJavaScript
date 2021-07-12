console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { // adicionando um metodo // isso pode fazer 
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // nao fazer isso// ao substituir comportamentos de forma global pode quebrar uma aplicao
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // aqui um exemplo da funcao quebrada 