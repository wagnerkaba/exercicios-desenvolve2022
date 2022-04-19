# 04 Visão geral do projeto

[00:00] Vamos começar os trabalhos. Eu tenho o projeto baixado descompactado na pasta "typescript-curso1", eu vou abrir o Visual Studio Code que é o editor de texto que eu recomendo a vocês utilizarem porque tem uma integração perfeita com o TypeScript.

[00:16] Eu vou clicar em "Open", se você usa o Windows vai ter a opção "Open Folder", clicando aqui eu vou na pasta do curso e clico "Open". Antes de eu falar sobre a pasta, sobre a estrutura dos arquivos, a primeira coisa que você vai fazer é o seguinte: você vai no seu Visual Studio Code, vai abrir o "Terminal", esse terminal é aberto dentro da pasta do projeto da raiz e precisamos baixar os módulos da nossa aplicação.

[00:48] "Flávio, eu não escrevi código nenhum. Que aplicação é essa?" É que esse projeto traz com ele um servidor http para que possamos compartilhar nossos projetos feitos em JavaScript, em TypeScript com o navegador. É utilizado o sistema de modos vigentes dos navegadores que é do sistema de modos ECMAScript 6.

[01:10] Não tem nada de TypeScript aqui só vamos passar aqui pela questão de infraestrutura. Você vai está dentro da pasta e vai escrever o comando: `npm install` tendo a certeza que você tem o Node.js da parte de infraestrutura da versão necessitada, necessária.

[01:28] Eu baixei o projeto e os módulos. A primeira coisa que você vai olhar é o seguinte: existe uma pasta dentro do nosso projeto que é "dist", de *distribution*, de distribuição. Se você olhar dentro dessa pasta "dist" vemos um arquivo html com uma única página que vamos trabalhar durante todo o projeto de negociação.

[01:53] Uma coisa importante para entendermos é que é esta pasta "dist" que vai ser compartilhada com o nosso navegador. Tudo que estiver dentro dessa pasta "dist" será acessível através do nosso navegador por meio de um servidor web.

[02:11] Como eu faço para compartilhar essa pasta "dist" como o meu navegador? Eu vou chegar dentro aqui do meu "package.jason", vocês verão que há um script chamado `server`. Vou escrever aqui no meu terminal `npm run server`. Quando eu executo esse comando o navegador padrão do meu sistema operacional já é aberto automaticamente e os arquivos da pasta "dist" estão sendo compartilhados.

[02:40] Podemos até olhar pelo terminal que o Index, o Bootstrap, o Favicon estão todos sendo compartilhados com o meu navegador, todos na porta 3000. Uma grande sacada desta estrutura é que qualquer alteração que você fizer nos arquivos do projeto vai se refletir automaticamente no navegador.

[03:03] Por exemplo, se eu diminuo aqui a minha tela, tudo isso foi pensado para ter a comodidade de que você só se preocupe em escrever o código TypeScript e não se preocupe com a infraestrutura nenhuma.

[03:16] Eu vou dar um exemplo. Vou abrir o meu Index, onde está aqui `Negociações` eu vou colocar um `XYZNegociações` e vou salvar. Quando eu salvo automaticamente, vemos que o browser tem *refresh*, ou seja, podemos trabalhar, se você tem dois monitores, tranquilamente com dois monitores e qualquer alteração que você fizer automaticamente o navegador vai refletir essa alteração ou se você trabalha com um monitor apenas você pode dividir a sua tela desta maneira.

[03:48] O importante aqui é: que isso é uma página html escrita com Bootstrap bem simples, tem uma data, uma quantidade, um valor, um botão incluir e toda vez que quisermos trabalhar, acessar essa página da nossa aplicação, vou para o terminal, abro o terminal, fecho meu navegador que eu parei, vou executar o `npm run server`que vai automaticamente abrir aqui o meu navegador servindo o Index.html da minha aplicação.

[04:19] O importante é entender que a pasta "dist" é o conteúdo que está dentro desta pasta, acessível no servidor. Agora que já entendemos como esse projeto inicial está estruturado vamos partir para a materialização do domínio de negociação, do modelo de negociação que é o assunto do próximo vídeo.
