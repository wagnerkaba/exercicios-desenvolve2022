# 01 Apresentação



[00:00] Olá, pessoal, eu sou Flavio Almeida, bem vindos ao terceiro curso de TypeScript, esse curso ele tem todo o conteúdo do primeiro, do segundo curso é o mesmo projeto só que uma ligeira modificação que eu quero mostrar para vocês.

[00:15] Primeira coisa que vocês vão fazer é ir lá no projeto, no *link* do capítulo, baixar o projeto e descompactar na área de trabalho de vocês. Descompactando na área de trabalho, eu vou pegar o meu Visual Studio Code, o editor de texto utilizado durante o treinamento, vou lá na área de trabalho, abrir aqui, TypeScript abriu o projeto do curso.

[00:35] Com todo o código do curso anterior, a única modificação é que a pasta `dist` e a `app`, que antes tinha o código fonte, agora estão dentro de `app`. Então `src` tem o nosso código fonte TypeScript que nós escrevemos e a pasta `dist` é a pasta onde ficam os arquivos compilados do TypeScript para o Java Script.

[00:58] Essa estrutura eu alterei para ficar mais perto com a estrutura de um servidor *web* ou uma aplicação escrita em Angular usando o **Angular CLI**, **React** e por aí vai. Relembrando o seguinte, para nós rodarmos esse projeto, você precisa ter o node.js 10.21 ou superior, versões LTS, vocês precisam usar o Studio Code e ter o Chrome instalado, então como é que eu executo o projeto?

[01:26] Executando o projeto, lembrando de cursos anteriores que a gente tem um `script`, `start` que vai rodar o meu servidor local, mais o computador TypeScript em tempo real, significa que qualquer mudança nos nossos arquivos TS vai refletir no nosso projeto. Então eu vou escrever `npm run start` e isso aqui vai ser suficiente para ele abrir o navegador, no meu caso ele abriu aqui na minha segunda tela, deixa eu jogar para cá.

[01:53] O projeto abriu, deixa eu forçar de novo, vou parar e vou voltar lá para o nosso código, abriu o terminal e lembrando, como faz para abrir o terminal? Você vem em “terminal > new terminal”, com a pasta do projeto aberta dentro do Visual Studio Code, vou dar `npm run start`. Fazendo isso o navegador vai ser automaticamente aberto. Uma outra diferença que a gente já nota aqui, é que dentro de localhost:3000 eu vou ter a subpasta `dist` e dentro dela o meu index.html.

[02:34] Mas a aplicação continua funcionando perfeita em relação ao curso anterior, nenhum código foi trocado, só a estrutura de pastas, tá bom? Então é essa a estrutura que nós vamos utilizar ao longo do treinamento, então relembrando que o nosso código fonte agora está na pasta `src`, de source, e o resultado da compilação do nosso arquivo Start Script vão estar dentro da pasta `dist`.

[03:05] Uma outra coisa aqui, só para finalizar, esse `index.html` que tem aqui dentro da pasta `app` só para o *redirect* quando eu abro o meu servidor lá para a pasta `dist`. E é a pasta `dist` que eu tenho meu `index.htlm` e meus *scripts*, tá bom? Só uma mudança porque eu quero motivar uma coisa lá para o final do treinamento e eu preciso dessa estrutura aí.

[03:29] Fechado, galera? Então vamos começar, porque tem bastante coisa nova aqui para nós vermos e deixar nosso Code cada vez mais lindo.
