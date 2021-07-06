class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()

const criarPessoa = nome => {
    return {
        'Meu nome é ': nome // outra forma de criar 
    }
}

const pessoa2 = new Pessoa('Leo')
pessoa2.falar()