const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca\tr\nr\to\ss!/)) //s space // t tab
console.log(texto.split(/\t|\n|\s|\f/g))