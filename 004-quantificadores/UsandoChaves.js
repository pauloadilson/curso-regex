const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}
console.log(texto.match(/\d{1,2}/g)) // um ou dois DIGITOS não os números literiais, tipo um índice
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))
    // zero conta o espaço
console.log(texto.match(/\w{7}/g)) // exatamente 7 digitos
    //milhões õ não está em \w
console.log(texto.match(/[\wõã]{7,}/g)) // incluindo palavras acentuadas no conjunto 
    //{7,} palavras inteiras

// no futuro... bordas.. envolvido por bordas
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g)) //exatamente palavras de 7 letras