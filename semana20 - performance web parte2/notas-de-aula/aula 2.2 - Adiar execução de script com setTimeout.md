# 02 Adiar execução

[00:00] Você já trabalhou com *threads* em alguma linguagem de programação? Sabe *multithreading*? Fazer coisas em paralelo? Executar códigos, por exemplo, em mais de um processador simultaneamente, de maneira paralela e tal.

[00:12] Isso é bem difícil de fazer, não sei se você já usou isso em alguma linguagem, como Java, mas isso é relativamente complicado, principalmente quando os *threads* têm que se comunicar.

[00:20] Por que eu estou falando isso? Porque o navegador não faz isso. Você nunca teve que se preocupar, quando escreveu o seu código JavaScript com o *multithreading*. Você nunca precisou se preocupar se um altera a variável em paralelo com outro, e isso dá problemas.

[00:34] Chamamos de “race conditions”, "locks" e coisas assim. Nunca precisou se preocupar, o JavaScript nem tem recursos para isso. Por quê? Porque o navegador e a execução do JavaScript é o que chamamos de “*single thread*”.

[00:46] A ideia é que mesmo que você esteja em uma máquina com quatro processadores simultâneos, o seu JavaScript vai ser executado em um único *thread*. E não só o seu JavaScript, todos os eventos de usuário, toda a interação do usuário.

[01:03] O usuário clicou em um botão, o usuário deu um *scroll* e o navegador precisa recalcular algum elemento da página. Tudo isso é executado em um único *thread* do navegador.

[01:13] E isso é bem interessante, porque ele limita uma série de dificuldades que poderiam existir, como por exemplo, enquanto o usuário está clicando, eu executo um código que causa um problema no *scroll*... sabe? Não existe nada disso. As coisas são sequenciais e “single thread”, mas isso é um grande gargalo de performance.

[01:34] Se você for pensar, todos os códigos JavaScripts que você escreveu na sua vida estão executando no mesmo *thread*, ou seja, estão competindo pelo mesmo processador, que são as próprias interações do usuário.

[01:49] Você já acessou algum site, por exemplo, que você começa a dar *scroll* e o site dá aquela travada? Ou que você vai clicar em alguma coisa e dá aquela engasgada? Por que isso acontece?

[02:00] Porque ele estava tentando executar alguma coisa ao mesmo tempo em que o usuário está tentando também fazer alguma ação, e como é “single threaded”, as coisas não executam ao mesmo tempo e um ganha do outro. Um *script* lento pode deixar a sua página menos responsiva para o usuário. Fica travando.

[02:21] Por que eu estou falando isso? Porque até agora, quando estávamos falando dos nossos *scripts*, focamos muito no carregamento do *script* em si, otimizar, utilizando o `async`, por exemplo, o carregamento desse aqui para, ele não travar a renderização e tudo mais.

[02:37] Mas podemos também pensar na execução desses *scripts*. Por quê? Porque mesmo que eu coloque `async` em todos os meus *scripts* aqui – então vou botar aqui o `async` – a ideia é que conforme ele vai baixando – ele baixa tudo em paralelo – ele vai executando, e não só vai executando como se esse *script* fizer alguma coisa pesada. Ele vai travando aquela *thread* que também responde a interface do usuário.

[03:10] Por que eu estou falando isso? Porque podemos também, além de fazer o carregamento de forma paralela, pegar alguns *scripts* que não são tão essenciais para a página e postergar execução desses.

[03:26] Por exemplo, imagine o seguinte: eu estou carregando a minha página. Carreguei a minha página, tem um “footer.js”. Para que serve esse “footer.js”? Ele manipula alguma coisa rodapé do site, vamos ver o rodapé do site, embaixo.

[03:45] Na verdade, eu sei. Esse *script* manipula essa parte de cadastro de newsletter, que além de estar embaixo. A chance do usuário vir aqui e clicar é bem pequena. Quando ele carrega a página, ele gasta um bom tempo olhando as coisas e talvez ele chegue no final e use essa funcionalidade.

[04:04] Qual é a questão? Imagine que eu estou carregando a página e eu quero fazer uma busca, e essa busca é um evento do usuário, só que o navegador está atrasado, executando o “footer.js” a hora que eu clico aqui. O que ele vai fazer? Ele vai dar aquela engasgada. O problema é que eu estou competindo pelo mesmo processador. Como eu posso fazer então?

[04:32] Vamos dar uma pensada aqui. O meu download já vai ser executado de maneira paralela, só que quando esse “footer.js” carrega, deixe-me abri-lo aqui. Ele já vai executar logo ali, instantaneamente. Eu tinha até deixado esse `addEventListener` do `load`, só que imagine que isso é no rodapé da página e eu não quero que ele execute tão rapidamente assim. O que eu posso fazer?

[05:00] Um truque: eu posso adiar a execução desse aqui usando um bloco de `setTimeout()`. Você já usou ele? Deixe-me escrever aqui para você lembrar. É uma função do JavaScript que basicamente recebe duas coisas. Uma função com o que você quer executar e quanto tempo depois essa função deve ser executada.

[05:24] Basicamente, você fala o seguinte: “Eu gostaria que essa minha função fosse chamada não agora, mas daqui cem milissegundos ou daqui mil milissegundos” - ou seja, daqui um segundo. Então eu venho para ele e falo: “Chame essa função só no futuro” - ou seja, eu adio a execução daquele código.

