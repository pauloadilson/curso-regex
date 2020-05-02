const texto = 'a   b'
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))
    // console.log(texto.match(/a\tb/)) erro

// no futuro...
console.log(texto.match(/a\s+b/)) //operador +
console.log(texto.match(/a {3}b/)) // quantificador {}
console.log(texto.match(/a\s{3}b/))