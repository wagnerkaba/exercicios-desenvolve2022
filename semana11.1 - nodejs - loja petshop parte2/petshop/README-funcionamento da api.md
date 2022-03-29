# Síntese do que foi feito na semana 10.2

Usamos uma biblioteca chamada express para criar a nossa API, também usamos a biblioteca bodyParser para gerenciar o tipo JSON da nossa aplicação.

[00:18] Também fizemos uma conexão com o banco de dados usando o Sequelize e separando as nossas configurações do nosso projeto numa pasta chamada config, com os arquivos, com as configurações separadas do nosso código.

[00:30] Também criamos as rotas da nossa API, agrupando tudo que fosse relacionado aos nossos fornecedores dentro de uma pasta. Assim fica mais fácil de encontrarmos nossos códigos. Conseguimos separar nas nossas rotas.

[00:42] Conseguimos nos conectar com o banco de dados, criar a nossa tabela de fornecedores para registrar as nossas informações, configurando o nome de tabela, o nome das nossas colunas, o tipo das nossas colunas.

[00:54] Também criamos uma ponte de conexão entre o nosso código e o banco de dados, para não termos que ficar manuseando diretamente o contato com o banco de dados. Criamos uma classe para interpretar e representar o nosso fornecedor, como os métodos para criar, para atualizar e fazer algumas edificações.

[01:13] Também aproveitamos e criamos algumas classes para representar os erros da nossa aplicação, assim fica mais fácil para sabermos como foi que alguma coisa aconteceu, quando foi que algum erro aconteceu e onde foi que esse erro aconteceu. E, também, fica mais fácil para descobrir erros que não conhecemos na nossa aplicação.

[01:28] E para tratar todas essas informações e conseguir nos comunicar com o front end de uma forma fácil, nós criamos um Serializador, que é uma classe onde conseguimos fornecer alguns dados, alguns métodos bons para conseguirmos transformar os dados em JSON, em xml.

[01:46] Tudo baseado no tipo de conteúdo que o cliente está pedindo, ou o tipo de conteúdo que vamos gerar na resposta. E, com isso, também conseguimos filtrar e tratar campos públicos e campos secretos, campos que são sigilosos e que ninguém precisa saber. Conseguimos fazer essa separação e, com isso, conseguimos utilizar a nossa API.

[02:04] Usamos, também, o Postman, para testar a nossa API. Criamos várias abas com todas as nossas requisições, assim fica mais fácil de tratarmos. Temos a requisição de POST que criamos para poder criar e persistir os dados dentro da nossa API.

[02:19] Criamos, também; vamos rodar a API primeiro, abrir o terminal, node api/index.js, então temos o API rodando e podemos testar com Postman.

[02:29] Temos a rota de POST para poder criar um fornecedor. Conseguimos persistir e verificar os dados para colocar no banco de dados.

[02:37] Temos a rota GET na raiz da URL de fornecedores, onde conseguimos listar todos os fornecedores que nós temos. Todas as rotas trabalham tanto com o JSON quanto com xml.

[02:46] Temos o método GET com o ID do fornecedor, onde passamos um ID na URL e conseguimos obter os detalhes, que são algumas informações que não vem no nossa rota de listagem, como os dados de e-mail, data de criação e versão. Temos uma rota PUT para conseguir atualizar os dados dos nossos fornecedores e também temos uma rota DELETE para nós apagarmos os nossos fornecedores.

[03:11] Todas as rotas possuem os suas verificações, por exemplo, a rota do DELETE tem uma verificação com o ID do fornecedor, se ele existe ou não. Temos verificações do corpo da requisição, como na rota de PUT e na rota de POST. E, com isso, conseguimos criar a nossa API.

[Fonte](https://cursos.alura.com.br/course/nodejs-api-rest-padronizada-escalavel/task/79844)
