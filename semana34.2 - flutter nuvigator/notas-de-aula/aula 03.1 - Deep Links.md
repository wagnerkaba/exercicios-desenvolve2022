# Deep links, o que são?

[00:00] Vamos falar agora sobre um conceito novo chamado deep link, ou seja, traduzindo para o português ficaria mais ou menos links profundos, acesso profundo, alguma coisa do gênero.

[00:12] Mas vamos dar um passo atrás e entender de onde isso começa, por que eu estou te mostrando isso agora. Imagina só, você quer acessar um produto específico. Eu quero acessar a cesta de fruta do manjericão, que é a cesta de ID número 123.

[00:32] Então temos um caminho aqui, eu tenho que ir lá em, por exemplo, se a rota fosse organizada assim, produtores/manjericão/cestas/id=123, alguma coisa do gênero. Temos todo um caminho, você tem um diretório para poder acessar.

[00:52] Deep link é um conceito bem legal, porque isso vem desde a época da web, quando começou a crescer muito o site, o site não era mais uma página só e sim várias páginas que mostravam produtos e esses produtos eram dinâmicos, a tela era uma tela genérica e, dependendo da informação de produto que passava, a tela mostrava um produto específico.

[01:09] O que acontece? Acaba que fica uma coisa muito subjetiva, como fazemos isso? E criaram um link mais inteligente, um link que passa dados, e nós chamamos isso de deep link, um link profundo. Feita essa teoria, vamos começar a ver mais na prática a coisa?

[01:29] Começa assim, você pega o seu celular e esse conceito deep link não é só para dispositivo móvel, mas a web em geral também usa, aplicações desktop usam e tal. Mas eu vou puxar a sardinha para o lado do mobile, porque é o que estamos aprendendo.

[01:43] Por exemplo, você pega o seu celular, você vai no site, você tem que acessar produtos, você acessa alimentos orgânicos, você acessa as cestas, você entra na cesta do ID, é igual eu dei o exemplo anteriormente.

[01:54] Como funciona isso? Por baixo dos panos temos uma URL quando usamos deep link, igual essa que está na tela, “myapp://products/organics/packs?id=54321”. Então o Myapp é o scheme da coisa toda, eu vou explicar também o que é isso.

Fluxograma URI Schemes. No lado superior esquerdo temos o desenho de uma mão segurando um celular. Dessa figura sai uma seta apontando para direita, onde está a palavra "Produtos". De produtos, uma seta aponta para direita, na direção da frase "Alimentos orgânicos". Dela sai uma seta apontando para baixo, onde está a palavra "Cestas". Dessa palavra  sai uma seta apontando para esquerda, onde está a frase "Cesta de id 54321". Esse fluxo forma um semicírculo e, no centro dele, temos o link mencionado.

[02:05] Nós teríamos, mais ou menos, products, que é a categoria de produtos, depois vamos em orgânicos, depois vamos em cestas, packs ou pacote, e passamos com o ID do produto que queremos, da cesta que queremos, é esse 54321. O aplicativo entende isso.

[02:20] É um fluxo bem grande, normalmente o usuário teria que navegar várias telas para conseguir isso. Só que a ideia do deep link é justamente conseguirmos acessar sem precisar entrar nesse fluxo, então você, da tela inicial, você mostra uma promoção, a pessoa aperta e já cai nessa tela com o produto. Nós pulamos o fluxo e vamos direto para onde queremos.

[02:42] Os links profundos, como eu já falei, usam uma espécie de hiperlink, é como se fosse aquele “http://”, “https://”, essa é mais ou menos a ideia de hiperlink. Claro que esse é o protocolo web, não tem nada a ver, mas estou fazendo alusão só para você lembrar, aquilo é um hiperlink, é um endereço que leva a pessoa a algum lugar. Basicamente, o hiperlink que contém todas as informações que precisamos para levar um conteúdo específico.

[03:09] No lado esquerdo do slide tem uma foto de um site com um sapato, aquele é um produto específico, é uma tela com aquele sapato específico.

[03:17] Por exemplo, com esses deep links nós conseguimos levar a pessoa a qualquer conteúdo específico dentro de um site, dentro de uma aplicação desktop, dentro de um aplicativo móvel, de uma maneira muito fácil.

[03:33] Ainda tem uma coisa que é bem legal do deep link, por exemplo, se você observar na gif do lado esquerdo desse slide, a pessoa digita “twitter” no navegador e quando vai abrir o Twitter, o aplicativo que está instalado no Twitter é sugerido, então o sistema operacional pergunta: “Você quer abrir essa página no aplicativo Twitter?” e o aplicativo abre, o aplicativo instalado no seu celular. O deep link também tem essa funcionalidade muito legal.

[03:57] As empresas, Google, Apple, fabricantes de sistemas operacionais móveis, viram que o deep link era uma excelente jogada para poder direcionar o usuário ao aplicativo que estava instalado, porque senão não faz sentido você ficar usando ali na web um tempo e você tendo instalado. Você vai logo lá e oferece para a pessoa: “Você não quer abrir o aplicativo? É melhor por lá”. Também é mais uma serventia do deep link, abrir o aplicativo.

[04:22] Com isso, nós conseguimos fazer uma série de coisas mais legais. Por exemplo, URI scheme é basicamente a instrução que você coloca para o Android, para o iOS, que seja, saber qual é o aplicativo. Claro que isso é uma das formas de fazer, existe também como você registrar a própria URL para o aplicativo detectar.

[04:44] Por exemplo, aquele “myapp:” é o scheme desse deep link. Vamos supor, o aplicativo da Alura seria Alura App, estou chutando, “aluraapp://” alguma coisa. Quando você abre algum link que seja “aluraapp://”, o aplicativo da Alura é aberto automaticamente.

[05:06] Dá para fazer isso, se você montar um site, alguma aplicação, por exemplo, o site da Alura que tenha por baixo dos panos ali um JavaScript, que detecta quando você está no dispositivo móvel, o link muda, em vez de http vai ser aluraapp, e ele já sugere que o aplicativo seja aberto.

[05:19] Também tem outra jogada mais inteligente, que é bem recente, que os aplicativos, quando os codamos, eles já reconhecem um domínio. Por exemplo, lá no package, quando você vai criar a aplicação Flutter, você coloca, “br.com.alura” e, sei lá, “br.com.alura.orgs”, alguma coisa assim, o e-commerce Orgs.

[05:41] E esse “br.com.alura” ele entende que é o domínio e quando você vai para o site da Alura, “alura.com.br”, o celular já saca, ele fala: “Você tem um aplicativo que bate com esse domínio aqui, você não quer abri-lo?”. Então é muito legal esse esquema do deep link.

[05:56] E a vantagem disso é que você consegue, através de links da internet, abrir uma tela do aplicativo, ou seja, você abre o aplicativo e você passa a informação para o aplicativo, que o aplicativo vai conseguir abrir uma tela em específico mostrando um dado produto.

[06:12] Então o que era um link web que você manda para o WhatsApp, por exemplo, se a pessoa tiver o aplicativo instalado no celular, ele vai abrir o aplicativo e vai chegar até a página daquele produto em específico que você queria mostrar para a pessoa.

[06:23] Isso é muito legal e dá para trabalharmos com muita coisa bacana em cima disso. E vamos ver agora nos próximos vídeos por onde nós começamos e como fazemos isso com o Nuvigator.