console.log(soma(3, 4)) // mesmo que ainda nao tenha declarado// so funciona na declaracao trad
// console.log(sub(3, 4)) // aqui ja nao funciona porque 'sub' foi declarada como expression function

// funcition declararion trad
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression // pouco usada// beneficios no debug
const mult = function mult(x, y) {
    return x * y
}

