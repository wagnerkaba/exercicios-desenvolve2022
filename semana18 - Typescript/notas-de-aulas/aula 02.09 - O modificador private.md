# 09 O modificador private

[00:00] Outra coisa para alinharmos é: para definição de atributos privados da minha classe, eu utilizei a sintaxe mais nova do JavaScript. Só que o TypeScript tem a sua própria sintaxe para definição de atributos privados e é essa que vamos utilizar.

[00:19] Não há problema nenhum você utilizar a do JavaScript padrão, mas a própria equipe do TypeScript sugere que você utilize o modificador *private* da própria linguagem TypeScript por questões de compatibilidade, e por aí vai.

[00:33] O que precisamos fazer? Primeira coisa é o seguinte: precisamos remover essa tralha, porque isso daqui é sintaxe do mais moderno do JavaScript. Mas quando removemos essa tralha, temos um problema, porque um `getter` não pode ter o mesmo nome de uma propriedade da classe. Entendeu? Esse `getter` aqui não pode ter um nome da propriedade encapsulado dentro da sua classe. O que eu vou fazer? Eu vou colocar um *underline*.

[01:19] No `getter`, você não precisa saber que a propriedade que guarda valor é *underline*. Esse *underline* é uma convenção antiga do JavaScript para indicar que algo é privado, que você não deveria acessar isso fora do domínio da sua classe. Fiz isso, está aí o meu código. Mas do jeito que está, o que vai acontecer?

[01:39] Toda vez que eu criar uma negociação ou a propriedade `data` vai ser acessível. Se eu chegar agora aqui, salvei o meu código, voltei para cá, para o "app", criei uma "negociação", se chegar para fazer `negociação._data` eu consigo alterar a data. Não pode, regredimos. Uma negociação após criada, não pode ter nenhuma das suas propriedades internas, `data`, `quantidade` e `numero`, alteradas.

[02:12] O que eu faço? Eu coloco `private`, o modificador `private`. Salvei. Quando eu vou em "app.ts", eu estou tentando acessar o `data` e diz que data é privado e não pode ser acessado por fora, ninguém pode atribuir, só a própria classe.

[02:36] O mais bacana é que se agora eu uso o *autocomplete* eu nem vejo o `_ data` como um valor válido no *autocomplete*, porque ela é privada, ela não tem acesso a ela. Essa é uma forma que você vai ver muito comum em projetos, em Angular, projetos com Vue JS, que usa TypeScript, inclusive React, que teve integração com TypeScript, essa sintaxe do `private`.

[03:07] Uma coisa legal: se eu salvo isso daqui e olho lá para saber o que o TypeScript gerou, eu vejo que ele gerou sem nada, sem aquela verborragia que tínhamos antes, porque antes para ele emular aquele comportamento do JavaScript, ele tinha que escrever um código completamente diferente.

[03:32] Você vai pensar: "Flávio, mas nada aqui está me garantindo em *runtime* que alguém possa alterar a sua negociação." Isso é verdade. O que o TypeScript te garante é que no fluxo do seu código você não vai ter nenhuma situação que alguém vai estar alterando uma propriedade privada ou que não deveria poder estar alterando.

[03:55] O código que vai ser gerado no navegador ele continua sendo um código desprovido de todos os recursos do TypeScript, nada impede de alguém abrir o seu console do navegador, tentar alterar o seu código, que ele vai conseguir.

[04:08] O que você está garantido é que na hora que você gerar o seu código para o navegador, o fluxo do seu código que vai rodar ninguém durante a compilação do seu código pode chegar lá e escrever uma sintaxe, como essa agora, chegar lá no TypeScript, vou lá em "app.ts", `negociação._data = new Date()`, sabemos que ele nunca vai gerar um arquivo JavaScript com essa instrução, o TypeScript bloqueia.

[04:43] Por mais que o código no final seja gerado um código em JavaScript desprovido de todos os recursos que vimos aqui do TypeScript, você está garantindo que durante o *runtime* você tem 100% de certeza que ninguém vai fazer, vai cometer uma gafe de acessar propriedades que não existem ou modificar o estado de uma classe sua. Está bom.


