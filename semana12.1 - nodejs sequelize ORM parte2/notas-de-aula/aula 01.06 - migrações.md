# 06 Mais colunas com migrações

[00:00] Vamos precisar adicionar uma coluna em cada uma das nossas tabelas do banco, mas de que forma podemos fazer isso? Dava para fazer direto no terminal do MYSQL com um comando que é para adicionar coluna mesmo, `add column`. Vamos com `alter table Pessoas`, para alterar a coluna pessoas, e em seguida passamos o comando add column para adicionar coluna. Quero que o nome dessa coluna seja `deletedAt`, é uma coluna com dado do tipo `datetime`, e quero que entre depois de `updatedAt`.

[00:46] É um comando curto, dava para rodar ele aqui mesmo, mas se formos pensar, quando criamos as tabelas no banco não criamos por aqui. Criamos utilizando as migrações. Criamos arquivos para criar cada uma das nossas tabelas e rodamos no terminal um comando de migração.

[01:06] Um dos motivos para fazer alterações no banco dessa forma, utilizando migração, é que ela fica na documentação de tudo que foi criado e alterado no banco, não só aqui, mas também fica guardada no banco. Vou quebrar o que fiz para não correr o risco de rodar isso sem querer e criar uma coluna no banco.

[01:25] Se viermos no terminal do MYSQL e der um `show tables`, mostrar as tabelas, a tabela `sequelizeMeta` é a tabela que está monitorando todas as alterações do banco. Se fazemos qualquer alteração que possa vir a quebrar alguma parte da aplicação, o que pode acontecer, conseguimos rodar outro comando e desfazer a alteração que foi feita no banco através da migração.

[01:55] Se viermos no código e abrirmos o código do arquivo de migração que usamos para criar a tabela pessoas, ela tem `up`, que é o comando que é rodado quando mandamos criar uma migração. E se precisarmos desfazer o que foi feito, tem o `down` que roda um outro método.

[02:15] No up ele usa o método `create table` e vai criar uma tabela com os parâmetros que passarmos. No caso aqui estou passando o primeiro parâmetro o nome da tabela e em seguida um objeto com os atributos dela. E se precisar desfazer, o método que vai ser rodado é o `drop table` que vai dropar a tabela pessoas para nós.

[02:35] Se víssemos no banco e rodássemos esse comando, ele iria criar, mas não iria ficar o registro, não ia conseguir desfazer também se fosse necessário com a facilidade que desfazemos se usarmos migração.

[02:50] Como usamos as migrações para ao invés de criar uma tabela criarmos uma coluna nova, por exemplo? Vou usar como base nosso arquivo `create pessoas`, que criamos anteriormente, porque o código vai ser parecido. Onde vamos trocar os métodos, não vai ser mais `create table`, mas vamos criar primeiro um arquivo novo na pasta de migração, o nome desse arquivo vai ser a data de hoje, não precisa ser exatamente a data de hoje, só precisa ser uma data posterior às migrações anteriores, e em seguida vou dar um nome, que vai ser `addcolumn-pessoas.js`.

[03:35] Vou colar o código que usamos para criar a tabela pessoas. O código é parecido, só que ao invés de `create table`, vamos usar um outro método que chama `add column`. O `add column` vai usar parâmetros um pouco diferentes. O primeiro vai ser uma string com o nome da tabela, que continua sendo `pessoas`. O segundo vai ser outra string com o nome da coluna que queremos criar, queremos criar uma coluna chamada `deletedAt`, e o terceiro parâmetro vai ser um objeto onde vamos passar as propriedades dessa coluna.

[04:15] Vou apagar o restante do código que não precisamos mais. Vou arrumar minha endentação. Quais propriedades vamos precisar na coluna `deletedAt`? A primeira é o tipo de dado, que vai ser date, sequelize.date, que no MYSQL ele vai converter para datetime.

