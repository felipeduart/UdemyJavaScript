function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor de area acima do permitido: ${area}m2.`)
    }
    else {
        return area
    }
}
console.log(area(3, 2))
console.log(area(2, 2))
console.log(area()) // not a number// nao tem parametro nenhum
console.log(area('a','b')) // not a number// string
console.log(area(2, 3, 4, 2))
console.log(area(20, 2)) // nao consegui entender porque esta dando undefined
