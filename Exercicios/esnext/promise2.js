// 
// exemplo de callback hell
setTimeout(function() {
    console.log('Executando callback...')
    
    setTimeout(function() {
        console.log('Executando callback...')
        
        setTimeout(function() {
            console.log('Executando callback')
        }, 2000)
    }, 2000)
}, 2000)

// usando promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) { // nao esquecer de instanciar promise
        setTimeout(function() {
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor()) // esperando sempre o tempo padrao no promise
    .then(esperarPor)

// muito mais facil (nao achei, mas entendi) do que aninhar muitas funcoes 