function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor// que quer dizer que é uma operacao bit a bit com ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSadavel = !comprarSorvete // operador unário

    // retornando quatro constantes num unico objeto// apesar de um objeto ser do tipo chave/valor(nome/valor) 
    return { comprarSorvete, comprarTv50, comprarTv32, manterSadavel } 
    // o padrao seria
    // { 
    // comprarSorvete: comprarSorvete,
    // etc: etc,
    // ...
    // }
    
    // porem nao foi necessario instanciar o nome/chave para atribuir o valor
    // é uma atualizacao do ECMAScript 2015
}
console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))