# 02 Criando serviços

[00:00] Falando agora então sobre serviços. O que são serviços? Enquanto a aplicação é pequena, como a que temos no nosso projeto, a estrutura segue um modelo MVC bem clássico. Ela tem modelos que fazem a parte de regra de negócio, ela tem views. Dá para considerar os JSONs que recebemos no Postman para conferência como um tipo de view. Temos controladores que fazem a interface entre o modelo e o banco de dados.

[00:33] Quando a aplicação começa a crescer em complexidade, começam a aparecer alguns problemas. Por exemplo, os controladores começam a fazer coisas demais. Fica muito difícil refatorar, fica muito difícil fazer com que cada parte do código faça apenas uma coisa, que é o que sempre tentamos fazer, essa separação, e etc.

[00:50] Se olharmos os controladores do projeto, tanto controlador de pessoas como turmas, etc, cada um dos métodos desses controladores está recebendo requisição, recebendo os dados do corpo da requisição, etc, validando, se conectando com o banco, com a database através de algum método do sequelize, por exemplo, `findAll`. Está formatando os dados, passando os dados para a frente.

[01:15] É bastante coisa para um método fazer. E aí o que fazemos? O que dá para fazer agora é tentar reaproveitar um pouco de código e separar algumas dessas responsabilidades. Vamos fazer isso adicionando uma camada na aplicação que vamos chamar de camada de serviços.

[01:33] O que essa camada vai fazer? Se olharmos de novo qualquer um dos nossos controladores, tanto de turma, pessoas, tanto faz, dá para ver que eles têm todos alguns métodos em comum, ou seja, métodos que todos eles usam. Como o `findAll`, o `findOne`, create. São esses métodos que o sequelize usa para transformar tudo que escrevemos em JavaScript para query, e passar isso para o SQL.

[02:00] É essa a responsabilidade de conectar com a database e processar esses dados que vai receber, enviar, etc, que vamos tirar dos controladores e passar para a nova camada, que vai ficar entre o controlador e o modelo, digamos assim. Vamos escrever um pouco de código para entender melhor.

[02:18] A primeira coisa é que vamos criar uma pasta dentro de API, vou chamar essa pasta de services, que é o nome padrão para este tipo de pasta. Dentro de services vou criar um arquivo que vou chamar de Services, com S maiúsculo, porque vamos escrever uma classe aqui dentro, `Services.js`.

[02:38] O que Services vai fazer? Vai fazer a interface com o modelo. A primeira coisa a fazer é importar os modelos aqui, `const database = require(‘../models’)`. Importamos os modelos. Vou criar uma classe, que vou chamar de Services. Essa classe, ao contrário das classes que criamos para os controladores, ela vai reter um construtor. Então, ‘constructor’, e o construtor vai receber o quê? O nome de um modelo. Então, `nomeDoModelo`.

[03:15] Como assim o nome do modelo? Estamos criando essa classe Services aqui para justamente o que estamos conversando agora, cuidar desses métodos de conexão com o banco, que são comuns a todos os modelos. Então, o que Services vai receber? Tem que trabalhar com vários modelos, vamos receber através do construtor cada um desses modelos que vamos trabalhar.

[03:42] Então, `this.nomeDoModelo = nomeDoModelo`. Construtor já está criado. Agora vou criar um método dentro de Services.js para fazermos um primeiro teste com o método `pegaPessoasAtivas` do `pessoaController` só para testarmos para ver como esses serviços vão funcionar.

[04:05] Vamos criar esse método. Vai ser um método async. Ele não vai ser um método estático, porque vamos instanciar, criar uma nova instância de services, de serviços, em cada um dos nossos controladores. Ele só precisa ser `async`, e o nome vai ser `pegaTodosOsRegistros`. Porque é um nome mais genérico, para podermos trabalhar com todos os modelos.

[04:32] O que vai ter dentro desse método? Vou só pedir para ele me retornar os resultados de database, vou usar a notação de colchete para passar `[this.nomeDoModelo]findAll()`. Essa linha `database [this.nomeDoModelo]findAll()` é bem parecida com a linha que já estamos usando atualmente no método `pegaPessoasAtivas`. Só que ao invés de `database.pessoas.findAll` estamos passando o nome do modelo que vamos trabalhar via notação de colchete.

[05:06] A última coisa, no final do arquivo, é exportar esse método com `module.exports = Services`. Uma vantagem inclusive de usar os serviços é que agora se fazemos qualquer alteração de banco, os controladores, depois que tiver esse transplante, digamos assim, tiver sido concluído, eles nem sabem mais qual é o banco que está sendo utilizado, porque só quem vai fazer essa conexão é o arquivo de serviço. Qualquer alteração nesse sentido fica concentrada dentro de serviços, o controlador já nem sabe mais qual é a database que está sendo utilizada.

[05:42] Já criamos nosso arquivo de serviços, agora é só ligar isso com o controlador de pessoas. Vamos então fazer isso dentro do método `pegaPessoasAtivas` para testar. Dentro do controlador de pessoas as primeiras linhas estão justamente importando os modelos. Vou por enquanto só comentar essas duas linhas que estão fazendo a importação e vou trocar isso pelo que está vindo do serviço.

[06:10] Vamos instanciar um serviço novo com `const Services = require(‘../services/Services’)` e vamos criar dentro de uma const que vou chamar de pessoasServices uma nova instância de Services, então `new Services(‘Pessoas’)`, que é o nome do modelo que queremos trabalhar.

[06:44] Agora dentro de services, dessa instância, no construtor, ele vai receber pessoas e vai substituir nos métodos. E aí então como fazemos essa substituição dentro do método pegaPessoasAtivas? Onde está agora `database.pessoas.findAll`, primeiro `database.Pessoas` vai ser substituído por `pessoasServices`, que é essa instância de serviços que criamos, e o `findAll` vai ser substituído pelo método que criamos para fazer o `findAll`, o método `pegaTodosOsRegistros`.

[07:22] Agora já podemos testar no Postman e ver se tudo continua funcionando, `localhost:3000/pessoas`, método `get`, tudo continua funcionando perfeito. Dessa forma os controladores podem continuar cuidando da validação, receber as requisições http, receber os dados, etc. Envia isso para um serviço e só retorna a resposta do serviço. Enquanto isso, serviços se conectam com a database, processam os dados, etc, e mandam de volta para quem pediu, no caso o controlador.

[07:55] Ainda dá para refatorar mais um pouco, então vamos ver em seguida como podemos continuar fazendo essa refatoração.
