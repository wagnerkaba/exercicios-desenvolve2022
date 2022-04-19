# 07 Aprimorando a configuração

[00:00] Nessa parte, entenderemos como as coisas se encaixam, uma delas, que já expliquei para vocês, é que tudo que está dentro de "app" vai ser compilado de arquivo "ts" para arquivo "js".

[00:20] E ele vai respeitar a mesma estrutura de árvore, tanto isso é verdade que você vai chegar em "dist" agora, vai apagar a pasta "js", vou executar o compilador de novo, ele vai executar e ele vai gerar a pasta "js > models > app" usando a mesma estrutura de pastas que eu tenho aqui. Se "app" está dentro de "app", meu "app" vai ficar dentro de "js". Se meu "negociação" está dentro de "models" vai ficar dentro de "models".

[00:58] Vimos que o nosso código TypeScript ainda está com problema, significa que rodarmos o nosso servidor, eu parei o compilador, `npm run server`, se o rodar no meu servidor e carregar a aplicação o código JavaScript que foi gerado lá a partir do meu TypeScript está ferrado, porque o meu TypeScript não está passando, não está compilando, se ele não está compilando não faz sentido gerar um JavaScript a partir de um arquivo TypeScript bichado, com problema.

[01:30] Eu tenho que corrigir isso. Eu também não quero que ele gere arquivos "js" em um enquanto houver problema no meu código.

[01:38] O que vamos fazer? Eu vou parar aqui o meu servidor, vou de novo na pasta "dist > js". Cola em sua cabeça que passa "dist" de "js" até o final do curso, você pode apagar e deletar quantas vezes você quiser, só ela. Apaguei a pasta "dist". O que eu vou fazer agora?

**[01:57] Vou lá no meu "tsconfig.json" e vou adicionar mais uma configuração, dentro de `compilerOptions`, que é `noEmitOnError": true`.**

**[02:12] Isso significa que ele não vai gerar um arquivo "js" enquanto seu TypeScript não estiver passando na compilação, isso evita que você gere um arquivo "js" com problema. Vou salvar, salvei. Vou à pasta "js", deletada, executar de novo. Executarei o meu compilador, `npn run compile`, ele executou.**

[02:47] Olha só, falhou, você está vendo pasta "js" aqui? Não, e eu nem quero, eu só quero que gere "js" quando eu tiver certeza que meu arquivo TypeScript está passando. Vamos lá fazer ele passar. Vou clicar aqui em "app.ts", ele não está passando porque o TypeScript é inteligente, ele sabe que essa negociação precisa receber três parâmetros no construtor e você, desenvolvedor, não passou os que estão faltando.

[03:14] Vou dizer que ele está recebendo a data, passar uma quantidade "10", e o valor "100", você ver que instantaneamente o Visual Studio Code diga que o seu código passou na compilação.

[03:28] Vou salvar. Agora, no meu terminal, vou executar o `compile`. Vamos lá que eu quero ser feliz, TypeScript Compile executo, nenhum erro aqui e quando eu olho ele gerou o arquivo "app.js", que está imprimindo o volume da minha negociação, e dentro de "model" ele gerou esse arquivo verborrágico.

[03:56] Cheio de coisas que não escrevemos, mas que é a transformação do nosso arquivo TypeScript usando o que há de mais moderno na linguagem TypeScript e JavaScript, para torná-lo compatível com uma versão antiga do JavaScript.

[04:11] A pergunta que eu faço é a seguinte: se você vai resolver algum problema no seu código e você vai olhar o arquivo "js" ou "ts"? Você vai olhar o arquivo "ts", porque ele é o código-fonte, o "js" é gerado a partir dele, se você tem que fazer uma correção é no arquivo "ts".

[04:26] Será que está funcionando? Vou voltar lá para o meu navegador, `npm run server`, vou rodar, abriu, vou olhar o meu "console.log" e estar lá bonito, imprimiu o meu volume, está tudo funcionando. Vemos que o navegador que está carregando são meus arquivos "js".

[04:49] O que tem que estar na nossa cabeça é que arquivo TypeScript fica em um lugar, qualquer alteração que eu vou fazer no meu projeto eu faço nos arquivos "ts", e no final eu compilo e jogo para dentro da pasta "dist" ou qualquer pasta da sua escolha, que é essa parte de distribuição que vai ser acessada pelo navegador.

[05:15] Entre nós, fica chamando esse compilador toda hora que ficarmos alterando um arquivo no projeto não é muito legal e vamos automatizar isso no próximo vídeo.
