const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

minhaFuncao()

function exec(){
    const valor = 'local'
    minhaFuncao() // o contexto lexico em que minhaFuncao foi criada tem como base valor = 'global' mesmo tendo outra
                 // variavel valor mais perto dela 
}

exec()