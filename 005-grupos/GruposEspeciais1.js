const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // expressao seguinda de ?= // palavras seguidas de 
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // nao precedem ,
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))

const texto2 = 'supermercado superação hiperMERCADO Mercado'

// Positive Lookbehind
console.log(texto2.match(/(?<=super)[\wÀ-ú]+/i)) //com prefixo ( ?<= string)

// Negative Lookbehind
console.log(texto2.match(/(?<!super)mercado/i)) // sem prefixo ( ?<= string)