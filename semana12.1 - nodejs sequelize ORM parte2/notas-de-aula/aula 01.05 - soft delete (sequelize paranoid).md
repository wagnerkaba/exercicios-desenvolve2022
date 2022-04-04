# 05 Ocultando sem deletar



[00:00] Temos uma lista com alguns requisitos que o cliente passou para nós. Vamos dar uma olhada neles e começar pelo primeiro. O cliente não gostaria que registros importantes do sistema, como por exemplo pessoas, sejam apagados definitivamente do banco de dados.

[00:18] Ou seja, apagar um registro do banco de dados é uma operação permanente e o cliente quer que isso não aconteça. Como fazemos para que um registro não seja verdadeiramente excluído do banco, mas mantendo para o usuário essa funcionalidade? Ou seja, o usuário continua achando que está apagando, mas o registro fica lá.

[00:35] Vamos aqui no terminal abrir o terminal do MYSQL, com MYSQL, meu usuário, minha senha de banco local. Estou usando o terminal do MYSQL, mas se você quiser usar um cliente, por exemplo MYSQL work bench ou The beaver, fique à vontade, que só vamos usar para consultar mesmo, então não vai fazer diferença você usar um cliente ou um terminal, etc.

[01:05] Vamos dar uma olhada então. Vou entrar no banco de dados que estamos usando, o `escola_ingles`, e vou dar um select para vermos como estão nossas tabelas. Vou dar um `select all from` pessoas para dar uma olhada. Nós populamos no curso anterior a tabela e ela tem essas colunas.

[01:30] Teríamos que dar um jeito de marcar os registros que queremos apagar com uma espécie de bandeira, para que o sistema pense que esses registros estão deletados, mas ele não é apagado do banco, sem que a linha seja apagada do banco, lembrando que apagar uma coisa do banco é uma ação permanente.

[01:50] Esse recurso existe em SQL, e o Sequelize traz para nós também. Ele é chamado de exclusão suave, ou *soft delete*. Vamos dar uma olhada na documentação do Sequelize.

[02:03] No Sequelize essa opção chama `paranoid`. Conseguimos fazer a exclusão suave via Sequelize com relativamente poucas linhas. Ele está dando na documentação. Quando utilizamos um modelo, os modelos do `sequelize` têm um objeto onde colocamos os atributos e outro objeto onde vamos colocar a opção `paranoid true`.

[02:30] Vou copiar a linha. Essa opção é definida nos modelos, então podemos vir no nosso código, nos modelos. Vou colocar não só em pessoas, vou colocar essa opção para todos os modelos, porque temos poucas tabelas, então não tem problema.

[02:50] Aqui está como na documentação, o primeiro objeto são os atributos da tabela, da linha 3 até a linha 5, e o `sequelize` deixou até para nós um objeto vazio para colocar as opções. É aqui que vou colocar o `paranoid true`. Coloquei a opção na tabela matrículas, e vou colocar nas outras também, no modelo níveis, no modelo pessoas, e no modelo turmas.

[03:25] Enquanto o valor de `paranoid` for `true`, garantimos que nenhum registro da tabela vai ser verdadeiramente deletado. O Sequelize vai ser avisado quando tentar excluir qualquer registro.

[03:40] E como o `paranoid` funciona? Vamos voltar na documentação. A documentação diz que essa opção, vou descer um pouco nas informações que tem na documentação, quando usamos `paranoid true`, ao invés de deletar, de usar a palavra-chave delete quando o `sequelize` monta a query de SQL, vai usar um update. Não é mais delete, vamos continuar usando o método `sequelize destroy`, porém o que vai ser feito na query? Vai ser feito um update e aí o que vai acontecer?

[04:12] A query vai adicionar um *timestamp* numa coluna que chama deletedAt. Deletado em. Não temos uma coluna, se voltarmos no terminal do MYSQL, `deletedAt`, que ele precisa para fazer o `paranoid` funcionar. Temos que criar essa coluna para conseguir implementar o *soft delete*, porque da próxima vez que usarmos o `destroy`vai ser feito um update, colocado um `timestamp` no registro nessa coluna e o `sequelize` vai puxar como registro ativo só o que não tiver nenhum `timestamp` nessa coluna. Vamos ver isso um pouco mais para frente.

[05:02] Mas primeiro precisamos adicionar essa coluna `deletedAt` em todas as nossas tabelas. Já usamos o `sequelize` para adicionar colunas através dos arquivos de migração. Vamos abrir as migrações. Usamos cada uma delas para conectar com o banco e criar as tabelas com o método `create table`, tem os atributos id, etc, `0`, `updatedAt`.

[05:00] Conseguimos usar o `sequelize` para depois você criar uma tabela, cada uma delas, conseguimos adicionar colunas também usando o Sequelize? Vamos ver isso agora em seguida.
