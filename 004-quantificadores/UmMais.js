const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi // um ou mais ocorrencias da letra O, pelo menos uma
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g)) //todos elementos juntos, um trecho com um ou mais dígitos, guloso
console.log(texto3.match(/[0-9]+?/g)) // não guloso, elementos individuais