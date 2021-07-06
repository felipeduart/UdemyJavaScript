function Pessoa() {
    this.idade = 0

    const self = this // essa é uma forma de burlar o fato de this poder variar 
    setInterval(function () {
        this.idade++
        console.log(self.idade) // usando a variavel ao invez do this
    }/*.bind(this)*/, 1000) // quer dizer 1000 milisegundos (1 seg)
}

new Pessoa

// ctrl + alt + m // break program