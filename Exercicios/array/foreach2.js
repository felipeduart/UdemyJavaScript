Array.prototype.forEach2 = function(callback) { // implementacao // associando a forEach2 cmo a funcao que vai percorer o array
    for (let i = 0; i < this.length; i++) { // para cada elemento i menor que o tamenho do array somar mais um elemento
        callback(this[i], i, this) // passando o valor atual, o indece atual e o array completo
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// exatamente o mesmo forEach oficial do js