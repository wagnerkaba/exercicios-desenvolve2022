# What is noImplicitAny?

**The noImplicitAny is a compiler configuration or compiler option that we can modify in TypeScript. The main function of this configuration is by using this we can transform typeScript from optionally-typed to strictly-typed language**. If we don’t specify a type, and TypeScript can’t infer it automatically, the compiler will default to any type.  This can be a serious problem in some instances because having any type to a variable tells the compiler “don’t type check this”.  

The existence of the noImplicitAny compiler option will cause cases where any is inferred for a type to become errors.  This will force us to either fix things in such a way that the type can be inferred correctly or at least explicitly declare the type as any type. 





# 05 O tipo implícito any

[00:00] O que aconteceu? Não estamos usando a linguagem TypeScript. Deixa eu explicar. Eu vou lá para negociação, vou passar o mouse por cima de data, qual é o tipo que o Visual Studio Code está inferindo a partir do compilador TypeScript?

[00:19] *Any*, quantidade, valor, *any*. Você sabe que *any* em inglês é qualquer coisa, isso significa que a minha negociação, o construtor da minha negociação está aceitando qualquer coisa que você passar. Se você passar um abacaxi como data esse abacaxi vai entrar. Eu não tenho checagem nenhuma.

[00:47] O TypeScript adota o tipo *any* implicitamente. Isso é legal porque você consegue escrever um código rápido que você não precisa pensar muito, mas isso causa problemas no seu código como acabamos de ver. O que vamos fazer? A primeira coisa antes de tiparmos esse construtor, dizer que data tem que ser sempre *date*, quantidade tem que ser sempre número e valor tem que ser sempre número.

[01:10] Eu vou alterar uma configuração no compilador que eu sugiro quando você está começando um projeto do zero, você ativar. É que é para dizer para o TypeScript para ele não adotar o tipo *any* implicitamente, só se você por algum motivo do seu código você quiser que aquele campo seja *any*, por algum motivo de compatibilidade, ou seja o que for.

[01:34] Como fazemos isso? Vamos lá no meu "tsconfig", estou dentro do meu “tsconfig” tenho uma propriedade logo aqui que é `"noImplicityAny"` e eu vou colocar aqui `true`. Se segurem na cadeira porque quando eu ativar isso, o nosso programa vai parar de funcionar. Salvei. Já começou a ter erro de compilação em vários lugares. Vamos começar por partes.

[02:07] Vou lá para o meu "negociacao.ts" e vamos ver o que precisamos resolver. Já está mostrando aquele ponto que deu problema no construtor. O parâmetro data tem um tipo implícito `any`, eu tenho que dizer qual é o tipo correto. Qual é o tipo correto? Eu quero que seja `date`. Qual é o tipo da quantidade? Aí você sempre faz assim: `quantidade: number`. Qual é o tipo valor? `valor: number`. `constructor(data: Date, quantidade: number, valor: number)`.

[02:35] Se você vem de linguagens como Java o tipo vem antes, aqui em TypeScript vem depois. Estou dizendo que na data só vai entrar *date*, quantidade *number*, valor *number*. E como esses valores aqui estão recebendo no construtor o TypeScript consegue inferir porque se você recebeu um *date* e aqui é o momento que você está atribuindo o valor a data ele consegue entender, se eu passo o mouse, que o valor é do tipo *number*, quantidade e *date*.

[03:11] Para ficar claro garanta, coloque o tipo aqui também: `private _data: Date; private _quantidade: Number; private _valor: Number;`. Quem está olhando a definição da sua classe vai ver *number*, o que não pode é que se aqui é *number* e aqui é *string* não vai encaixar, por isso você faz isso. E temos como simplificar isso, mas ainda não é a hora de lidar com simplificação é a hora de entendermos os fundamentos.

[03:37] Tipei o negociação, salvei. Ainda tem três erros que estão acontecendo lá no meu `negociacao-controller`. Vou lá em `negociacao-controller`. Faz sentido esse erro que estamos vendo? Faz, porque estou declarando uma propriedade da classe e não estou dizendo qual é o tipo.

[04:00] Inclusive, o TypeScript está te dizendo para evitar usar *input*. Como resolvemos isso? Vamos resolver agora o problema do `negociacao-controller` em um vídeo separado porque tem bastante coisa para vermos.


