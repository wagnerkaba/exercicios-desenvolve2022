# 08 Automatizando a compilação de arquivos

[00:00] Vamos deixar nosso ambiente mais profissional, em que sentido? No sentido de toda vez que eu alterar, bulinar, modificar, mexer nos meus arquivos "ts" que automaticamente o compilador do TypeScript escuta que eu mexi no arquivo e gere o processo de compilação sempre garantindo que a pasta "dist" vai estar atualizada após salvar qualquer arquivo "ts". Como fazemos isso?

[00:25] Primeiro você vai voltar para o seu terminal, vou parar aqui o meu servidor, vamos lá para o "package.json", existe uma série de *scripts* aqui, temos um *script* `compile`. Eu vou criar aqui um *script* que eu vou chamar de `watch`, podia ser `calopsita`, `tico tico`, mas eu vou chamar de `watch`, que é de observar, de ver.

[00:48] Ele vai chamar o compilador TypeScript com parâmetro `-w`, esse parâmetro `-w` você já deve imaginar que "w", "wacth", é para o compilador TypeScript ficar monitorando os arquivos.

```
"watch": "tsc -w"
```



[01:04] Deixa eu salvar aqui. Recomendo ficar monitorando os arquivos das pastas que você adicionar dentro do `include`, será que isso vai funcionar? Vou chegar aqui no meu terminal, `npm run watch`. Quando eu executo esse comando, você vai ver que "Starting compilation in watch mode", ele primeiro dá uma compilada em tudo e depois ele fica olhando se algum arquivo mexeu para que você possa ver na sua aplicação.

[01:39] Se eu chegar agora aqui no "app", eu vou colocar aqui um `alert('oi')`, vou salvar, fica olhando, salvei, quando eu salvo ele falou que detectou uma mudança e que fez uma compilação incremental. Se eu olho lá agora para pasta "dist > app", o `alert` estar lá.

[02:02] Vou para dentro de "app.ts", apaguei, salvei, quando eu volto para "app.js", olha lá, o `alert` não está mais lá. Isso prova que o processo de compilação está acontecendo o tempo todo. Temos um problema aqui, qual é o problema? Nós queremos que esse processo de compilação rode o tempo todo, mas eu também quero rodar o meu servidor web, por que qual é a sacada?

[02:29] A sacada é que toda vez que eu alterar a minha pasta "app", a pasta "dist" vai ser modificada, o meu servidor web, que eu expliquei para vocês no início do curso que ele fica escutando quaisquer mudanças na pasta "dist", vai fazer o *refresh* no navegador.

[02:48] Eu quero que isso aconteça, eu quero modificar um arquivo "ts", ele vai gerar o arquivo na pasta "dist", quando o meu servidor, o Live Server está disputando qualquer modificação na pasta "dist" ele automaticamente vai fazer o *refresh* no *browser*.

[03:02] Olha maravilha, se alterou o arquivo "ts", esquece, o navegador vai fazer o *refresh* e você vai ter sempre o resultado final da compilação do arquivo TypeScript lá. Para fazer isso, eu preciso fazer o compilador TypeScript e o servidor rodarem ao mesmo tempo. Como eu faço isso?

[03:22] Se você olhar aqui no "package.json" já tem adicionado aqui esse *script* aqui `start`, que usa esse módulo que já veio com o nosso projeto que permite que o node execute dois *script*s em paralelo. Se você olhar aqui, ele vai executar o `npm run watch` e o `npm run server`.

```
"start": "concurrently \"npm run watch\" \"npm run server\""

```



[03:45] Vamos vê-lo em ação? Vou chegar no terminal. Feche o seu navegador para que ele abra de novo, para fazer todo o processo, ficamos mais impressionados ainda. `npm run start`, é ele que vamos usar até o final do curso. Fiz isso, ele vai executar o compilador TypeScript e meu servidor aqui abriu.

[04:10] Você vê que ele fez duas vezes o *refresh*, porque ele abriu a primeira vez e depois o TypeScript gerou os arquivos, ele detectou e fez o *refresh. Vamos fazer um teste?

[04:20] Vou chegar agora, vou diminuir essa tela, eu só acredito vendo. Vou chegar lá no "app.ts". Cuidado, fecha todos os arquivos aqui, "js", só deixa aberto o arquivo "ts" porque já aconteceu, pode acontecer com vocês, se vocês forem fazer uma alteração no arquivo "ts", mas estão alterando o arquivo "js". Esquece o "js", o "js" é resultado.

[04:52] Você vai no arquivo "app", olha o que eu vou fazer aqui, `alert('oi')`, quando eu salvar, o TypeScript vai compilá-lo, jogar na pasta "dist", o meu *browser*, usando Live Server, vai detectar e fazer *refresh*. Salvei.

[05:10] Nós conseguimos configurar um ambiente, se você não tem experiência com Angular, React, com Vue JS, conseguimos conseguiu um ambiente bem parecido com o que eles têm dentro da ferramenta de *command line* deles. Só precisamos relaxar agora e escrever código TypeScript e focar no TypeScript.

[05:47] Com isso, conseguimos chegar aonde que eu queria para dominarmos essa questão do compilador do TypeScript e entendermos ao longo do curso, recursos da linguagem TypeScript.

[05:56] O que é fantástico aqui, já posso mostrar também para dar um gosto, é: se eu escrever "negociação" errado, no Java*script* isso ia passar batido, salvei, erro, ele me diz aqui, se você segura o "Ctrl" e clica aqui ele vai para linha direta onde está o erro.

[06:22] Outra coisa: se você escrever o volume errado, escreveu `volum`, ele está dizendo, "não existe", não existe na definição da classe, tem um erro, e por aí vai.

[06:35] E outra coisa: vamos esclarecer no próximo vídeo por que o nome é TypeScript? A ideia de tipos é muito importante na linguagem TypeScript, vamos entender um pouco no próximo vídeo antes de continuarmos com o projeto, que esse projeto vai se dividir em vários cursos e em cada curso desse vamos dando saltos na linguagem TypeScript.

[07:00] Vamos lá ver essa ideia de tipos e ver como nos beneficiamos disso no próximo vídeo.
