const texto = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (85) 99988-7766
    - (21)3261-8899
`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))

const regexTelefone = /\(\d{2,3}\).?\d.{8,9}|\d.{8,9}/g
console.log(texto.match(regexTelefone))