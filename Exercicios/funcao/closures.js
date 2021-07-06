// Closure pe o escopo criado quando uma fincao é declarada
// esse escopo permite a funcao acessar e manipúlar variavveis externas a funcao

// contexto lexico em acao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())