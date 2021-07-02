function tratarErroLancar(erro){
    erro.messege = 'you lose'

//    throw new Error ('...')
//throw 10
//throw true
//throw 'mensagem'
throw{
    nome: erro.name,
    msg:erro.messege,
    date: new Date
}
}


function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        tratarErroLancar(e)
    }
    finally{
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)