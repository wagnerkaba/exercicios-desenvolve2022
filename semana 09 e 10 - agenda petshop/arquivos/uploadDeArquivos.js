const fs = require('fs');

fs.createReadStream('../assets/salsicha.jpg')
    .pipe(fs.createWriteStream('../assets/salsicha-Stream.jpg'))
    .on('finish', () => console.log('imagem foi escrita com sucesso'));



