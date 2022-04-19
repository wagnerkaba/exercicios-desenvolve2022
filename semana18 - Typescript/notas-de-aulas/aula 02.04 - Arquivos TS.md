# 04 Arquivos TS

[00:00] Temos o TypeScript instalado, precisamos configurar o compilador, mas antes de configurar o compilador eu quero fazer uma coisa com você. Por favor, vá até o arquivo "app.JS" e renomeie o arquivo para "app.ts", você vai na "negociação" vai renomear para "negociação.ts". Você tem dois aqui, um arquivo "negociação.ts" e "app.ts". "Flávio, o que é TS?", de TypeScript, esse não é o objetivo do nosso curso, escrever código no TypeScript?

[00:39] Porém, no "app.ts", eu já tenho um erro que o Visual Studio Code está mostrando para mim, um erro muito interessante, porque é o seguinte: como eu renomeei de JavaScript para TS, o Visual Studio Code já tem uma integração com TypeScript e já está verificando se o seu código está correto ou não mesmo antes do compilador do TypeScript está configurado.

[01:10] Olha que bacana, se você olhar para cá ele está dizendo que "negociação" espera três argumentos e você só passou um, ou seja, já tive uma indicação de erro aqui. Se eu escrevo `negociacao.quantidade = 10`, você vai ver que o Visual Studio Code integrado com o TypeScript já está me dizendo que não posso atribuir 10 a propriedade quantidade porque ela é somente leitura, é um `getter`.

[01:46] Você já começa a ter uma informação visual de que seu código não está legal em tempo de desenvolvimento. Mas vamos fazer o seguinte: se eu tentar carregar esse código no navegador não vai funcionar, porque o navegador não entende a linguagem TypeScript, ele nem sabe o que é esse raio de ".ts".

[02:07] Olha o que vamos fazer, muita calma nessa hora. Salve o seu arquivo se você ainda não salvou, deixa ele com erro, não se preocupa. Não estamos na pasta de "dist"? "Dist" é tudo que o navegador entende, é tudo JavaScript, então, em contrapartida, temos a pasta "app", e essa pasta "app" é a pasta que contém, que vai ter todos os nossos arquivos de TypeScript.

[02:37] Olha o que vou fazer: o "negociação.ts" eu vou jogar lá para dentro de "models", o "app.js" eu vou jogar direto para "app" movi. Faz isso com calma, sem pressa nenhuma, o importante é entendermos isso aqui de maneira sólida. Se eu olho agora a minha pasta "app", ela tem "models", "negociação", e na raiz de "app", ela tem "app.ts". Ficou claro?

[03:15] Agora lá na pasta "dist", olha o que você vai fazer, está vendo o arquivo dentro da pasta "dist", a pasta "model" está vazia, não tem mais o JS aqui, então o que acontece? Se eu abro o navegador agora, eu rodo o meu servidor, `npm run server`. Se eu abro ele, vou à aba network, ele não conseguiu encontrar o "app.js", porque ele não existe.

[03:55] Então, você pode perguntar: "Flávio, como você resolve isso?". O que eu quero mostrar para vocês é o seguinte: todo código de TypeScript que formos escrever, vamos escrever dentro da pasta "app". Certo? Quando nosso código estiver pronto, nós vamos transformar esse código TypeScript em código JavaScript, e os arquivos que são compiladas do arquivo TypeScript cairão automaticamente dentro da pasta "dist".

[04:32] Isso significa que vamos chegar um ponto que qualquer alteração que eu fizer nos meus arquivos em TypeScript automaticamente gerarão arquivos correspondentes na pasta "dist", porque, lembre-se: navegador não entende a linguagem TypeScript, ele entende JavaScript, então tem que haver uma tradução, tem que haver uma compilação. Ficou claro?

[04:55] E de bandeja o Visual Studio Code já está nos dizendo que o nosso código não está legal. Eu não vou corrigir ainda, eu vou partir agora para a parte de compilação, porque precisamos que esses arquivos sejam compilados e apareçam dentro da pasta "dist".

[05:13] Se você trabalha com Vue JS, já Angular JS, React, quem usa TypeScript, você vai ver que a estrutura é praticamente parecida, você tem uma pasta que você tem os arquivos de TypeScript, se você usa React ou TypeScript, por exemplo, e o resultado da compilação desses arquivos fica na pasta de distribuição.

[05:34] Agora que você entendeu essa dinâmica de força, vamos como configurar o compilador para que os arquivos em TypeScript apareçam na pasta "dist" como arquivos JavaScript, para que ele passe por esse processo de compilação e é esse processo de compilação que nos permite veja erros em tempo de desenvolvimento.

[05:55] Como se você tivesse trabalhando com a linguagem como Java, C#, porque o TypeScript é uma linguagem taticamente tipada, você tem que seguir regras, você tem tipos que você não pode ferir. Ficou claro? Vamos para o próximo vídeo configurar esse tal compilador e fazer essa coisa toda funcionar porque eu quero escrever código TypeScript.


