

# 05Finalizando o ambiente

[00:00] O servidor está rodando, mas ainda temos um pequeno problema. Qualquer alteração que eu faço no código; por exemplo, mudar o número da porta de 3.000 para 3.500 e salvar. O servidor não enxergará essas alterações. Eu terei de derrubá-lo toda vez e subir de novo para ele ver que teve alterações no arquivo.

[00:19] Então vamos derrubar o servidor uma última vez para instalar uma biblioteca que é super útil, “uma mão na roda”, que se chama Nodemon. Instalarei essa biblioteca como dependência de desenvolvimento, porque ela não é usada na produção, só é usada na hora de desenvolvermos.

[00:37] E o Nodemon serve para ficar escutando automaticamente todas as alterações que fazemos nos arquivos na aplicação, e toda vez que salvarmos qualquer alteração, ele vai automaticamente derrubar e subir o servidor de novo, salvando esse trabalho, senão teremos uma dor de cabeça.

[00:57] Vamos aproveitar já para fazer nosso Nodemon funcionar, adicionando no nosso *pack* de Json um *script*. Normalmente chamamos esse *script* de start.

[01:09] Quando rodamos o *script* start, ele passa para o terminal o comando Nodemon, que chamará a biblioteca e dá para ele aqui o *entrypoint* de aplicação para ele achar o servidor e rodar automaticamente. Vamos ver se está funcionando. `npm run`, rodar o comando start.

[01:32] Certo. Iniciou o Nodemon, que achou o API/index e colocou para rodar. Agora eu posso voltar em index.js, mudar, de repente, de novo, para 3.000, salvar o arquivo. E ele viu automaticamente, já fez alterações, essa parte está tranquila.

[01:53] Eu Já criei também um arquivo chamado .gitignore. Você com certeza, ou bem provavelmente, vai querer subir o seu projeto para o GitHub. É bom não esquecer de incluir esse arquivo e já colocar dentro dele o arquivo .gitignore, o `node_modules` para não correr o risco. Da pasta de instalação `node_modules`, que é uma pasta local mesmo, não correr o risco dela subir para o GitHub. Servidor no ar, vamos fazer as últimas instalações. Por enquanto deixarei a janela do terminal rodando com nosso servidor.

[02:29] Vamos abrir uma outra janela e continuar com as últimas instalações principais. Faltou instalar uma coisa muito importante, que é o banco que trabalharemos. Faltou justamente ele. Trabalharemos com o MySQL nesse projeto, então eu vou instalar: `npm install mysql2`.

[02:52] Conversamos um pouco anteriormente que existem outros bancos do tipo banco SQL que você pode utilizar nesse projeto caso você não queira usar o MySQL, e eles são o Postgres, o mysql2, o mariadb, o sqlite3 e o Microsoft SQL Server. Se você quiser instalar qualquer um deles, ao invés de `$ npm instal -- save mysql2”`, o *save* não é mais necessário nas novas versões do npm. Você pode instalar pg-hstore, mariadb, sqlite3 ou o tedious, que é a ferramenta de gerenciamento do Microsoft SQL Server.

[03:29] Mas, se você preferir trabalhar aqui conosco com o SQL2, é só dar o mesmo comando que dei aqui: `npm install mysql2`.

[03:37] Para finalizar as instalações faltou o próprio Sequelize, que é a ferramenta que usaremos, o ORM que usaremos aqui a principal para desenvolver a nossa API. `npm instal sequelize`, e pedirei para o npm instalar mais duas dependências: sequelize-cli e path. `npm instal sequelize sequelize-cli path`.

[04:03] Vejam que sequelize e sequelize-cli são dependências diferentes. O sequelize é usado para instalar e usar os métodos da ferramenta mesmo, e o sequelize-cli serve para usarmos alguns recursos de linha de comando que o sequelize tem. Tudo foi instalado nas dependências de desenvolvimento do Nodemon. E aqui as dependências normais, path, sequelize e sequelize-cli.

