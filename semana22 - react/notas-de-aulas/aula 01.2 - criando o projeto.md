# tl;dr

## [Get started in seconds](https://create-react-app.dev/)

Whether you’re using React or another library, Create React App lets you **focus on code, not build tools**.  

To create a project called *my-app*, run this command:

```
npx create-react-app my-app
```





# 02 Criando o projeto

[00:00] E aí? Tudo bom? Vamos começar nosso curso de react. Vamos falar dessa biblioteca criada para visualização e criação de interfaces de usuário, muito famosa, de frontend. A primeira coisa que a gente precisa fazer é criar o projeto em react. Para fazer isso vamos usar um pacote do npm chamado create react app.

[00:22] Se você já conhece, o npm é um gerenciador de pacotes do node, ele tem aberta a aba dele, npm node package manager, gerenciador de pacotes que vem com o node js, você já deve ter ouvido falar. Se já fez nossos cursos de JavaScript, introdução à linguagem, a gente usa o node como interpretador e até um pouco do npm, mas bem pouco até o momento.

[00:48] A gente vai precisar desse create react app. A gente vai iniciar a aplicação executando esse comando, quero dar o npx create react act. Mas mesmo que você conheça o npm talvez você nunca tenha visto o npx. Qual a diferença? O npm é o gerenciador de pacotes, é o repositório onde a gente guarda e compartilha pacotes de JavaScript que a gente quer compartilhar entre vários projetos, desenvolvedores, e assim por diante.

[01:20] O npx é o executador de pacotes. Ao invés de baixar o pacote e instalar globalmente na máquina, posso só falar que não quero instalar o pacote porque só vou usar ele uma vez, de vez em quando, e não quero que fique dentro da minha máquina. Nesse caso, vou usar o npx, que vai buscar o pacote no npm, no repositório, vai baixar as dependências que precisa e executar, depois ele limpa e fica só com o resultado final, que no nosso caso vai ser a pasta com o projeto inicial do react criado.

[01:55] Mas se você não conhece, nunca ouviu falar, provavelmente você não tem o node instalado. Preciso instalar o node js, é um adendo que vem junto com o node js. A minha recomendação e a versão que a gente vai usar é a lts. A long term support. Uma versão mais estável do node, ao invés da versão corrente, que é a 14, a gente não vai usar ela porque é mais instável, está sendo desenvolvida, tem novas features, coisas interessantes, mas para o desenvolvimento do projeto vou usar a mais estável, que tem um suporte até final de 2021, começo de 2022, que é a 12.17.

[02:48] Para instalar ela você pode instalar via o instalador do Windows, no meu caso, ou o binário, ou a maneira que você quiser instalar diretamente dos downloads do node, ou você pode instalar através do nvm. A gente tem o nove version manager, que é um outro pacote que a gente usa, que a gente instala no Windows, Linux, Mac, que vai gerenciar as versões do node que eu tenho, porque às vezes você está trabalhando em diferentes projetos e tem uma versão do node específica. Esse cara ajuda a instalar a versão específica que a gente quer.

[03:30] Se você quiser instalar ele, você pode vir aqui embaixo, via wget ou via chocolatey, que é um gerenciador de pacotes do Windows. Há uma série de termos aqui que estão aparecendo, mas se você quer a instalação mais simples, vem no node, baixa o instalador dele, instala, e você está bem. Só precisa garantir que você está na versão que você quis baixar, que é a 12.

[04:00] Vou abrir meu visual studio code, o meu terminal, vamos aumentar a tela, fechar o menu lateral, e aumentando a tela vou dar um nvm, que já estou com ele instalado, vem com uma série de comandos que posso usar, inclusive o nvm install, quero usar para a versão 12.17.0. Vou digitar nvm install 12.17 e ele vai começar a baixar para você a versão do node e instalar. No meu caso já tenho instalado, então ele só verifica, e posso usar.

