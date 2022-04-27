# 12 Debugando sua aplicações

[00:00] Bom, galera, nós chegamos o final do treinamento, mas tem mais uma coisa que eu quero mostrar para vocês. Uma coisa bem legal que depende muito do seu ambiente, mas que vale a pena nós mostrarmos. Como é que se debuga um código em TypeScript?

[00:14] Vamos olhar a nossa aplicação do jeito que está aqui rodando. Se eu volto lá no meu navegador, eu estou na aba console, eu quero “Ctrl + P”, eu quero debugar, eu quero botar um *break point* no meu código. Nós sabemos que o código que vai rodar aqui é um código em Java Script, mas se eu coloco *break points* e debugo um código em Java Script, como é que você vai saber qual é a linha correspondente lá no arquivo ts JSON, entenderam?

[00:48] Então qual é a ideia? A ideia é o seguinte, com uma única configuração no compilador e um ambiente devidamente configurado, olha o que eu vou fazer, nós vamos chegar lá no `tsconfig.json`, vou colocar uma propriedade chamada `sourceMap` e vou colocar `true`.

[01:10] Quero que você olhe o seguinte, olha dentro da pasta “dist > js > controllers”, qual é o único arquivo compilado do TypeScript que tem lá? Js, não é? Salvei o gerar `sourceMap`, o arquivo foi mudado e detectou. Quando você olha, ele gera na mesma pasta do arquivo um arquivo .map.

[01:37] Se você olhar esse arquivo .map, ele é grande, ele *inline*, mas se eu der “Ctrl + Shift + F”, ele alinha para mim aqui, mas o mais importante é você entender que ele diz que esse arquivo aponta como *source* o arquivo `negociação-controller.ts`.

[02:00] Esses arquivos que são chamados de `sourceMap`, são eles que te permitem em tempo de desenvolvimento, não faz sentido você botar em produção esses arquivos, você colocar *break point* no seu arquivo TypeScript e debugar em um navegador como se o seu código estive rodando em TypeScript.

[02:19] Então como é que isso aqui funciona? O primeiro pré requisito para isso aqui funcionar, você setou a propriedade `sourceMap`, a primeira coisa que precisa ter é que sua infraestrutura precisa em ambiente de desenvolvimento compartilhar tanto a pasta do código compilado quanto a pasta do *source* em ambiente de desenvolvimento.

[02:42] Senão o Chrome não vai conseguir ir lá e baixar o arquivo ts para ele fazer funcionar. É por isso que nesse projeto eu mudei a estrutura, eu criei a pasta app, botei dist e src dentro para que o `lite-server` compartilhe as duas pastas. Beleza, Flavio, entendi que é só botar `sourceMap` lá no `tsconfig` e eu tenho um ambiente que eu compartilho os arquivos originais também em ambiente de desenvolvimento.

[03:10] Nunca em produção, você não vai mandar seu código fonte. Mas como é que funciona essa depuração? Olha que legal, vou voltar no navegador, vou dar uma recarregada aqui. Olha o que eu vou fazer, com o console aberto do Chrome você dá “Ctrl + P” e vou procurar negociação.

[03:27] Você vai ver que ele vai te mostrar `negociacao.js` e `negociacao-controller.ts`, é esse cara que eu quero. Abri ele aqui no meu Chrome, vou colocar um *break point* no método adiciona. Vou clicar, botei o *break point*. Olha o que vai acontecer. Muita calma nessa hora.

[03:50] Vou digitar aqui qualquer coisa, vou clicar 111, vou clicar para incluir e quando executo a minha aplicação, olha que lindo, o que meu *browser* carrega é Java Script, mas ele está me dando a opção de na hora que eu estou debugando, depurando minha aplicação, de depurar no arquivo ts.

[04:04] É isso que me interessa como desenvolvedor. Olha, eu vou mandar pular mais uma vez, *step next function call*. Eu não vou entrar em detalhes de como se debuga uma aplicação, que isso aqui é padrão no Java Script. A única coisa diferente é a geração do `sourceMap` para nós.

[04:21] Mas o mais importante aqui que eu posso clicar para executar tudo, eu posso ir passo a passo, eu posso passar o *mouse* em cima e ver quais são os valores das variáveis. Então é isso aqui que é interesse, porque quem trabalha com Java Script fica se imaginando como debugar isso no navegador.

[04:39] Primeiro pré requisito é ter o `sourceMap`. Segundo é ter um ambiente na sua infraestrutura, seja PHP, Java etc., que dê acesso para o Chrome onde estão os arquivos ts e na hora de você abrir o seu console, você vai dar “Ctrl + P” para abrir a tela de procura de qualquer classe.

[04:56] Eu posso botar negociação que eu vou encontrar e por aí vai. Tá bom, galera? Então deixa eu mandar aqui continuar, vai para o final. Tira aqui o resumo. Então essa é uma maneira, se você for trabalhar com angular que usa o TypeScript por padrão, é assim que você vai trabalhar. Só que o angular já te dá isso tudo de mão beijada, você não precisa setar configuração nenhuma.

[05:20]Tá bom, galera? Então vamos lá que eu quero me despedir de vocês.
