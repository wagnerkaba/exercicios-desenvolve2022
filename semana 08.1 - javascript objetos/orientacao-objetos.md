# [Conceito de OO](https://cursos.alura.com.br/course/fundamentos-javascript-objetos/task/95702)




[00:00] André: Olá pessoal bem-vindos de volta, nesta aula começamos a falar um pouco sobre orientação a objeto, ou OO, um termo que você vai escutar bastante, então vamos começar a falar um pouco sobre objeto dentro do JavaScript.

[00:15] Então a principal ideia do orientação a objeto, ele é um paradigma de programação, ele é um modelo, então é uma maneira de você programar, existem diversas maneiras, programação funcional, enfim que você pode utilizar também em diversas linguagens, então esse é o modelo, é um estilo que você tem para programar, não é uma regra absoluta, você pode usar outros modelos também, que você se achar mais confortável. Mas a orientação a o objeto é muito utilizado hoje, não é Ju? Correto?

[00:45] Juliana: Correto.

[00:46] André: Então várias linguagens implementam orientação a objeto, o JavaScript também, então a principal ideia da orientação a objeto é trazer para o código conceitos e ideias que vemos no dia a dia, no mundo real, que nem fizemos nos exemplos das aulas anteriores, modelamos, pegamos informações de uma pessoa, a pessoa existe no real, então quantas informações da pessoa eu preciso, nome, CPF, e-mail, então isso pegamos essas informações e transforma em código, então esse conceito que são objetos, estão, que existem no dia a dia, no mundo real, estamos transportando para computação, para o código.

[01:29] André: Então a ideia é pegar as informações do mundo real e jogar para dentro computador, dentro da codificação, dentro da linguagem, correto Ju, é isso ai?

[01:38] Juliana: Correto, então pode passar?

[01:42] André: Pode passar.

[01:43] Juliana: Então a nossa pessoa transferimos tudo, pessoas, xícaras, carros, transformamos em objetos dentro da linguagem, e para conseguirmos abstrair melhor e trabalhar com esses conceitos.

[01:57] André: É isso ai, outro conceito importante em orientação a objeto é o conceito de classe, então uma classe, os objetos que criamos até agora, criamos objetos literais, ou usando construtores naquela maneira de função no JavaScript, mas uma maneira que temos também que é meio que padrão a orientação a objeto, é você utilizar classes, que são modelos para criação de um objeto.

[02:24] Então na classe vamos definir as propriedades que precisamos, que identificamos do mundo real, que precisamos trazer para o mundo computacional por assim dizer, e para modelarmos na codificação depois, para codificar depois.

[02:36] Então uma classe ela vai definir para nós as propriedades, as informações que precisamos, e os comportamentos de um determinado objeto, que são os métodos que chamamos.

[02:54] Então aqui nesse slide, nessa parte específica, temos aqui um exemplo da codificação de uma classe pessoa dentro do JavaScript, então definimos a palavra reservada class, mais outra palavra reservada da linguagem, então class, a definição do nome da classe, que é chamada Pessoa, então class Pessoa, definimos também um construtor que vai ser aquela função que você invoca, dá um new no objeto para criar um objeto na codificação? Que vamos ver um pouco mais pra frente, você chama o construtor e no construtor você passa as propriedades que você quer, que você precisa para construir aquele objeto.

[03:34] Então Pessoa recebe como construtor um nome, sobrenome, cpf, e-mail e assim eu vou definir depois um objeto no computador, na programação.

[03:46] Então continuando aqui dois conceitos importantíssimos quando falamos de classe, orientação a objetos, são conceitos de atributos e métodos, então uma classe ela vai definir um modelo para você criar um objeto, ou diversos objetos na memória do computador na execução do programa do seu sistema, enfim, então uma classe ela vai ser definida por atributos, que são as características que preciso, que são importantes para definir aquele objeto, a criação dele.

[04:13] Por exemplo, no exemplo anterior que fizemos e estar programando com JavaScript, estamos usando o cenário bancário, então criamos um objeto cliente que ele tem algumas características importantes para aquele modelo de negócio que estamos tentando programar, que é um nome, e-mail, cpf, são as características de um cliente, então definimos isso na classe, os atributos.

[04:37] E os métodos são os comportamentos que é o que aquele objeto pode realizar dentro do sistema, então de novo no exemplo bancário, tínhamos a função depositar, depositar poupança e enfim, então são comportamentos que esse objeto tem, são os métodos que definimos para ele, então uma classe, resumidamente, ela vai definir os atributos e os comportamentos e os métodos de um objeto.

[05:07] Então continuando nosso exemplo da codificação de JavaScript, de orientação a objetos usando classes, definimos a classe pessoa, definimos no construtor os atributos dessa classe, e aqui definimos um comportamento para a pessoa, que é exibir nome completo, que é um método, uma função no JavaScript, então eu defini os atributos do construtor e os métodos, logo embaixo em exibir nome completo.

