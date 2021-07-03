let contador = 1
while (contador <= 10) {
    console.log(`contrador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {  // lemrbrar de declarar a variavel como let para ela ficar somente dentro daquel escopo 
    console.log('i = ' + i)
}

const notas = [6.7, 5.4, 9.8, 10]
for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}