[04:28] Esses recursos de linha de comando que o sequelize tem são para se conectar com o banco, para criação de modelos, criação de arquivos, etc. Então, se ele nada mais é do que o *command line interface*, que na prática é o nosso terminal, agora já podemos subir o Boiler Plate, um *template* padrão de início do projeto que o sequelize faz como projeto inicial, para termos um pontapé inicial no nosso projeto. Vamos fazer isso em seguida.

[05:02] Durante o projeto, trabalharemos bastante com a ferramenta ORM. A documentação do sequelize aparece abaixo.

[05:10] Vamos olhar agora algumas coisas que o sequelize pode nos fazer. Além de toda a comunicação com bancos, o sequelize também pode criar os arquivos de base. Conseguimos criar com ele um projeto vazio que serve como pontapé inicial para continuarmos nosso projeto. Vamos ver como isso funciona. Usaremos o `npx sequelize-cli init`. O npx é para rodar as dependências que estão instaladas localmente, uma vez que o sequelize e os outros programas instalados no projeto não foram instalados de forma global.

[05:51] Vamos ver o que ele nos passou de mensagem. Ele passou que criou algumas coisas: config/config.json, um diretório *models*, um diretório migrações, diretórios de modo *seeders*.

[06:04] Vamos, então, no nosso editor de código ver o que aconteceu. Criou essas quatro pastas. A pasta *models* e a pasta *config* já têm alguns arquivos dentro. Olharemos o que tem em seguida. Antes disso, vamos fazer o seguinte: criamos uma pasta API para colocar os arquivos, a nossa aplicação dentro. Só que como estamos rodando os comandos direto na raiz do nosso projeto, precisaremos passar os arquivos que o Sequelize criou na raiz para dentro da nossa pasta, para ficar tudo certo. Então as pastas criadas são essas, *config*, migrações, modelos e *seeders*.

[06:48] Vamos passar as pastas *config*, migrações, modelos e *seeders* para dentro da pasta API, selecionando-as e arrastando-as para dentro da pasta API. E agora, como mudamos algumas coisas de lugar para ficar mais organizado, precisaremos avisar o Sequelize para ele não ficar perdido com relação a isso, porque qualquer outro comando que passemos para ele agora na raiz do projeto, ele não conseguirá encontrar os diretórios que jogamos dentro da pasta API. Criaremos um arquivo chamado .sequelizerc.

[07:20] Esse arquivo, inclusive, está previsto na documentação do Sequelize. Tirando o *babel* que não precisaremos usar por enquanto, podemos criar esse arquivo .sequelizerc quando quisermos estruturar nossa aplicação, em, de repente, uma hierarquia de pastas um pouco diferente da padrão do Sequelize. E aí dentro, acho que podemos inclusive copiar esse trecho de código.

```
const path = require('path');

module.exports = {
  'config': path.resolve('./api/config', 'config.json'),
  'models-path': path.resolve('./api/models'),
  'seeders-path': path.resolve('./api/seeders'),
  'migrations-path': path.resolve('./api/migrations')
}
```

[07:55] Usaremos aquela biblioteca que instalamos lá atrás, o *path*, e exportarmos um módulo que resolverá, literalmente, para o Sequelize, os novos caminhos. Para ele conseguir encontrar *config*, conseguir encontrar *models*, *seeders* e tudo que ele criou.

[08:16] Aqui dentro das linhas de código, temos que passar o caminho novo. Aqui dentro que vamos passar que, ao invés de estar em raiz *models*, com o comando `‘models-path’ : path.resolve(‘models’),` ele está em /api/models, com o comando `‘models-path’ : path.resolve(‘./api/models’),` . Isso será feito em todas as linhas de comando: *config*, *seeders* e migrações.

[08:33] Estamos usando config.json. Se você, de repente, quiser utilizar config.js, ele também aceita, mas deixaremos como json aqui no nosso projeto. Agora já temos um projeto arrumado, um pontapé inicial, digamos assim, pronto para ser preenchido. Vamos nos conectar com o banco para poder começar a realmente testar de verdade a nossa API.
