const { indexOf, findIndex } = require("lodash")

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            consol.log('temp') // erro tratado no .then
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Espesifico.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) // normalmente se colaca o catch na ultima posicao
    .then(() => console.log('Fim!'))