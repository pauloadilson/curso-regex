const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm)) //tamanho
// ^ limitador de inicio de linha   $ limitador de final de linha
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)) //tamanho + letras maiusculas inclusive  
// ?= é look ahead positivo = verifica dali pra frente 
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))
// ?=  .* que tenha caracteres dos intervalos