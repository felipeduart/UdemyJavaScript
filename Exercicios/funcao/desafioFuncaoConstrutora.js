// tranformar em funcao construtora 
/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()*/


function Pessoa(nome) {
    this.nome = nome
    this.falar = function() { // criando uma fincao anonima para o metodo this.falar
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()

// factory
const criarPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome} `) // nome sem o this.nome
    }
}

const pessoa2 = criarPessoa('nat')
pessoa2.falar()