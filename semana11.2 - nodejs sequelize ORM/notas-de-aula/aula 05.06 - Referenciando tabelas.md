# 06 Referenciando tabelas

[00:00] As associações de um para vários já fizemos aqui com os métodos `hasMany` e `belongsTo`. Ficou faltando só passar também para os métodos `belongsTo` que usamos nos modelos de turmas e matrículas o segundo parâmetro do método, que é dizer o nome da coluna, já que passaremos para o Sequelize o nome da coluna exato que queremos que ele use. Vamos fazer isso agora.

[00:31] Onde Turmas se relaciona com Pessoas, eu só copiei de onde já tínhamos feito no `hasMany`, então vamos no modelo de Turmas, onde Turmas se relaciona com Pessoas, e só adicionamos o parâmetro nesse objeto contendo foreignKey e o nome da coluna.

[00:53] Então Pessoas e Turmas está relacionado, digamos assim, entre aspas, dos dois lados (pessoas.js e turmas.js), tanto com o `hasMany` quanto com o `belongsTo`, e agora a mesma coisa para Matrículas. Então Pessoas e Matrículas se relacionam, estão associadas através da coluna estudante_id. Então vamos no modelo Matrículas “api> models> matriculas.js” onde está a associação com Pessoas, e adiciona a opção com o nome da coluna.

[01:23] Então Pessoas já está associado dos dois lados, Níveis está associado com Turmas, então copiamos de “api> models> niveis.js” e vamos em “api> models> turmas.js” fazer o outro lado da associação, onde Turmas se associa a níveis, adicionamos a opção com o nome da tabela. E só faltou então Turmas e Matrículas, que estão associadas através da coluna turma_id.

[02:01] Agora, todas as associações estão feitas com os dois métodos, e os dois métodos sabem quais são os nomes das colunas que eles têm que usar nas associações. Vamos fechar um momento todos esses modelos que estão abertos. Agora só temos que referenciar nos arquivos de migração, por exemplo, no arquivo de migração Turmas, quais são as colunas que vão receber chaves estrangeiras.

[02:30] Por enquanto, nossos arquivos de migração ainda estão só com, digamos, as colunas que são naturais. Ainda não adicionamos as colunas que receberão chaves estrangeiras. No caso da tabela Turmas, docente_id e nivel_id. Então, acessamos “api> migrations> create-turmas.js” e adicionamos essas colunas como propriedades de createTable.

[02:56] Então, pode vir depois de data_inicio, por exemplo, para adicionar uma nova propriedade, e o nome da propriedade vai levar o nome da coluna. Então, no caso, será docente_id:

[03:15] E que propriedades deve ter docente_id? Como será uma chave, então esse campo não pode ser nulo. Então *allowNull*, “permite ser nulo”, *false*. Qual o tipo de dado? Sempre tem que ter, estamos fazendo nossos IDs com inteiros, então Sequelize.INTEGER. E a última propriedade que temos que passar é o modelo que ele vai referenciar. Então, *references* é o mesmo *references* usamos no próprio SQL, ele vai cumprir o mesmo papel.

[03:56] Abrimos o objeto, a primeira propriedade do objeto vai ser o modelo, que vai ser referenciado. Docente_id referencia Turmas e Pessoas. Isso será feito através da chave id, porque estamos usando a coluna id como chave estrangeira:

[04:24] Então a associação, a relação, será feita através da coluna id. A id de Pessoa 1 vai aparecer como estudante_id de número 1. Então docente_id está criado, e falta criar nivel_id na tabela Turmas. Podemos copiar toda a propriedade de docente_id porque a nivel_id será bastante parecida. Só vamos colar trocando docente_id por nivel_id. Também não pode ser nulo, também é *integer*, mas vai referenciar o modelo Niveis, utilizando como chave a coluna id.

[05:04] Então, já que fizemos referências no arquivo de migração de turmas, vamos fazer a mesma coisa no arquivo de migração de matrículas: “api> migrations> create-matriculas.js”. As colunas que precisamos criar em Matrículas são as colunas estudante_id e turma_id, e elas são bem parecidas com as outras duas que já criamos, então posso até colar de novo o que já tinha copiado em Turmas, mas aqui elas se chamarão estudante_id, o campo não pode ser nulo, também é *INTEGER*.

[05:44] Pessoas e Matrículas se relacionam através da coluna estudante_id. O outro que temos que criar é turma_id, então vou colar de novo o que já tinha copiado antes e trocar para turma_id, e o resto é todo igual, a não ser o modelo. Agora, o modelo que vamos referenciar é o modelo Turmas.

[06:11] Então agora tanto os modelos quantos arquivos de migração já sabem quais são as associações que devem ser feitas, através de que colunas devem ser feitas e quais são as chaves estrangeiras. Agora, podemos rodar as migrações, venho no terminal onde estou dando os comandos. Vamos rodar as migrações e ver se o Sequelize conseguiu conectar no banco e criar as tabelas. Então `npx sequelize-cli db:migrate` é o comando. Então migrou Pessoas, Níveis, Turmas e Matrículas.

[06:57] Vamos correr então no terminal do MySQL: `show tables`, mostrar tabelas. Ele criou Matrículas, Níveis, Pessoas e Turmas. As quatro tabelas estão criadas. Se viermos no terminal e passarmos o comando `describe Matriculas;`, ele vai descrever tudo o que tem dentro da tabela Matrículas.

[07:28] O que ele criou? Vamos comparar para ver se criou certo. id, status, estudante_id, turma_id. createdAt e updatedAt ele cria automaticamente. A chave id é a chave primária, com auto incremento, ela vai aumentando. MUL é de múltiplo, outro tipo de chave do MySQL, que dispõe que podem entrar múltiplos valores, aceita vários Ids de estudante, de turma, etc. Então já está criado e podemos popular o restante das tabelas e fazer os testes no Postman com os endpoints da nossa API.
