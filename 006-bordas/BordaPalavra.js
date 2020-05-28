const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) //começa com dia
console.log(texto1.match(/\w+dia\b/gi)) //termina com dia
console.log(texto1.match(/\w+dia\w+/gi)) // dia entre caracteres
console.log(texto1.match(/\bdia\b/gi)) // dia estritamente

// borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!
// acentos são borda em regex
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra! bad
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))