# 08 Populando o banco

[00:00] Vamos inserir alguns dados no banco para termos o que retornar na nossa API. Podemos fazer isso direto no terminal usando o SQL mesmo. Então vamos dar uma olhada para ver como ficaria direto no SQL. Vou diminuir um pouco.

[00:15] Então, podemos dar um `insert into`, “inserir em”, na nossa tabela “pessoas”. Entre parênteses, colocamos as colunas onde iremos inserir valores. Quais são as colunas aqui? Nome, ativo, e-mail e role. E não podemos esquecer as duas colunas criadas automaticamente pelo Sequelize. Acessando “migrations > create-pessoas.js”, vemos que são `createdAt` (criado em) e `updatedAt` (atualizado em). É para essas colunas que enviaremos valores.

[01:02] Os valores serão... Vou colocar aqui nome de uma aluna, Carla Gomes, ela está ativa e esse dado é um booleano. No MySQL, os booleanos são representados por 0 e 1, por dois inteiros, então 0 para *false* e 1 para *true*, então vamos dizer que está *true*, 1. O outro é o e-mail, que é uma *string*, carla@carla.com.

[01:31] O outro é o *role*, então vou dizer que ela é uma estudante. E o “created at” e o “updated at” mandamos o método *now*, agora, para criar com a data e o horário de agora, `mysql> insert into Pessoas (nome, ativo, email, role, createdAt, updatedAt) values (“Carla Gomes”, 1, “carla@carla.com”, “estudante”, NOW(), NOW());`.

[01:51] Então, criou e se dermos um *select all from* “Pessoas”, selecionar tudo de “Pessoas”, ele já inseriu a Carla no nosso banco como ID 1.

[02:04] Popular banco dessa forma é um pouco contraproducente, porque é normal, enquanto estamos nessa fase de desenvolvimento, termos que dropar, refazer tabela, dropar tabela, refazer banco, criar banco. Porque é normal, quando estamos desenvolvendo, inserir e destruir muitas coisas.

[02:24] Se populamos o banco assim, podemos precisar, de repente, deletar essa tabela, ou refazer. Se precisarmos popular tudo de novo, é muito demorado e trabalhoso. Então, usaremos um recurso que é do SQL: os arquivos *seeders*, sementes, e que também estão disponíveis no Sequelize para usarmos pelo sequelize-cli, pela linha de comando.

[02:47] Deixa eu vir no terminal onde estávamos. Colocando os nossos comandos do sequelize-cli, e vamos criar um arquivo de *seed* novo para inserirmos alguns dados na tabela “pessoas”. Então, `npx sequelize-cli seed:generate –name demo-pessoa`, ou seja, vamos criar um arquivo *seed*, de nome “demo-pessoa”.

[03:14] Veja que *name*se refere ao nome que estamos dando para o arquivo de *seed*, ele não tem a ver com o “nome” da tabela, que é o nome de uma das nossas colunas. Só para prestarmos atenção que o *name* se refere a outra coisa. Vamos dar um ok?

[03:35] Então... Ah, olha só o que eu fiz. Acabei saindo da pasta. Então estou em “Documents> alura”. Então deixa eu entrar aqui em orm-sequelize.

[03:57] Agora sim. Então o *folder* já existia e ele criou um novo *seed*, uma nova semente no caminho *seeders*. Criou também, igual ele cria com as migrações, um novo *seed* com a data de criação no nome do arquivo em “api> seeders> demo-pessoa”.

[04:14] Vamos dar uma olhada então. Ele cria todos os *seeds*, ao contrário das migrações que vão com as informações certas, o Sequelize cria todos os *seeds* com esse mesmo modelo. Essas mesmas linhas. Então, a primeira coisa que faremos é tirar as linhas que estão comentadas.

[04:30] O código começa em `return`. Então tiraremos as linhas que estão comentadas. E a mesma coisa no método *down*. O código começa com o `return`, então tiramos o resto. Beleza. O código, na verdade, para começarmos, é esse:

[04:59] O que está acontecendo nessas linhas é parecido com a migração: temos o *up* e o *down*. No *up*, o Sequelize vai chamar o método `bulkInsert` ou inserir em lote, traduzindo muito livremente. Em *down*, a mesma coisa: ele vai deletar em lote: `bulkDelete`. Ele deixou como exemplo uma tabela que chama *People*, por coincidência nossa tabela chama Pessoas, mas é só uma coincidência. E dentro, ele deu um exemplo de dados para inserirmos nessa tabela *People*. A pessoa tem um nome, informação booleana etc.

[05:32] Então iremos usar essa estrutura para popular com os nossos dados de exemplo. A primeira coisa a fazer é trocar a tabela *People* pela tabela Pessoas, que é o nome da nossa tabela.

[05:47] E então preencheremos com os nossos dados, que eu já deixei pronto para vocês. Da primeira vez, inserimos os dados na mão. Mas, com esse arquivo de *seeders*, só precisamos fazer isso uma vez. Eu deixei pronto para vocês nos arquivos base, junto do diretório, com os *seeds* prontos para vocês não precisarem ficar digitando, criando dados para popular tabela. Então, se vocês entrarem em “api> arquivos_base> seed-pessoas.js”, podemos por enquanto fazer só seed-pessoas porque, por enquanto, essa é a única tabela que criaremos.

[06:31] Um pouco mais para frente criaremos as outras. Então, estão vendo que já está pronto, `bulkInsert`, eu deixei tudo certo, `bulkDelete` Pessoas. E temos algumas pessoas fictícias, entre alunos e professores. Vejam que o arquivo está preenchido no `createdAt` e `updatedAt` com um novo objeto Data, do JavaScript, para passarmos essas informações para o banco.

[07:00] Você pode, se quiser, dar um “Ctrl + A” ou “Cmd + A” se você estiver no Mac, copiar essas informações do arquivo-base, e substituir na pasta “api> seeders> demo-pessoas”, certo? Tudo substituído no arquivo demo-pessoas, que é o que está dentro da nossa pasta *seeder*. Podemos, agora, rodar o comando de *seed* para aí sim o Sequelize conectar com o banco e enviar esses dados para ele.

[07:23] Então rodamos agora `npx sequelize-cli db:seed:all`. Só tem um *seed* para fazer, mas podemos passar o comando *all* mesmo porque é o único que ele vai fazer. Vamos ver o que nos diz?

[07:42] Beleza! Ele fez tudo direito, não deu erro nenhum. Podemos, então, voltar no nosso terminal do SQL, diminuir um pouco o zoom de novo, e dar um novo `select * all from Pessoas;` e ver se entrou.

[08:02] Nossa tabela Pessoas, deixa eu voltar. Nossa tabela Pessoas populada direito. Agora já temos dados para colocar na nossa API. Realmente já populamos nosso banco de dados com algumas informações para conseguirmos testar.