[05:38] Então continuando aqui o conceito de herança que é um conceito importante na orientação a objeto, e que começamos a ver com a questão do protótipo, prototype, dentro do JavaScript, herança é um mecanismo, é uma maneira que temos, que vai permitir que uma classe que definimos ela herde características e comportamentos de uma outra classe, uma classe base.

[06:04] Então é um mecanismo importante que nos permite trabalhar com o conceito de reaproveitamento de código, e isso é muito importante para nós que programamos, não precisa “reinventar a roda” toda vez, eu já posso definir um lugar e a medida que eu preciso incrementar o comportamento, atributos, eu vou definindo isso daí através dessa hierarquia, através da herança.

[06:29] Então aqui eu defini um código de JavaScript também onde eu trabalho com herança dentro do JavaScript, nesse conceito de orientação a objeto, então foi definida a class Programador que ela extends da classe Pessoa, então esse extends também é uma palavra reservada, que no JavaScript para nós vai significar herança, eu estou herdando, todas as características da pessoa, então a classe Programador ela herda de Pessoa.

[06:59] Então defino também um construtor para esta classe Programador, passando as informações que eu preciso, como ela herda de pessoa, eu uso também a palavra reserva super() que faz referência aquela, nas aulas anteriores que já vimos, sobre aquele call, então eu estou chamando da classe Pessoa, o construtor da classe Pessoa para dentro do construtor da classe Programador.

[07:24] Então passando as informações que eu preciso para construir uma pessoa, mais a informação que eu defini, que é específica de programador, que no caso é linguagem, então definimos construtor passando as informações que precisa, mais a palavra reservada this definindo o que é informação somente o que é do programador, a propriedade linguagem.

[07:46] Objeto, estamos falando de programação orientada a objeto, um objeto ele é uma instância de uma classe, então o que que isso quer dizer? Quando eu dou um new, uso a palavra reservada new, eu estou criando um objeto na memória, criando uma Instância dele na memória do meu computador, na memória que vai executar meu sistema, e a partir do objeto que eu vou executar os comportamentos que o objeto pode fazer, realizar.

[08:12] Então definimos em cliente, defini em programador, alguns comportamentos, e eu tenho acesso a esse comportamento, e a esses atributos, essas propriedades desse objeto no momento em que eu instancio ele, então tem uma instância dele na memória, eu consigo trabalhar no meu sistema com esse objeto.

[08:31] Então vamos resumir aqui esses conceitos de orientação a objeto, então a OO, orientação a objeto, é um modelo, é um estilo que se tem para programar, existem outros estilos mas ele é muito utilizado no mercado, em qualquer, em vários momentos você vai se deparar com ele, a maioria das linguagens implementam a orientação a objetos.

[08:54] Juliana: Também conhecemos esse modelo como paradigma de programação, então é um paradigma orientado a objeto, uma palavra bonita, difícil, então o que mais que temos?

[09:07] André: Então na OO, orientação a objeto, a ideia é transformar coisas do mundo real para codificação, para modelar um sistema bancário, quais as informações que existe no mundo real, que existe no banco que eu preciso colocar no código? Então a ideia é essa.

[09:25] Então uma classe ela é formada por atributos e métodos, as características e os comportamentos, que esse objeto no mundo real tem, e isso precisa ser refletido no meu sistema também.

[09:40] Um objeto é uma instância de uma classe, então ele é uma instância de uma classe na memória, e é o objeto que realmente vai executar todas as funções que meu sistema precisa.



[09:53]Juliana: Então foi um resumo aqui da nossa introdução à orientação a objeto, as classes em JavaScript, elas surgiram no ES6, elas não existiam anteriormente em JavaScript, o que fizemos anteriormente com funções era a forma que se fazia para usar o paradigma de orientação a objetos em JavaScript antes do acréscimo da palavra chave classe, porque não existia antigamente na linguagem.



[10:24] Até hoje, por trás, por baixo dos panos, que falamos, o JavaScript utiliza funções para gerenciar classes, chamamos as classes de JavaScript quando isso acontece de açúcar sintático, é uma expressão que você pode ter trombado com ela também, ou de synthetic sugar, significa que classe em JavaScript é uma palavra que adicionaram na linguagem para que quem já programava orientada objeto, ficasse mais confortável em utilizar a linguagem.

[10:53] Então o pessoal já estava super acostumado a trabalhar com classe, com extends, com construtor, com super, então para quem veio de outras linguagens, programar melhor em JavaScript foi acrescentado em 2015, a sintaxe de classe, mas por baixo dos panos o JavaScript, transforma tudo isso em função de uma forma muito similar com que vimos anteriormente.



[11:18] Então agora que o André já debulhou para nós orientação a objetos, podemos praticar mais um pouco com esse paradigma, para ver como isso funciona na prática, então nos vemos no próximo vídeo.

[11:29] André: Até o próximo vídeo.