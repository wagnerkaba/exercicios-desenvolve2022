# 07 Populando tabelas

[00:00] Resumindo então, de forma bem rápida, o que fizemos até agora, nós temos essas quatro tabelas em nosso diagrama, e a tabela Pessoas já foi, digamos assim, acondicionada no modelo MVC. Criamos uma estrutura de projetos de acordo com o padrão MVC usando as ferramentas do Sequelize, e para a tabela Pessoas já foram criados tanto os modelos dos arquivos de migração, já criamos para tudo, mas o controlador e a rota. Cadê minhas rotas?

[00:29] “api> routes” é onde estão as rotas que vão fazer com que a nossa API disponibilize os dados através de uma requisição HTTP. O controlador que usamos para fazer o CRUD, os métodos de CRUD, criar, encontrar, trazer todas as pessoas, só foi feito até agora para a tabela pessoas.

[00:54] Se viermos no Postman e clicarmos no botão azul “Send” ao lado de http://localhost.3000/pessoas, teremos as informações.

[01:01] Então agora temos que fazer esse processo de criar controladores e rotas para o restante da nossa aplicação, para os níveis, turmas, para, no final, termos informações que façam sentido. Para que possamos pegar todas as pessoas que estão matriculadas em um curso, quais matrículas estão relacionadas a uma pessoa, etc.

[01:24] Então, vamos fazer isso, mas antes vamos popular o restante das tabelas porque, por enquanto, no nosso banco, se viermos no MySQL, só temos a tabela Pessoas populada.

[01:36] Já sabemos como popular tabelas utilizando, deixa eu fechar aqui, utilizando os arquivos de *seed*, criamos um *seed* de pessoas em “api> seeders”, e agora podemos fazer para o restante das tabelas. Eu deixei pronto para vocês esses arquivos-base com os outros *seeds*, para não perdermos tempo escrevendo dados de teste, etc.

[01:59] Vamos então criar, no terminal, com aquele mesmo comando do Sequelize, deixa eu voltar aqui no terminal onde estamos dando os comandos, sabemos qual é o comando porque usamos para fazer o *seed* de pessoas. Então, vamos lá: `npx sequelize-cli seed:generate --name demo-nivel`. Lembrando que sempre temos que criar esses *seeds* em ordem, porque eles vão rodar em ordem. Então, vamos criar apertando a tecla Enter.

[02:43] Ele criou, aqui diz que o *folder*, que o diretório de *seed* já existe e uma nova *seed* foi criada, beleza. Está com a data de criação. Já podemos fazer os próximos, então. Temos demo-nivel, demo-turmas: `npx sequelize-cli seed:generate --name demo-turmas` e, por último, demo-matriculas: `npx sequelize-cli seed:generate --name demo-matriculas`. É só voltar o comando com a seta para cima e trocar o nome.

[03:06] Por que podemos fazer isso? Porque o Sequelize, quando cria os arquivos de *seed*, cria sempre com o mesmo texto dentro. Opa, esses são meus arquivos-base, agora temos que vir na pasta de *seeders* onde ele criou: “arquivos_base> seed-niveis.js”.

[03:19] O verde é onde ele criou os três arquivos novos. E ele cria sempre esses arquivos de *seed* com o mesmo texto. Então não temos como passar parâmetros como passamos quando criamos modelos no sequelize-cli. Então agora podemos usar os arquivos-base que temos: seed-matricula, seed-niveis, etc. Para dar um “Ctrl + C” e “Ctrl + V” mesmo. Podemos selecionar tudo com "Ctrl + A".

[03:46] “arquivos_base> seed-niveis.js” é o meu modelo de *seed-niveis*. Eu venho no arquivo que criei “api> seeders> demo-nivel.js”, dou um “Cmd + A” para tirar tudo e substituo, tranquilo. Fazemos a mesma com seed-turmas, copia tudo e passa para demo-turmas, e a mesma coisa para seed-matriculas, eu venho no modelo de seed-matriculas e substituo uma pela outra em demo-matriculas. Deixa eu fechar um pouco para vermos o que foi criado.

[04:24] Já tinha deixado algumas informações feitas, mas o que é importante? Por que rodamos ao invés de só copiar e colar? Eu achei mais fácil rodar o comando porque ele já fornece a data, ou seja, para deixarmos muito claro para o Sequelize que ele tem que rodar as coisas em ordem. Por que roda Níveis primeiro? Porque Turmas e Matrículas, se olharmos no nosso diagrama, eles usam informações de Níveis e Pessoas.

[04:51] Então não consigo rodar, não consigo popular nem Turmas, nem Matrículas se não existirem Pessoas no banco e não existirem Níveis no banco. E como isso vai funcionar? Se vemos “api> seeders> demo-matriculas.js”, Matrículas está usando `estudante_id: 1`. Esse 1 fui eu que passei. Esse 1, se viermos no Postman, é o 1 de um id que já existe no banco.

[05:14] Então isso é muito importante, porque se você tiver feito alterações no seu banco enquanto você estiver brincando. Inclusive, super estimulo, brinquem, deletem coisas, incluam coisas no banco. Porém, se você deletar o `id: 1` do seu banco no seu projeto, esse `estudante_id: 1,` não será encontrado e vai dar erro quando você tentar rodar o *seed*. Então sempre prestar atenção. Tanto na tabela de matrículas quanto na tabela de Turmas, porque a tabela de Turmas usa o id de docente.

[05:46] Então, se 6 não existir no banco, vamos olhar no Postman se 6 existe. Aqui o 6 existe com *role* de docente. Então eu deixei a informação aqui e está batendo com o meu banco.

[05:58] Porém, se eu mesma tivesse deletado coisas e recriado coisas, eu teria que alterar em “api> seeders” para os dados no banco fazerem sentido, porque isso vai ser checado na hora que rodar o *seeds*. Então, faremos isso agora e quando criarmos os *seeds*, vamos ao banco e vemos se está tudo certo, vemos se foi tudo criado do jeito que passamos para o Sequelize.

[06:20] Então, vamos lá: `npx sequelize-cli db:seed:all`. Então, vou seedar tudo que está no banco. Vamos lá.

[06:40] Ok, demo-pessoa migrou, demo-nivel migrou, demo-matriculas. Vamos então voltar no terminal do MySQL, vou apagar isso aqui e dar um `select * from Turmas;`, por exemplo.

[06:56] Ok. Entraram as informações, com os números dos docentes que passamos, os números de níveis que passamos. Ou seja, tanto a tabela Nível quanto a tabela Pessoas estão ok no banco, porque senão isso não teria sido feito, o Sequelize teria lançado um erro de terminal. Então podemos também verificar Matriculas: `select * from Matriculas`. Como é que montou, se montou certo.

[07:17] Montou certo tanto com os IDs de estudantes quanto com os IDs de turma, ou seja, nossas quatro tabelas estão relacionadas corretamente, senão isso não teria acontecido. Então o que resta para fazermos, por enquanto, é a parte de criar os controladores e as rotas das outras tabelas para podermos fazer a nossa API no Postman soltar as informações que queremos. Então, vamos fazer isso em seguida.