[04:37] Outro que vamos precisar é o `allowNull`, de permite ser nulo. Quando não queremos que um campo nunca seja nulo, por exemplo, em um id, ele não pode ser nunca nulo, deixamos como false, mas aqui vamos deixar como true. Sim, ele pode ser nulo e vamos ver daqui a pouco por que isso é importante.

[04:58] Para desfazer se for necessário a migração, o método que vamos usar vai ser o `removeColumn`. E os parâmetros que passamos são o nome da tabela, tabela `pessoas`, e o nome da coluna que vamos remover, que é a coluna `deletedAt` se precisarmos desfazer a migração.

[05:16] Agora podemos replicar esse código para criar colunas também nas nossas outras tabelas através dos modelos. Podemos copiar e colar esse arquivo `addColumn` e só renomear ele com o nome das outras tabelas. Vou fazer isso também em níveis, troco o nome do arquivo e aqui dentro troco de onde nos parâmetros está pessoas para níveis. O resto permanece como está, porque o nome da coluna vai ser o mesmo.

[05:55] Vamos fazer a mesma coisa com a tabela turmas, e aqui dentro do arquivo também temos que passar turmas, ao invés de pessoas. E por último matrículas, que é a última tabela do nosso banco. Então, matrículas, `addColumn`, e onde está pessoas, matrículas.

[06:26] Agora já podemos vir no terminal e rodar o comando de migração. Comando `npx sequelize-cli db:migrate`. Vamos ver se vai rodar. Rodou tudo. O `sequelize` só faz as migrações que ainda não foram feitas, então não precisamos nos preocupar em passar nenhuma opção, ele vê automaticamente quais foram feitas e quais não foram.

[06:56] O que vamos fazer agora é voltar no terminal do MYSQL e ver se realmente ele criou a coluna. Podemos fazer isso dando um describe pessoas, por exemplo, e aqui ele criou a coluna `deletedAt` com o tipo de dado `datetime`, e sim, pode ser nulo. É só testar agora.

[07:20] Vamos testar no Postman. Vou vir em pessoas. Dar um `get()` em todas as pessoas, e vamos de repente usar o `delete` e passar um `delete` no id de pessoas 1. Vamos ver se ele deleta. Deletou, deu a mensagem id 1 deletado, que é o que já tínhamos deixado pronto o CRUD básico no curso anterior, mas vamos voltar no terminal onde estou rodando o `nodemon` e vamos ver qual foi a query que o Sequelize executou.

[07:55] Continuamos usando métodos `destroy` para deletar, mas como estava exatamente da forma que estava na documentação, ele agora faz um update e dá um set na coluna `deletedAt`. Foi exatamente como está na documentação. Se voltarmos no terminal do MYSQL e der um `select all from pessoas`, vamos ver agora o primeiro registro, de id 1, na coluna `deletedAt` ele tem uma data ao invés de nulo.

[08:40] Como sabemos que funcionou ou não no Postman? Vamos no get, na rota de pessoas, id 1 não aparece mais, é como se ele tivesse sido deletado. E se voltarmos no terminal onde estamos rodando o `nodemon` para ver qual é a query que foi executada, o `where()`, o onde, só está agora trazendo no `getAll` registros onde pessoas `deletedAt`, a coluna `deletedAt` de pessoas, é nulo, por isso que tínhamos nas propriedades que manter o nulo como `true`. Por definição, tudo que está deletado está na coluna `deletedAt` como `null`, e o que estiver deletado o `sequelize` vai mandar uma query para colocar um `timestamp`.

[09:35] Agora o `sequelize` automaticamente toda vez que faz uma query onde antes dava um `getAll` ele dá um `get()` em tudo que for `null` por definição. Agora então já fizemos nosso `soft delete`, nada mais é deletado em definitivo do banco, mas nosso usuário continua achando que está tudo deletado, porque o `getAll` está trazendo somente o que tem `null` na coluna deletedAt para ir para todas as nossas tabelas.
