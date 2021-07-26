// let e const
{
    var a = 2 // var nao tem escopo de bloco
    let b = 3 // let tem escopo de bloco
    console.log(b)
}
console.log(a)
// console.log(b) nao esta definada fora do escopo

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // interpolação de string e variavel // tb é possivel a quebra de linha

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // ignorando o indice 2
console.log(x, y)

const { idade: i/*renomeando*/, nome } = { nome: 'Ana', idade: 9 } 
console.log(i, nome)