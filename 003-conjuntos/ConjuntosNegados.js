const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g)) //^ dentro do CJ é conjunto negado = complementar
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) //tudo está sendo negado
console.log(texto.match(/[^\d!\?][\[\s,\.]/g)) //tudo está sendo negado

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-\/:-@\s]/g)) //complementar com intervalo

//12