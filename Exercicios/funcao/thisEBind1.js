const pessoa = {
    saudacao: 'Bom dia',
    falar() { // isso aqui é uma funcao // outra forma de instanciar sem colocar falar: function... 
        console.log(this.saudacao) // se tirar this da erro
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradgmas: funcional e OO ( programação Funcional e Orientada a Objetos)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // voltou a apontar para 'pessoa'