[05:43] “Sérgio, como eu faço isso?” Eu poderia vir aqui, pegar essa minha função, ao invés de colocá-la no *onload*, eu a passo como `setTimeout()`. Lembre-se, o primeiro parâmetro é uma função e o segundo é o tempo.

[06:01] Deixe-me apagar aqui para fazermos. Então o primeiro parâmetro é uma função, essa função é gigante. Ela faz tudo isso daqui, chego no final e o segundo parâmetro é o tempo. O que eu acabei de fazer? Eu vou carregar o “footer.js” de maneira assíncrona, só que a execução desse código – que poderia ser um código potencialmente lento.

[06:26] Imagine isso em cenários bem mais complexos que esse, cenários com códigos bem maiores e bem mais complicados – só vai acontecer daqui um segundo, ou seja, eu posso ir quebrando a execução dessas coisas aos poucos. Quer ver? Vamos rodar o “gulp default” para vermos o que acontece.

[06:46] Ele “buildou” e vou executar de novo. E agora? Alguma diferença para o usuário? Vamos ver primeiro no nosso console. Quando você vem no console, você não vê nenhuma diferença.

[07:01] Mas podemos observar que – deixe-me dar um *scroll* aqui – que o meu rodapé vai continuar funcionando. Se eu der um “Ok”, ele faz uma validação que, aliás, era exatamente esse trabalho dele aqui, fazer uma validação, ou seja, o JavaScript executou. Só que quando? Um segundo depois, somente.

[07:18] Podemos até, se você quiser, colocar alguns “console.log” para observarmos qual foi o tempo que ele executou. Então vou vir aqui e falar o seguinte: esse aqui roda o “footer.js”. Vou “buildar” de novo e vamos ver aqui, que horas que isso aparece no console.

[07:42] Repare que o código vai executar, depois de um tempo, “footer.js”. Eu coloquei um segundo só, mas se você quiser deixar mais ridículo ainda. Só para você enxergar que realmente isso adia a execução coloquei agora cinco segundos, só para você enxergar.

[08:00] Acho que na prática, cinco segundos é até muito. Não precisa ser tudo isso. Mas carrego a página, posso usar minha página. Depois de cinco segundos o “footer.js” é executado.

[08:13] A ideia é que eu vou tentando tirar *scripts* secundários do processo de execução do navegador, para que eu não fique competindo com aquele *thread* único ou ficar competindo com ações do usuário e coisas do tipo.

[08:27] Posso fazer isso até para outros *scripts*. Vamos dar uma pensada aqui. Por exemplo, esse *script* que faz a busca. Será que realmente esse *script* precisa ser executado logo de cara? Imagine que o “footer” eu deixei com um segundo, porque o “footer” roda depois e pronto.

[08:43] A busca talvez seja um pouquinho mais útil. Eu não quero atrasar tanto, mas também ela não é essencial assim. Imagine, a pessoa abre a página e já vai clicar em busca imediatamente depois?

[08:54] Não, talvez tenha alguns 200 milissegundos aqui para ele vir e clicar. 200 milissegundos é um tempo interessante, eu posso quebrar o meu *script* em várias pequenas tarefas de 200 milissegundos. Isso já dá uma boa melhorada na página.

[09:08] Eu vou vir aqui, por exemplo, eu tinha falado da busca. Vou pegar a busca e vou fazer a mesma alteração. Eu vou pegar esse aqui e vou colocar um `setTimeout()`, só que de 200 milissegundos. Vou colocar o “console.log”, só para você enxergar. Esse aqui é o “busca.js”.

[09:30] Alguns *scripts* eu não quero. Alguns *scripts* são mais importantes para mim, por exemplo, “detect” talvez seja mais importante porque ele detecta algum suporte do navegador e habilita ou não, enfim. Esse aqui eu quero que ele rode antes, mas o outro não. Então vamos rodar aqui. “gulp default”. Vou rodar.

[09:50] O que você vai ver? O “busca.js” e o “footer.js”, você vê até a ordem. Um executa, o outro executa. Você consegue enxergar que isso demora um pouquinho. Então isso é um ponto interessante, você pode adiar a execução de algumas coisas usando o `setTimeout()`.

[10:08] No JavaScript temos então – deixe-me aumentar a fonte – o `setTimeout()`, que é uma função interessante para fazer isso. Eu não vou mostrar aqui no curso, mas você pode pesquisar.

[10:19] Quando você estiver trabalhando mais com animações, você tem outro, que é o “requestAnimationFrame”, que faz exatamente a mesma coisa, só que para animações. Ele também adia a execução, só que mantendo 60 quadros por segundo.

[10:33] Você tem também o “requestIdleCallback”, que é uma especificação nova. Esse é até mais legal. Esse não tem tanto suporte no navegador, mas ele me permite executar aquele código apenas quando o navegador estiver “idle”, significa quando o navegador estiver ocioso.

[10:53] A ideia é: ele executa as coisas mais importantes e quando eu tiver um momento de ociosidade, eu chamo o “requestIdleCallback”. É legal, só que hoje, enquanto eu gravo esse vídeo, só o Chrome suporta. Mas existem planos para isso entrar na especificação e os outros browsers terem também.

[11:10] O `setTimeout()` é o mais simples, mais imediato e com grande efeito. Imagine que você tem várias tarefas. Você pode quebrar essas tarefas em pequenos blocos de `setTimeout()` para que ele consiga liberar aquele *thread* para execução, por exemplo, de *scroll* do usuário, de alguns outros eventos do usuário.

[11:34] Eu mostrei aqui, nós adiando a execução de um *script* secundário, como por exemplo, o “footer.js”.
