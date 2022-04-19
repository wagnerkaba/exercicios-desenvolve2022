# 05 Configuração básica do compilador

[00:00] Você deve estar se perguntando: "Flávio, poxa, o Visual Studio Code já faz essa integração do TypeScript, para que eu preciso configurar o compilador do TypeScript?". Você precisa configurar o compilador porque o Visual Studio Code não vai gerar os arquivos, converter, compilar os arquivos TypeScript da pasta "app" e jogar dentro de "dist".

[00:23] Você precisa fazer isso e se encarregar de fazer isso manualmente. Se você vai estudar Angular, React ou você vai trabalhar com Vue, você utiliza TypeScript por debaixo dos panos, tudo isso vai ser feito de maneira transparente, você não precisa se preocupar, mas aqui temos que entender o negócio a fundo.

[00:41] Vamos lá. Primeira coisa é o seguinte: o centro nervoso lá do TypeScript é o arquivo "tsconfig.json", então dentro da pasta do seu projeto, você clicar aqui em "package.json", vai clicar aqui nesse sinal de "novo arquivo", você vai criar esse arquivo aqui, não pode errar o nome, é "tsconfig.json".

[01:49] Ele tem que estar na raiz do seu projeto, aonde você está abrindo o Visual Studio Code, para que você consiga passar algumas configurações para o seu compilador TypeScript.

[01:16] Primeira coisa que eu vou fazer é abrir essa chave, você não pode cometer nenhum nesse arquivo porque senão ele não vai funcionar, você vai saber isso de imediato, é só você voltar e verificar se você cometeu alguma gafe na hora de digitar nesse arquivo. O que vamos fazer? Isso aqui precisa estar em aspas duplas, eu já tenho o *auto complete* aqui, se sua ideia por acaso pifou e não estar fazendo *auto complete* é só você digitar o que eu vou fazer.

[01:40] Primeira coisa que eu quero fazer é passar umas configurações de compilação, opções de compilação, que é `compilerOptions`. Que configurações são essas? A primeira que eu quero colocar qual é o diretório que eu vou considerar depois de eu ler os seus arquivos "ts" onde que eu vou gravar os arquivos resultantes. Sabemos que tudo que estar disponível para o navegador fica dentro da pasta "dist". Vou dizer que a `"outDir": "dist/js"`.

[02:23] Seguinte: quando você trabalha com o compilador TypeScript, você pode dizer para o TypeScript o seguinte: " TypeScript, quando você for converter os seus arquivos "ts", converte para o ECMAScript 5, porque eu tenho que dar suporte a IE8, IE9, ou transforma para o ECMAScript 6”.

[02:41] Ou “transforma para o ECMAScript mais recente", você tem como configuração para o compilador TypeScript para ver em qual versão do JavaScript ele vai gerar esse código, essa transformação.

[02:57] Eu não vou usar o mais moderno, vou usar para pegar tudo desde a versão do ECMAScript 6, que, se não me engano, é desde 2015, a versão 2015 do JavaScript. Vou dizer que o `"target:`, ele botou `ES3`, mas eu dou "Ctrl + Espaço", tem várias opções aqui, o que eu vou usar aqui é o `ES6`.

[03:21] Eu quero que ele converta todo o código JavaScript com a linguagem JavaScript na versão do ECMAScript 6. Posso até colocar 5, eu vou fazer um teste depois gerando é ES6, ES5 para vocês verem a diferença no final.

[03:40] Agora é o seguinte: " programador, você diz que você quer que eu gere os arquivos na pasta "dist", que converta os arquivos TypeScript para ECMAScript 6, mas qual é os arquivos, onde estão os arquivos que você quer que eu leia?" Os arquivos que eu quero que você considere estão dentro da pasta "app", então o que eu vou fazer?

[04:00] Vou chegar aqui, vou dizer: "compilador, inclui aí para mim a pasta "app", toda subpasta e qualquer arquivo, tudo que tiver dentro da "app", que for ".ts" eu quero que você converte e jogue na pasta "dist.js"". Eu poderia ter outras partes do sistema, era só colocar vírgula e colocar o nome de outra pasta, mas como eu só tenho "app", vai ficar só "app". `"include": ["app/**/*"]`.

[04:33] Fiz o `include`, fiz tudo bonito, será que vai funcionar? Esse é o mínimo da configuração do teu TypeScript, do teu compilador que você deve fazer. Vou salvar aqui. Ele vai ler de "app" e vai gerar em "dist". "Mas Flávio, beleza, você fez essa configuração, mas que eu rodo esse compilador, como que eu faço ele funcionar?" Vem comigo, vamos lá para o "package.json" e vamos adicionar um novo script.

[05:00] Cuidado para não mexer em nenhum outro script que já tem o nosso projeto. Vamos colocar um script que eu vou chamar de "compile", eu podia chamar de "mãe Diná", podia chamar de "calopsita", mas eu chamei de "compile". E aqui, o que vou chamar quando chamar esse script, eu vou chamar o `tsc`. `"compile": "tsc"`.

[05:20] Isso significa que toda vez que eu rodar esse script, o Node Js inteligente vai procurar o módulo do "tsc", do TypeScript Compiler, dentro da pasta no "node_modules" para fazer o trabalho sujo de transformar os arquivos ".ts" para arquivo JavaScript.

[05:40] É muita emoção nessa hora. Eu vou salvar. Meu "TS config" está bonito, olha aí, confere comigo, seu "package.json", vou parar aqui o meu servidor e vou dar `npm run compile`. Quando esse executo esse código no meu terminal, o TypeScript Compiler executou e deu erros.

[06:00] Se você olhar o erro que teve no meu compilador TypeScript, ele confere com o erro que está sendo exibido no Visual Studio Code, então isso significa que meu compilador não vai continuar enquanto você não resolver esse erro de compilação do seu código. E eu vou resolver agora, ou seja, se você olhar aqui para dentro da pasta "dist", ele gerou o "app" e ele gerou o "negociação.js".

[06:40] Se você olhar, mesmo com o erro que aconteceu, eles têm uma estrutura, se eu comparar o "app.js" com o "app.ts", eles são bem parecidos, mas se eu olho "negociação", você vai ver que o código que saiu aqui é um código completamente diferente do meu código "negociação" que eu escrevi em TypeScript, por quê?

[07:03] Porque o meu TypeScript teve que converter todo aquele código que escrevemos usando o que há de mais moderno em TypeScript para uma linguagem compatível com o ECMAScript 6 e não tínhamos propriedades privadas, então, você não precisa se preocupar, pode ter a certeza que vai funcionar assim que resolvermos os problemas de compilação.

[07:29] Tem uma coisa que precisamos resolver. Primeiro, precisamos resolver o problema de compilação e, segundo, não faz sentido para nós o TypeScript gerar arquivo "js" transformado de arquivo "ts" enquanto houver um problema no compilador do TypeScript. Vamos configurar isso tudo e eu vou fazer mais uma revisão para deixarmos isso bem amarrado.
