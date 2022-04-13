# 02 Live Server e browser-sync

[00:00] Depois que nós transformamos o nosso arquivo de validação para o js em um arquivo genérico e importamos a função de `valida` para o arquivo “app.js", só faltou para nós realmente importarmos esse arquivo app.js no lugar do “validacao.js”, dentro do arquivo HTML.

[00:20] Então vamos trocar rapidamente, onde está `validacao.js` para `app.js`. Salvei no editor de texto, voltei para o navegador, recarreguei a página e agora vou preencher as informações. Matheus, e-mail “matheus@email.com”, senha “123456”, minúsculo, maiúsculo.

[00:43] Data de nascimento eu vou colocar uma data inválida, para garantir, ver se o nosso validador ainda está funcionando, clico em cadastrar e nosso validador não está mais funcionando, ele deixou eu cadastrar com uma data inválida.

[00:59] Vamos identificar o que está acontecendo, eu vou abrir um inspetor de elementos, que eu apertei “Ctrl + Shift + I” e vou ver o console. Muito bem, ele está falando que ele não consegue usar *Import Statement* fora de um módulo. O que ele quer dizer com isso, é que nós não podemos usar o *import* que nós usamos no “app.js” sem utilizar o arquivo como modo de módulo.

[01:30] Voltando para o nosso editor de texto, então vamos dizer que esse nosso `app.js` é um módulo. Eu vou adicionar o atributo `type="module"`. Agora o nosso `app.js` vai ser um módulo. Então agora ele vai conseguir utilizar o *Import Statement*, nós vamos conseguir importar a função de validação no outro arquivo `validacao.js`.

[01:55] Voltei para o meu navegador, recarreguei a página e agora um monte outros erros apareceram. Então um erro principal que nós temos que ver é exatamente que o acesso para o *script* retornou nulo e foi bloqueado por “CORS”.

[02:15] Então o que acontece, quando nós vamos usar o *Import Statement* dentro de um arquivo JavaScript, ele vai fazer uma requisição, no caso aqui vai ser uma requisição http, para poder pegar o arquivo `validacao.js`. O problema é que esse arquivo não está em um serviço http, não está em um servidor http. Então ele não consegue fazer a requisição, esse que é o problema. Então, o que nós precisamos fazer é subir o nosso projeto em uma aplicação http, ai ele consegue fazer a requisição.

[02:47] Vamos fazer isso, como nós vamos fazer isso? Nós temos algumas opções. A mais fácil delas, caso você esteja utilizando Visual Studio Code, é instalar uma extensão chamada “live server”.

[03:02] Então no meu “visual studio code”, eu vou clicar na aba de extensões, que fica no canto esquerdo, e vou procurar pelo “live server”, provavelmente vai ser a primeira opção já, que é do Ritwick Dey, ele tem oito milhões e meio de downloads. Basta instalar essa extensão, ele provavelmente vai pedir para recarregar o editor de texto, o Visual Studio Code.

[03:22] E após instalada essa extensão, no canto inferior direito vai ter uma opção chamada “Go live”. Clicando nessa opção, ele vai abrir uma nova aba no navegador automaticamente, e aí a página vai abrir do mesmo jeito que ela abria, sem essa extensão.

[03:46] A diferença é que agora, deixa eu limpar o console e recarregar a página. A diferença é que agora, como está subindo um serviço http, em um servidor http, ele não dá mais o erro de “CORS”, ele consegue fazer a requisição para outro arquivo de `validacao.js`.

[04:00] “Mas Mateus, eu não quero usar o Visual Studio Code, eu não gosto do Visual Studio Code, eu quero usar outro editor de texto, eu quero usar o editor de texto da minha escolha. Eu não quero ser obrigado a utilizar o Visual Studio Code para poder projetar a minha aplicação.”

[04:14] Justo, então nós vamos ver outra opção chamada Browsersync. Então como vai funcionar o Browsersync, na verdade, tanto o Browsersync quanto o Live Server, eles dependem que você tenha o “node js” instalado no seu computador. Tanto o “node.js” quanto o “npm”, que é o *node package manager*. Eu não vou explicar como é que funciona o processo de instalação do “node”, mas eu vou ensinar como fazer para instalar o Browsersync.

[04:42] Então eu vou terminal pelo próprio Visual Studio Code mesmo, de novo, assumindo que você já tenha o “node” e o “npm” instalados, e vou digitar `npm install -g`, porque eu quero que essa instalação do “browsersync” seja global, e ai digito `browser-sync`. E agora nós aguardamos a instalação. Em alguns casos, talvez na hora que você for instalar o Browsersync, ele dê alguns erros de permissão, falando que não tem permissão para instalar ou alterar algum tipo de arquivo.

[05:19] Não é recomendado utilizar isso para o “node”, para o “npm”, mas caso seja necessário você pode rodar o comando novamente, só que como `sudo`, como super usuário. Então vou rodar `sudo npm install -g browser-sync`. E novamente, aguardar agora o processo de instalação do Browsersync. Caso não tiver mais nenhum erro, a tela vai ser mais ou menos parecida com essa que eu tenho agora, sem nenhuma mensagem de erro.

[05:51] Então nós temos o Browsersync instalado, então agora vamos rodar ele. Como nós vamos fazer, nós vamos até à raiz do projeto pelo terminal, como eu abri pelo Visual Studio Code, eu já estou na raiz do projeto, então agora eu vou digitar `browser-sync start`, para iniciar o serviço Browsersync, `-s` para dizer que eu quero um servidor, `-f` para dizer que eu quero checar por arquivos do projeto, `.`, que ele verifique todos os arquivos do projeto, não alguns arquivos específicos, e `--directory` para poder abrir a raiz do projeto no navegador.

[06:40] Então rodei esse comando, ele está dizendo subiu no *localhost*, na porta 3000 nesse meu caso, vamos abrir então essa URL, `localhost:.3000`. Então vou até abrir outra aba só para nós podermos ver. Ok, apareceu agora o formato, a raiz do nosso projeto.

[07:02] Agora nós clicamos no “cadastro.HTML”, e agora nós estamos iguais ao Live server, se nós rodamos agora o inspetor, nós não vamos ter mais nenhum erro no nosso console. Inclusive, se nós testamos agora, Matheus, “matheus@email,com”, senha “123456”, maiúsculo, data de nascimento jogar uma data de hoje e tentar rodar o cadastro, agora o nosso validador voltou a funcionar. Então essas duas opções que nós podemos usar para poder fazer nossa aplicação funcionar
