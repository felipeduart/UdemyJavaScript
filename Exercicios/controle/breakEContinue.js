const nums = [1, 2, 3, 4, 5, 6, 7, , 9, 10]

for (x in nums) {
    if (x == 5) {
        break // no indice 5 ele para a execução
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // nao executa o indice 5 pulando para o proximo indice
    }
    console.log(`${y} = ${nums[y]}`)
}


externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // break externo é um rotolo para o break agir sobre externo e nao no for mais proximo
        console.log(`Par = ${a}, ${b}`)
    }
}
// CUIDADO COM ESSE TIPO DE ESTRUTURA ROTULADA!!