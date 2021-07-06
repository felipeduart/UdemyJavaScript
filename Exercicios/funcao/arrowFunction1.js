let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // trocando function por =>
    return 2 * a
}

dobro = a => 2 * a // chamando o return inmplicitamente sem precisar chamr o bloco inteiro
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'OLÁ'
ola = _ => 'oLÁ' // possui um parametro // nao pe ausencia de paramentro
console.log(ola())