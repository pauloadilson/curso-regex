const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g)) //? torna \. opcional e o que vem depois tbm

const regexEmail = /\w.{1,}@\w.{1,}\.\w{1,}/g
console.log(texto.match(regexEmail))
console.log(texto.match(/\w.+@\w.+\.\w*/g)) //precisa ter ponto 

// no futuro...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g)) // () grupo