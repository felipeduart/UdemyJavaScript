const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado com nota ' + nota)
    }
    else{
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') // tomar cuidado para nao ocorrer esse problema pois JS é fracamente tipada