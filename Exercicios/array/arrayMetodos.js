const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // por ser constante nao posso atribuir mais valores ao array
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posicao
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionando no indice 2, nao removendo ninguem
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removendo o indice 3 somente ele 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do indece 1 ate o indice 4 porem o indice 4 nao entra
console.log(algunsPilotos2)