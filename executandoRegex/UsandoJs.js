const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) /* test retorna true ou false */
console.log(regexNove.exec(texto)) /* exec retorna o resultado */

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) /* match procura o padrão */
console.log(texto.search(regexLetras)) /* search procura o indice do primeiro elemento */
console.log(texto.replace(regexLetras, 'Achei'))
console.log(texto.split(regexLetras))