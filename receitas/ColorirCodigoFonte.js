const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`) //reg grupo para usar $1 retrovisor

const files = require('./files')
const texto = files.read('codigoFonte.html')


const codeRegex = /<code>[\s\S]*<\/code>/i // [\s\S] retorna todos os valores entre
let codigo = texto.match(codeRegex)[0]
console.log(codigo)


// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178') //tenho q criar grupo em todas, por causa do retrovisor
// palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf') //precisa ser borda dos lados '(' é borda

// tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')


// comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703') // /* e // precisa da \

// comentários de uma linha...
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte2.html', conteudoFinal)