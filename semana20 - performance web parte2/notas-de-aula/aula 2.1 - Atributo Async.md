# 01 Atributo async



[00:00] Estávamos conversando sobre a característica blocante do JavaScript. O grande problema é que o JavaScript pode alterar o HTML, pode alterar o CSS, pode alterar o que ele quiser e outros *scripts* também. Então eu preciso executar o *script* primeiro, antes de prosseguir a execução.

[00:18] Além disso, se você pensar bem, se eu tenho por exemplo, quatro *scripts*, essa versão é aquela versão “buildada”. Vou até tirar o *build* para você enxergar melhor. Imagine que eu tenho quatro *scripts* e eu preciso executar na ordem, porque o *script* de baixo pode acessar coisas do *script* de cima.

[00:36] O JavaScript naturalmente tem essa característica sequencial. O navegador até tenta otimizar algumas coisas, como por exemplo, fazer o download dos quatro *scripts* em paralelo, só que na hora de executar mesmo, ele tem que executar na sequência.

[00:52] Por exemplo: imagine que eu fiz o download dos quatro paralelamente, só que eu estou terminando ainda o download do “menu.js” e os outros três já baixaram. Ele não pode executar enquanto esse aqui não terminar de baixar e executar.

[01:08] Então um *script* mais lento pode atrasar a execução de todo o resto da página, isso vira uma bola de neve. Quando você tem uma página com muita coisa sendo executada, essa característica sequencial blocante do JavaScript impede que as coisas rodem em paralelo.

[01:28] Por isso que no HTML5 entrou um novo recurso. A partir do HTML5 você pode vir nos seus *scripts* e adicionar um atributo na *tag* chamado `async`. O que significa `async`? Você sinaliza para o navegador que aquele *script* pode ser baixado e executado de forma assíncrona. Assíncrona significa de forma não blocante.

[01:54] Isso quer dizer que ele não vai aguardar esse *script* para executar os demais que tem aqui embaixo, ou se eu tivesse esse *script*, por exemplo, um pouquinho para cima no meio do HTML, a ideia é que ele não vai aguardar esse *script* para executar o HTML.

[02:11] Ou seja, o *script* deixa de ser blocante, tanto com relação ao HTML, quanto com relação aos outros *scripts*. Nada me impede de marcar `async` na maior parte de *scripts* que eu conseguir. Esse é o cenário ideal.

[02:32] Nesse cenário do `async` em todos os *scripts*, ele vai baixar as coisas de maneira paralela e independente, e executar conforme esses *scripts* vão chegando. Mas tem uma questão, que é: esses *scripts* podem ser executados fora de ordem.

[02:50] Se o meu *script* primeiro demora muito, sem problema, ele sai executando outro. A hora que esse primeiro chegar, ele executa também. Só que se eu preciso dessa ordem, eu estou ferrado. A ideia é que você não vai usar “script async” quando você precisa dessa ordem na página.

[03:08] “Sérgio, mas eu gostaria muito de trabalhar com recursos assíncronos – por exemplo, aqui com o ‘async’, com meu ‘script’ – e mesmo assim ainda estabelecer a ordem de alguns *scripts*.

[03:19] Isso não existe nativamente no HTML, mas existem vários frameworks no mercado que fazem esse tipo de carregamento assíncrono com definição de ordem, quando você tem dependência.

[03:34] Talvez um dos mais famosos hoje em dia é o RequireJS com AMD, mas você tem também CommonJS. Tem vários outros padrõezinhos bacanas que você pode utilizar. Não vamos tratar disso no curso porque isso, na verdade, é um assunto de módulos em JavaScript, que é um assunto bem mais complicado que podemos discutir.

[03:51] O que eu quero dizer é que se você usa um desses frameworks de módulo em JavaScript, você ganha essa possibilidade de estabelecer dependências entre “scripts, que no caso do meu site nem é tão interessante.

[04:02] O site do Alura já foi feito de forma que cada *script* seja autocontido e esses *scripts* são independentes entre si. Então eu posso carregá-los de maneira assíncrona, sem problema nenhum. O menu não depende da busca, que não depende do “footer” e assim por diante.

[04:18] E tem um ponto curioso também que é o seguinte: imagine só, se esse aqui, agora não é mais blocante. Se ele não bloqueia mais a renderização, eu preciso realmente colocá-lo no fim da página? Não. Se eu quiser, eu posso colocar esse *script* assíncrono no meu “head” novamente, que ele ainda vai ter aquela característica não blocante.

[04:46] Você fala: “Sérgio, mas qual é a diferença? Por que eu colocaria no ‘head’ de novo?” Colocar no “head” de novo sobe um pouco a prioridade de download desses *scripts*. Aliás, você pode usar também outro recurso, que você pode priorizar essas coisas.

[04:58] Você pode vir, por exemplo, e falar: “Essa parte do ‘footer’ não é tão importante”. Então eu vou jogar esse ‘script’ para o fim e eu vou jogar os outros aqui no topo, que ele vai começar o download antes daquele ‘script’ do final. A ordem do HTML ainda é uma dica para o navegador da prioridade que ele deve dar para cada um desses recursos. Você pode usar essa ordem para isso.

[05:25] Mas se você usar `async` sempre, você não vai ter aquele problema de fazer o bloqueio da renderização, então você pode jogar esse aqui. O único detalhe é que se você jogar o `async` para cima, lembre que esse código pode ser executado assim que chegar. Não trava a renderização, então você vai precisar colocar o *onload* de novo aqui no “menu.js”.

[05:46] Eu vou voltar o meu código anterior, que eu vou deixar embaixo. Eu só queria te mostrar essa possibilidade. E mais ainda, quero – para fecharmos esse vídeo – te mostrar o seguinte:

[05:55] lembra-se que eu estava fazendo aquela concatenação dos JavaScripts com o plugin do Gulp? Pois é, aquele plugin do Gulp também recebe um parâmetro adicional, que é o parâmetro `async`, que vai pegar esses *scripts* todos, “buildar” em um só na ordem correta e colocar o `async` no todo.

[06:13] Isso pode ser interessante também, porque usando esse recurso de concatenação, você consegue juntar *scripts* que tenham dependências e carregar assincronamente da mesma forma.

[06:25] Vou fazer o *build* aqui só para você ver. Vou rodar “gulp default” na linha de comando. Ele vai rodar tudo de novo e no “dist”, se olharmos o “index.html”, vamos procurar a “tag script” e vamos ver. Ele girou a “tag script” aqui no finalzinho e, se você estiver olhando – ele está bem atrás de mim. Agora sim.

[06:56] Ele tem o atributo `async` setado. Lembra que está tudo minificado? Fica difícil de ver. Mas tem *script* com o atributo `async` setado e tudo isso unificado em um arquivo só. Então use esse “script async”.

[07:09] “Sérgio, isso é do HTML 5. O que vai acontecer nos navegadores antigos? ” Navegador antigo vai continuar fazendo o que ele já fazia antes, que é carregar as coisas na ordem e pronto, de maneira blocante.

[07:20] Isso é legal porque os navegadores modernos já vão entender e, detalhe, “moderno” quer dizer todos os navegadores que usamos hoje em dia, o “script async” é suportável desde o IE 9, para você ter ideia. Então não tem razão para você não usar isso na prática.
