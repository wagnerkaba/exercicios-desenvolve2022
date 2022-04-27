# 05 Definindo uma interface para a API

Arquivo: [negociacao-controller.old.ts](../app/src/controllers/negociacao-controller.old.ts)

```

    public importaDados(): void {
        fetch('http://localhost:8080/dados')
            // obs: Em uma arrow function de apenas uma linha, a palavra "return" não é necessária, pois está subentendida
            .then(resposta => resposta.json())
            // obs: any[] é a mesma coisa que Array<any>
            .then((dados: any[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante)
                })
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }
   
```

*Imagine que no código acima, eu escreva `dadoDeHoje.montate`*



[00:00] Se eu tenho uma equipe com trinta desenvolvedores, toda vez que eles tiverem que acessar esses dados de negociação, eu não quero que eles cometam esse erro que eu cometi agora. Posso escrever `montate` e eu não sei o erro em tempo de desenvolvimento o que está acontecendo aí.

[00:19] Eu quero que aconteça durante a compilação. Ou seja, acho que vocês já pegaram o meu recado. Como que fazemos? O Type Script tem um recurso muito poderoso que nós vamos começar a arranhar ele, começar pela superfície, chamado interface.

[00:35] O que é uma interface? Se você vem do mundo Java, do mundo C Sharp, a interface do Type Script é um pouco parecida, lembra muito a interface que você já está acostumado no mundo Java, mas no Type Script ela tem outras funcionalidades.

[00:51] A funcionalidade aqui eu quero definir um *shape*, uma forma para esse dado que está vindo do Back End. Eu quero tipar esse dado com um tipo que eu vou definir, um tipo que eu vou criar. Então a interface pode ser utilizada para definir esse *shape*, essa forma de dado que você está esperando.

[01:15] Como nós vamos fazer isso? Vamos chegar lá dentro do nosso projeto, dentro de src, vou criar uma pasta nova que vou chamar de `interfaces`. Aqui eu vou criar uma interface que representa essa `NegociacaoDoDia`, que eu vou chamar de `negociacao-do-dia.ts`. Criei esse cara.

[01:46] Como é que eu crio uma interface? Eu boto `interface NegociacoesDoDia {}`, vou exportar a minha interface, porque eu quero poder importá-la. Quando você criar interface, a primeira coisa que você tem que ter em mente é que uma interface nunca pode ser instanciada igual uma classe.

[02:17] Ela não é uma classe, você não cria instâncias a partir dela. Então se eu tentar fazer `const x =new NegociacoesDoDia();`, esse cara nem construtor tem, vai dizer que está se referindo a um tipo, mas está tentando ser usado como um valor aqui. Então a interface não serve para isso.

[02:37] Agora olha que bacana, qual é o tipo de dado que estamos esperando de lá? O tipo de dado que estamos esperando é o nome "montante" e "vezes" que number. 

Olha o que eu vou fazer, `montante: number; vezes: number`, o que eu criei? Eu estou dizendo que esse tipo, essa interface tem duas propriedades, montante e vezes.

```
export interface NegociacoesDoDia {
    montante: number;
    vezes: number;
}
```

[03:14] Essas duas propriedades são valores, são do tipo *number*. Uma interface não posso definir nenhuma implementação e nem valor para ela, se eu tentar fazer `montante: number = 10`, isso aqui não é uma classe, não vai rolar nem com reza forte.

[03:30] Então, olha só, pra que serve isso então? Você só está definindo o que é montante e vezes? Agora olha a beleza do negócio. Salvei, venho para `NegociacoesDoDia`, vou no meu `controller`, onde está o tipo `any` eu vou substituir com `NegociacoesDoDia`. 



*OBS: O professor substituiu a linha:*

```
    .then((dados: any[]) => {
```

*Por esta aqui:*

```
    .then((dados: NegociacoesDoDia[]) 
```

*Resultado:*

```
    public importaDados(): void {
        fetch('http://localhost:8080/dados')
            // obs: Em uma arrow function de apenas uma linha, a palavra "return" não é necessária, pois está subentendida
            .then(resposta => resposta.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante)
                })
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }
```

*OBS: Posteriormente o professor transferiu a primeira parte do código do método importaDados() para o método obterNegociacoesDoDia() na classe [NegociacoesService](../app/src/services/negociacoes-service.ts)*


[04:05] Beleza, fiz isso, tipei. Esse cara não é mais `any`, esse cara é `NegociacoesDoDia`. Agora olha que lindo, se eu passo o *mouse* aqui, está dizendo que esse cara é uma rede de `NegociacoesDoDia`. Agora, olha só, se eu dou `dadoDeHoje.`, olha o auto *complete* aí.

[04:36] Vou tirar o E e fica `montant`, erro de compilação, não tem como passar, porque você definiu uma interface para essa API que você está recebendo do Back End. Agora, olha só, vamos supor que o Back End trocou. Todo mundo me pergunta isso, até o pessoal da minha equipe de vez enquanto vem com essa pergunta.

[05:01] Se eu volto para cá, vamos supor que agora alguém trocou no Back End dizendo que esse cara não é mais montante, é valor. O Type Script vai ter como saber? O que o Type Script vai fazer é que ele vai dizer que esse cara tem o *shape*, mas quando eu tento acessar montante, na verdade o montante não vai existir, porque alguém trocou o nome na API.

[02:51] Minha aplicação quebrou e eu só vou saber em *runtime*. Mas olha a vantagem da interface, se alguém mudou a API, ele vai comunicar a equipe de *Front End* e olha o que a equipe pode fazer. Eu vou clicar aqui com o “botão selecionar > rename simbol” e em `valor` vou dar enter.

[05:40] Fiz isso. Como eu tenho esse cara tipado, se ele alterou vários arquivos, se eu volto em `negociacao-controller` olha o que ele trocou, o montante virou valor. 



*OBS: O professor alterou a propriedade da interface `NegociacoesDoDia` e o VS Code automaticamente refletiu as mudanças em outros arquivos.*



Se eu tenho esse `NegociacaoDoDia` espalhado na minha aplicação em um monte de lugar e alguém agora troca o parâmetro no Back End, basta eu fazer o *refactory* aqui da minha classe.

[06:11] Eu fiz o *refactory* da minha classe e mudou em todos os lugares, então essa tipagem estática do retorno de uma API, por mais que a API possa mudar, ela é ideal. Primeiro que torna o auto *complete*, você não deixa o desenvolvedor escrever algo que você não está esperando. Segundo que se você precisar fazer um *refactory*, eu dou dois cliques, *rename simbol* e escrevo `montante`.

[04:42] O Visual Studio Code e outras ideias como IntelliJ, Eclipse, ele vai alterar em todos os lugares. Você vem em “File > Save all”. Então esse é o nosso primeiro contato com interface e você vai ver que quando eu executo esse código, ele vai estar funcionando. Não tem problema nenhum. Clico em importar e tudo continua funcionando.

[07:09] Então esse tipar os retornos do Back End para um tipo conhecido isso é importante, até porque você documenta no Front End o que você está esperando do Back End, senão fica muito qualquer coisa. O tipo *any* nós vimos que não é legal. Beleza, galera?

[07:25] Isso pode ficar ainda melhor, eu vou mostrar isso no próximo vídeo.
