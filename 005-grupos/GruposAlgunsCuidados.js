const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // dentro de conjunto não é um grupo; () é caracter literal
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)+/gi))