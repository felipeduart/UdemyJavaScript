function rand({ min = 0, max = 1000 }= {}/* parametro '={}' nao tinha na aula coloquei por conta propia pra fazer um teste*/) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 })) // funciona desse jeito

const obj = { max: 50, min: 40 } // e funciona desse jeitp tambem!!
console.log(rand(obj))

console.log(rand({min: 998}))
console.log(rand({})) // usando o parametro primeiro
console.log(rand()) // usando o parametro vazio tambem deinido la em cima por minha conta pro teste 
// se nao ouvesse o parametro vazio daria um TypeError: Cannot read property 'min' of undefined
