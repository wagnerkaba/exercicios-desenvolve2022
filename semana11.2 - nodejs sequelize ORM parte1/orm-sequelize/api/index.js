// api/index.js é o ponto de entrada da aplicação, onde iniciamos o servidor e chamamos a biblioteca Express para gerenciar as rotas da API.

const express = require('express');

// O arquivo api/index.js está importando, através da const routes, todos os métodos do arquivo api/routes/index.js. Ele faz isso através da linha abaixo: const routes = require('./routes');
// Nesse caso não é necessário incluir o nome do arquivo no caminho, pois o JavaScript, por padrão, já procura um arquivo index.js dentro da pasta routes. O arquivo api/routes/index.js, por sua vez, organiza todos os arquivos de rotas que estão dentro da pasta, e repassar essa informação para o ponto de entrada da aplicação.
// E por que não ter apenas um arquivo com todas as rotas, ou chamá-las direto em api/index.js ? Porque, à medida em que a aplicação cresce em complexidade, é possível ter muitas rotas, dependendo da operação que queremos fazer. Então quanto mais separadas ficam as responsabilidades, mais fácil de se localizar no código, modificar linhas, atualizar funcionalidades e etc.
const routes = require('./routes');


const app = express();
const port = 3000;

routes(app);

app.listen(port, ()=>console.log(`servidor está rodando na porta ${port}`));

module.exports = app;

