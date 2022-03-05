const fs = require('fs');
const path = require('path');


module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    // o parâmetro nomeDoArquivo não possui extensão
    // por isso, é preciso descobrir a extensão do arquivo recebido no parâmetro caminho para adicionar essa extensão no nomeDoArquivo
    // a const extensaoArquivo pega a extensão do arquivo que foi recebido no parâmetro caminho
    const extensaoArquivo = path.extname(caminho);

    // array com extensões de arquivos válidos para upload pelo usuário
    const extensoesValidas = ['jpg', 'png', 'jpeg']


    // verifica se a extensão do arquivo é valida e salva o valor booleano em extensaoValida
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    // se indexOf() retornar -1 isso significa que extensaoArquivo não contém uma extensão válida
    const verificaExtensaoValida = extensoesValidas.indexOf(extensaoArquivo.substring(1));

    // se verificaExtensaoValida for diferente de -1, então extensaoValida terá valor TRUE
    const extensaoValida = verificaExtensaoValida !== -1;


    if (extensaoValida) {

        // constante para armazenar o caminho em que o arquivo será salvo
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${extensaoArquivo}`;

        // Lê o arquivo que está em "caminho" e salva o arquivo em "novoCaminho"
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho));
    } else {
        const erro = "Erro! Extensão de arquivo inválida";
        console.log(erro);
        callbackImagemCriada(erro);
    }


}




