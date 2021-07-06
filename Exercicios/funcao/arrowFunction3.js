let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this) // this is not this ???????
console.log()

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // saiu do escopo global 
comparaComThis(obj) // veio para o escopo do objeto

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports) // wt is molule.exports?? 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // mesmo usadno o bind this continua apontando para o obj 
comparaComThisArrow(module.exports)