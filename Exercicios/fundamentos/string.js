const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // gerou vazio e nao um erro
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")
console.log(escola.replace(3, 'e')) // troca o caracter na posicao escolhida para o cacacter nomeado no caso 'e'

console.log("ana, maria,leo".split(',')) // finciona como o vertor no c#

