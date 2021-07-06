//IIFE -> Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})() // presisa dos parenteses no final e de estar entre parenteses desde o começo


// É  como fazer isso mas neste caso esta dentro do arquivo e portanto no escopo global
console.log('Será executado na hora')
console.log('Foge do escopo mais abrangente')