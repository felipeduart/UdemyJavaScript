// diferenca entre usar o callback e fazer todo o processo manualmente

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback // tendo que criar if, array, fazer push no array, mto mais trabalhoso
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// usando arrow 
const notasMenorQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQueSete)
console.log(notasBaixas3)