[04:48] Para confirmar isso, vou dar um node version e vemos que está na versão 12.17. Esse comando é para verificar a versão do node que você está usando. Se você por acaso não estiver nessa versão, seja anterior ou mais atual, no meu caso tenho outras versões instaladas. Tenho a 10, a 13, outra versão da 12. Se eu quiser trocar de versão ou nvm e use, por exemplo, versão 13.17. Ele vai me pedir autorização. Se eu limpar a tela e der node version mudamos para a 13.17. Não é o caso, quero a 12.17. Ele vai pedir para trocar de novo, pedir autorização. Se eu verificar a versão estou na versão 12.

[06:02] Dado que tenho o node instalado, e como falei você pode baixar diretamente do site a versão que você quer ou usar o nvm, que é um pacote super útil para quem trabalha com várias versões, a partir desse momento, uma vez que tenho instalado, já estou na pasta, uma vantagem de abrir o terminal pelo visual studio code, mas não quero criar o projeto dentro dessa pasta. Quero criar na pasta anterior.

[06:35] Vou navegar para a pasta anterior, vamos limpar, quero dar um npx, vou executar um pacote que está no meu npm, que se chama create react app. Vamos criar um aplicativo do react com esse create react app chamado ceep, o gerenciador de notas que a gente vai criar.

[07:07] A partir deste momento dei o enter e ele vai começar a extrair, pegar o pacote, baixar na minha máquina e fazer toda a execução, criar a pasta do projeto, ele já terminou aqui porque eu tinha rodado o comando antes, ele já criou super rápido, para você pode ser que demore mais porque vai ter que baixar dependências. Uma vez que ele criou tenho uma pasta com a estrutura de pastas.

[07:40] Se eu vier na lateral e abrir minha pasta atual, vou pedir para atualizar, tem a pasta ceep com toda a estrutura de pastas com a aplicação do react. Dentro do projeto atual ele criou uma nova pasta com o nome do projeto que criei, e dentro dele tem a pasta public, source, package JSON, e uma série de coisas. É onde vamos ter o código fonte, onde teremos todos os arquivos que são os assets do site, da aplicação do react.

[08:16] Por padrão, se você já mexeu com JavaScript, você vai saber que a index js é geralmente o ponto de entrada da nossa aplicação. E no caso, se você olhar a index js ela parece estranha, não tem cara de JavaScript. Vamos entender durante o curso como isso funciona, mas o que a gente pode ver é que temos o react dom, que é separada, inclusive a gente vê o react e o react dom, são duas coisas diferentes. Ele está pedindo para desenhar na tela algumas coisas.

[08:52] Tenho primeiro falando para usar o strict mode, é a boa prática de sempre usar strict mode, e ele está pedindo para desenhar o componente que a gente criou aqui, que é nosso app. Ele está sendo importado através desse arquivo, tem um módulo e está através do source app. É o arquivo app js. Ele é onde a gente pode começar e vamos manipular para fazer nossa aplicação.

[09:20] No react o ponto de entrada não é a index js por padrão. É o ponto de entrada, mas não é nela que a gente costuma mexer, costumamos mexer na app js, é nela, nesse arquivo que a gente vai começar a mudar e fazer a aplicação rodar.

[09:33] Você pode ver que ele já vem com algumas coisas, uma div, um header, um p, algumas tags do html, que você já reconhece ou pode reconhecer. Vamos ver como isso está no nosso navegador, já que ele já veio com alguma coisa preenchida.

[09:44] Para ver no navegador vou dar "Ctrl + J", abrir meu terminal, fechar a aba lateral. Estou na pasta do projeto atual, quero navegar até a pasta ceep, vou dar um cd ceep, vamos limpar o terminal para subir o texto, e vou dar npm start. Quero começar dentro do npm, temos alguns scripts e quero rodar o script de start da aplicação. Vou dar um enter, ele vai começar a subir a aplicação, já automaticamente puxou para o navegador e começou a aplicação.

[10:32] Está rodando no local host 3000 e tenho o react, falando para editar o arquivo para você ver as alterações em tempo real. Se eu fechar o terminal, ele já está rodando, vou apagar o p e salvar, vou ter meu navegador e já deu o reload, não preciso ficar me preocupando em dar reload o tempo todo, ele vai fazer isso automaticamente. Já vem com o hot reload para a gente.

[11:03] Nossa aplicação está criada e a partir de agora vamos começar de fato a moldar ela e deixar da maneira como gostaríamos, criando o gerenciador de notas.


