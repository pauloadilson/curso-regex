// DesafioCPF.js
let cpf = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23 ...`
const regexCPF = /\d.{13}/g
console.log(cpf.match(regexCPF))

// DesafioTelefone.js
let telefone = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321 ...` //ddd opicional
const regexTelefone = /\(\d{2,3}\).?\d.{8,9}|\d.{8,9}/g
console.log(telefone.match(regexTelefone))

// DesafioEmail.js
let email = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com ...`
const regexEmail = /\w.+@\w.+\.\w*/g
console.log(email.match(regexEmail))