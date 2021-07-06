// callback nada mais é que percorrer todo o indice de uma array chamando cada elemento 
const fabriantes  = ['Mercedes' , 'Audi', 'BMW']

function imprimir(nome, indece){
    console.log(`${indece + 1}. ${nome}`) 
}

fabriantes.forEach(imprimir)
fabriantes.forEach(function(fabriante){
    console.log(fabriante)
})
fabriantes.forEach(fabricante => console.log(fabricante)) // usando arrow