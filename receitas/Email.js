const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
    - paulo@fatec.sp.gov.br
`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w+)?(\.\w{2})?/g))
// \S tudo o que não é espaço
// \w+  .literal \w{2,6}
// opicional \w() de  