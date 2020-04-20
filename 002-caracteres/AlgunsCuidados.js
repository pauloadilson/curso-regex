const textoUmaLinha = '...' // aspas simples ou duplas

const textoMultiLinha = ` 
    linha 1
    linha 2
`
    /* multiplas linhas com crase apenas template string */
    // cuidado com o tab! Resultado: [ '\t' ] \s space
console.log('	'.match(/\s/g))
console.log('   '.match(/\s/g))
console.log(textoMultiLinha.match(/\s/g))