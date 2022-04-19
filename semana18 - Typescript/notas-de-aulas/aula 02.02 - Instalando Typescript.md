# 02Instalando o TypeScript

[00:00] Vimos no vídeo do último capítulo, porque estamos trazendo do TypeScript para cá, qual o tipo de problema que o TypeScript pode resolver para nós, mas antes de eu falar sobre TypeScript, começarmos a codificar utilizando a linguagem TypeScript, precisamos instalar ele na nossa máquina, mais propriamente dito o compilador TypeScript.

[00:23] Você pode pensar: "Flávio, compilador?". Segura um pouco, você vai entender, vamos só preparar a nossa infraestrutura para que eu possa avançar com vocês e vocês entenderem melhor essa relação de TypeScript, compilador e JavaScript.

[00:36] Primeira coisa que você vai para fazer: se certificar que o terminal que você está trabalhando está parado, você para ele, "Ctrl + C", e agora vamos instalar a última linguagem, a última versão da linguagem TypeScript na data de criação desse treinamento, que é a versão 4.2.2. Vamos lá.

[00:54] Eu vou fazer, como instalamos isso? Você vai escrever `npm install typescript@4.2.2`. Uma coisa importante é o seguinte: esse treinamento, claro, no futuro ele vai caducar, novas versões do TypeScript vão sair, mas utilize sempre a versão do estou utilizando aqui para que você não tenha nenhuma quebra de compatibilidade.

[01:21] E, após terminar o curso, nada te impede de você fazer o *upgrade* da linguagem TypeScript e poder correr atrás se algo mudou, se algum detalhe mudou. Vamos usar essa versão aqui.

[01:34] Eu vou colocar aqui `-- save-dev`. `npm install typescript@4.2.2 --save-dev`. Por quê? Porque essa é uma dependência do Node JS de desenvolvimento, não é algo que você vai levar para produção, por isso é `--save-dev`. Ao mesmo tempo, vou executar esse comando, eu vou deixar aberto o pack de JSON, que vamos ver que quando executar esse comando agora, olha, fiz esse comando.

[02:12] Ele vai adicionar o TypeScript como uma dependência minha de desenvolvimento. Atualmente temos o `lite-server` e o `concurrently`, que é da infraestrutura do projeto que eu trouxe pronto para vocês, que não vale a pena ficarmos focando agora, vamos focar no TypeScript.

[02:32] "Flávio, beleza, executei esse comando, ele está funcionando, estou maravilhado porque nenhum erro no console". Mas agora temos que começar a configurar, o TypeScript não fez Mãe de Diná para saber como você quer ele se comporte no seu projeto.

[02:48] Então precisamos criar um arquivo que vamos ver no próximo vídeo, que é o TS Config JSON, é esse arquivo que podemos fazer o *tweak*, pode melhorar, pode deixar o TypeScript mais rígido, mais frouxo, dependendo da necessidade do projeto, e é isso que vamos ver no próximo vídeo.


