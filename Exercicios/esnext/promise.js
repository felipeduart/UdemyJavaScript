// cmo se fosse uma callback
// estrutura que tem como objetivo ser assincrona
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // recebe uma callback com dois parametros resolve e reject
        setTimeout(() => {
            resolve(frase) // aceito somente um unico paramentro // se quiser passar mais parametro tem que passar como objeto com os outros parametros contidos nele
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') // acessando a promisse
    .then(frase => frase.concat('?!?')) // primero .then
    .then(outraFrase => console.log(outraFrase)) // encadeando o primeriro .then com o segundo
    .catch(e => console.log(e)) // resolvendo o reject 