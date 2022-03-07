const fs = require('fs');


//OBS: NÃO É RECOMENDADO UTILIZAR BUFFER
//  Buffer não é muito indicado, até pela documentação oficial, porque da forma como estamos fazendo, ele será lido de forma síncrona. Assim, toda a imagem será lida antes que o programa execute o que queremos. 
// Ou seja, o programa vai ficar parado até executar as instruções relativos ao buffer


//le o arquivo salsicha.jpg e armazena em um buffer
fs.readFile('../assets/salsicha.jpg', (erro, buffer) => {
    console.log('imagem foi bufferizada');

    //converte o arquivo no arquivo salsicha2.jpg
    fs.writeFile('../assets/salsicha2.jpg', buffer, erro => {
        console.log('imagem foi escrita');
    })

});
