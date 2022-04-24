# 04 TypeScript e Decorators

[00:00] Bom, galera, o TypeScript possui um recurso de linguagem chamado *decorator*. Esse *decorator* me permite pegar esse código, por exemplo, o nosso código que checa *performance*, isolar esse código e colocar esse código em um único lugar e esse código pode ser aplicado em diversos lugares na aplicação.

[00:23] Flavio, você está dizendo que esse código que eu preciso colocar um código, iniciar uma variável antes do miolo do método ser executado e outro no final do método a ser executado, isso pode ser violado em um código? Beleza, até entendi, mas como esse código vai ser aplicado no meu método?

[00:41] É isso que nós vamos ver agora bem devagar. Então vamos entender como funciona esse *decorator*. A primeira coisa, para você não ficar assustado, é que o *decorator* é, nada mais, nada menos, que uma função. Então vamos começar lá dentro da pasta `src`.

[00:57] Eu vou criar aqui a pasta "decorators" e dentro dela eu vou criar um *decorator*, o nome que eu vou usar vai ser logar tempo de execução. Vou renomear aqui, “new file > logar-tempo-de-execucao.ts”. Então está aqui o meu arquivo criado, é um arquivo ts, o que eu vou fazer? Sabemos que esse arquivo para o sistema de modus que estamos usando do **ECMAScript** é um módulo, então ele tem que exportar alguma coisa.

[01:39] O que eu vou exportar? Eu vou dar `export function` e o nome da função que eu vou exportar, `logarTempoDeExecucao`, só isso, uma função que eu estou exportando. Flavio, você está dizendo que *decorator* é só isso? Não, tem mais, mas o princípio para nós entendermos é que esse *decorator* é declarado dessa forma.

[02:03] Ainda está longe terminarmos esse *decorator*, mas o mais importante para entendermos é onde que eu quero usar esse cara? Eu quero usar tanto em *view* quanto no meu *controller*, então como é que essa função *decorator*, depois de pronta, como que pegamos ela e associa com o método que queremos analisar e executar um código? Esse código de performance ou qualquer outro que a gente vai ver ao longo do treinamento.

[02:30] Eu vou voltar lá para o meu *controller*, negociação *controller*, onde tem o adicione, vou remover isso aqui, porque queremos que isso seja feito pelo *decorator*. O que eu vou fazer? Você vai chegar e eu vou importar aqui em cima do adiciona, vou colocar `@logarTempoDeExecução`. Fiz isso, abro e fecho parênteses, quando faço isso dá um erro, mas já vou explicar.

[03:08] Primeira coisa que você vai verificar é se o seu *import* lá em cima, se ele importou `logarTempoDeExecucao`, descendo uma pasta ele foi para a pasta *decorators*. Verifica se o `js` está lá. Esse `js` precisa estar lá. Antes de terminarmos o *decorator*, você já sabe que o *decorator* eu uso essa sintaxe especial usando arroba ou *at*, no inglês, mais o nome da minha função *decorator*.

[03:38] Como é uma função, estou abrindo e fechando parênteses, mas se eu passo o *mouse* aqui em cima, você vai ver que esse *decorator* ainda não está pronto. Nós precisamos continuar a implementar, porque ele não segue uma assinatura de um *decorator* real, mas o mais importante aqui, antes da implementação, é o seguinte, suponha que nós já implementamos esse *decorator*. Não vai funcionar.

[04:05] Nós precisamos ativar uma configuração especial no compilador para garantir que os *decorators* sejam processados pelo TypeScript no momento da compilação do seu código. Então, recapitulando, estou tendo esse erro porque o meu *decorator* não está pronto, se eu estivesse com o *decorator*, pronto nem iria funcionar porque eu preciso deixar claro para o compilador TypeScript, quero que o TypeScript processe *decorators* no meu código e como faço isso?

[04:36] Vou salvar, vou lá no centro nervoso do compilador TypeScript, que é o `tsconfig.json` e vou colocar uma propriedade aqui que é `experimentalDecorators: true`. Quando eu coloco eu estou dizendo para o TypeScript que eu vou usar *decorators* experimentais.

[05:05] A primeira coisa que você pode estar pensando na sua cabeça é se você vai usar uma coisa experimenta. Não, isso é usado por angulares, isso é usado se você tem TypeScript *react* você pode usar também. É só porque a definição do API de *decorator* ainda não foi consolidada no mundo do Java Script.

[05:23] Então o que estou dizendo para o TypeScript é usar a questão experimental, mas de experimental não tem nada, porque isso é usado em produção e por aí vai. Salvei, agora o meu compilador está com isso ativado e agora nós podemos voltar lá para logar tempo de execução. Só para garantir eu vou parar aqui o meu servidor e vou executar `npm run start`.

[05:49] Só para ter certeza de que a configuração que eu passei para o *decorator* vai estar sendo executada aqui no meu código. É uma coisa importante para nós vermos, é que eu preciso fazer esse código compilar, vamos lá agora para o próximo vídeo que vamos terminar o nosso *decorator*.
