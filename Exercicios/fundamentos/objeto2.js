console.log(typeof Object) // function
console.log(typeof new Object) // object

const CLiente = function () {}
console.log(typeof CLiente)
console.log(typeof new CLiente)

class Produto {} //ES 2015 (ES6)// ES=ECMAscript que é o nome real do javascript
//class internamente é uma function
console.log(typeof Produto)
console.log(typeof new Produto())