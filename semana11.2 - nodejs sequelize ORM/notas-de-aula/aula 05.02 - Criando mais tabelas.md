# 02 Criando mais tabelas

[00:00] Voltando ao nosso diagrama, a tabela Pessoas já está criada. Inclusive, já fizemos o controlador de pessoas para fazer o CRUD relacionado a esse modelo.

![Diagrama Relacional](./Diagrama%20Relacional%20-%20escola%20de%20ingl%C3%AAs.jpg)

[00:10] Temos mais três tabelas e já sabemos como usar o Sequelize para criar essas tabelas, os arquivos de migração, etc. Fizemos isso usando `npx sequelize-cli`. Então vamos voltar no nosso terminal e começar a linha de código: `npx sequelize-cli model:create`. Vamos criar os modelos dos arquivos de migrações para essas outras três tabelas, para darmos continuidade ao projeto.

[00:45] Bom, `npx sequelize-cli model:create --name` é a linha de comando para o nome da próxima tabela que criaremos. Qual tabela crio em seguida? Tanto faz, posso escolher? Não exatamente. Vamos olhar a tabela Pessoas: ela tem PK, que é a chave primária,*primary key*, que é a ID, chave que usamos para identificar cada coluna e cada linha de pessoa, cada pessoa tem seu ID.

[01:11] Olhando o todo, as informações de Pessoas são utilizadas por outras duas tabelas: pela tabela Turma, através da linha docente_id, e a tabela Matrículas, através da coluna estudante_id. O mesmo ocorre com a tabela Nível, ela fornece informações para tabela Turma através da coluna nível_id.

[01:41] Então, como decidimos qual a ordem que fazemos a criação dos nossos modelos? Começamos criando os modelos por aqueles que não usam chaves estrangeiras, FK, *foreign keys*. Então, começamos por Pessoas e temos outra tabela que também não usa chaves estrangeiras, só tem a coluna ID e um atributo que é dela mesma, a descr_nivel, em que informaremos se o nível do curso é intermediário, básico, avançado, etc. Então, vamos começar por Nível.

[02:19] A partir de Nível, faremos as próximas. Voltando ao terminal, criaremos a tabela Nível. Chamarei de Niveis, já no plural. Deixei um material para vocês saberem mais sobre essa questão de singular e plural quando criamos. `--atributes`, com s, mesmo tendo apenas um.

[02:47] Quais são os atributos da nossa tabela? O ID de Nivel não precisamos colocar, já vimos quando criamos a tabela Pessoas, então só precisamos inserir o atributo `descr_nivel`, que vai ser um dado do tipo *string*.

[03:03] Então a linha de código fica: `npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string`. Pressiono a tecla Enter, um novo modelo foi criado e uma nova migração foi criada.

[03:15] Vamos voltar no diagrama. Qual é o próximo que crio? A tabela Turma utiliza dados da tabela Pessoas, que já existe. A tabela Nivel também já criamos, e Turma fornece também um dado para entrar na tabela Matrículas, através da coluna “turma_id”. Então vamos deixar para criar Matrículas por último e trabalhar com Turmas. Então vamos criar o modelo Turmas e o arquivo de migração Turmas: `npx sequelize-cli model:create -–name Turmas --attributes`.

[04:05] Ao criarmos o modelo, só colocamos atributos que são, digamos, naturais da tabela. Tanto docente_id quanto nível_id são chaves estrangeiras, não são dessa tabela mesmo. O único dado que realmente pertence à tabela Turmas, não é um dado importado, digamos assim, de outras tabelas, é o atributo que chamamos de data_inicio, e o tipo de dado é somente data. Então, vamos criar somente com o atributo data_inicio:

[04:37] `npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly`. Se colocássemos só *date*, o Sequelize pediria que inseríssemos data e horário. Porém, como é data de início, não precisamos do horário, só da data. Então, usamos o tipo de dado dateonly. Apertamos a tecla “Enter”.

[Aula5_video1_imagem4]

[04:55] Novo modelo foi criado, nova migração foi criada, prefeito. Vamos agora fazer. Deixa eu limpar minha tela. Fazer a nossa última tabela, que agora que temos todas as outras, podemos criar a tabela Matrículas. Nela, o único atributo que é natural dela, que é dela mesmo, é *status*, do tipo *string*. Então vamos lá.

[05:17] `npx sequelize-cli model:create --name Matriculas --attributes status:string`. Opa, escrevi npz ao invés de npx. Vamos voltar com a setinha para cima. Criou novo modelo e nova migração.

[05:50] Vamos voltar no nosso código no editor de código e ver se está tudo certo. Abrimos a árore e na pasta “api > models”, ele criou um novo arquivo chamado níveis.js com o atributo que pedimos, e a mesma coisa para tabela Turmas, turmas.js, e para a tabela Matrículas, matriculas.js, o atributo e matrículas. Beleza. Na pasta de migrações “api > migrations” foram criados mais três arquivos com as informações que solicitamos.

[06:22] Lembra que quando criou o arquivo de migração “pessoas”, o Sequelize colocou um número no começo que corresponde à data e horário? Isso tem uma razão de ser, quando o Sequelize rodar as migrações, que não faremos agora, ele vai rodar todas as migrações que estão na pasta na ordem que criamos, por isso que seguimos também essa ordem de criar. Deixa eu voltar, tirar o zoom. Meu zoom não quer sair. Pronto.

[06:40] Por isso que seguimos a ordem de criação, porque se eu tento rodar uma migração no arquivo Turmas e o Sequelize não encontra Pessoas, não existe ainda essa migração feita, ele vai ficar confuso, porque vamos dizer para ele que tem uma chave estrangeira e ele não vai encontrar a tabela, não vai encontrar o modelo. Por isso que quando rodamos as migrações é importante seguir essa ordem, porque ele vai criar primeiro migrações de Níveis e quando ele criar de Turmas, Níveis e Pessoas já existem no banco, então ele não vai ficar perdido.

[07:24] A mesma coisa para Matrículas. Então, antes de rodarmos a migração, passaremos para o Sequelize quais são as chaves estrangeiras que cada tabela usa, e vamos fazer isso agora.
