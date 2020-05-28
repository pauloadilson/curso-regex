const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) // \1 retrovisor do primeiro grupo mais recente
    // .* todo o restante // \/ tag de fechamento 

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi)) // \2 segundo grupo
console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // ?: não guarda grupo

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi)) //mente opcional
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) //replace segundo parâmetro é o grupo

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))