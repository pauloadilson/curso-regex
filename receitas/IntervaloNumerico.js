const texto = '0 1 10 192 199 201 249 255 256 312 1010 1512'

// números entre 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))
/* \b
( indica um grupo
    \d{1,2} | dígito com 1 ou 2 carateres 
    1\d{2}  | 1 + digitos de 2 caracteres
    2[0-4]\d| 2 + um único caracter no intervalo + um dígito
    25[0-5]   2 + 5 + um único caracter no intervalo
)
\b */