# 02 API externa

[00:00] Bom, pessoal, nós precisamos evoluir no entendimento de Type Script e para isso eu vou trazer uma outra coisa do mundo real do mundo comum, que é, seguinte, a nossa aplicação vai se integrar com uma `API rest`, vai trazer os dados dessa API para que nós possamos exibir aqui na tela.

[00:18] Essa API já está disponível nesse projeto, eu só vou mostrar para vocês como nós subimos essa API, mas o mais interessante é nós entendermos primeiro como vamos consumir essa API e como o Type Script pode nos ajudar nesse processo de consumir uma API e evitar que nós cometemos erros. Ficou claro?

[00:36] Então vamos lá no nosso projeto. Eu tenho aqui em uma aba do meu terminal do VS Code o meu npm, aquele comando que eu rodo, `npm run start`. Ele vai rodar o servidor, vai abrir aqui o meu navegador e vai mostrar aqui a minha aplicação.

[00:58] Beleza, só que eu preciso abrir um segundo terminal. Vou clicar em mais, dentro desse terminal nós vamos entrar dentro da pasta `servidor-api`. Agora você deve estar se perguntar se é por isso que temos essa pasta, é. Nós vamos fazer `cd servidor-api/` e vamos fazer `npm install`.

[01:28] Você precisa fazer o `npm install` para baixar as dependências desse servidor, porque ele tem a pasta `node model` deles. Esse cara é um projeto em separado e o que vamos fazer para rodá-lo? Dentro dessa pasta vamos dar `npm start`.

[01:50] Quando você fizer `npm start`, esse servidor vai estar rodando na porta 8080. Ou seja, eu tenho o meu servidor que simula um servidor *web* mais próximo da realidade, um servidor *web* no qual eu sirvo os meus arquivos de distribuição dentro deles, meus arquivos js.

[02:15] Do outro terminal eu tenho o meu de uma API. Se você trabalha com angular, com *view*, *react*, nós sabemos que o angular roda um servidor, o *react* roda um servidor e as API vão rodar em outro servidor, não ficam no mesmo servidor. Ficam em separados.

[02:32] Então, beleza, esse cara está aí. Como é que nós acessamos ela para mostrar para vocês que essa API tem dados? Eu vou abrir o meu navegador, vou digitar localhost:8080/dados. Quando eu faço isso, eu vou ver que ele retornou aqui um montante e um número de vezes que essa negociação foi realizada.

[03:01] Então o nosso objetivo agora na nossa aplicação é consumir essa API por dentro nessa aplicação, para que eu consigo renderizar dados, atualizar minhas *views* com dados de negociação e para, então, depois que estiver tudo amarrado, nós pegarmos os dados e ver o quanto o Type Script pode nos ajudar nessa questão. E ele ajuda muito. Vamos lá?


