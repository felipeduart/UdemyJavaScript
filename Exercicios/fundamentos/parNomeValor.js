//par nome/valor
const saudacao = 'opa' // contexto léxico 1//contexto em que seu obj nome/valor foi definido que aqui no caso é o arquivo parNomeValor

function exec(){
    const saudacao= 'falaaa' // contexto léxico 2
    return saudacao 
}

// Objetos são grupos aninhados de pares nome/valor
const cliente={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Alguma Coisa',
        numero:123
        // SE eu quisesse poderia usar os mesmos nomes como 'nome' 'idade' etc dentro deste contexto pois é OUTRO CONTEXTO
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)