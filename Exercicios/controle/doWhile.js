function getNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // mesmo opcao recebendo -1 a estrutura vai executar 

do {
    opcao = getNumeroAleatorioEntre(-1, 10)
    console.log(opcao)

} while (opcao != -1) // do...while é a unica estrutura de controle que a expressao fica depois do bloco de codigo

console.log('Fim das opções')