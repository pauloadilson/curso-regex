const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g)) // - hifem estabelece intervalo
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-4]/g)) // []inclusivo
console.log(texto.match(/[A-Z1-3]/gi)) //não precisa de virgulaentre