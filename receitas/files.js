const fs = require('fs')

const read = nomeArquivo => 
    fs.readFileSync(`${__dirname}/originais/${nomeArquivo}`, { encoding: 'utf8' })


const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`
    if (!fs.existsSync(dirname)) { // se não existe
        fs.mkdirSync(dirname) // cria
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf8' })
}

module.exports = { read, write }