## Migração com ORM é o processo de documentar e rastrear mudanças em um banco de dados.
Quando utilizamos ORMs para gerenciar bancos SQL, o termo “migração” se refere a esta funcionalidade que é comum aos ORMs em geral, não apenas ao Sequelize.

## Migração em SQL é a transferência de dados entre plataformas/ambientes SQL.
O termo é o mesmo, o que às vezes pode gerar confusão, mas tem sentidos diferentes. É provável que, para uma pessoa que trabalha como DBA, este seja o significado mais comum, pois é dela a responsabilidade nesse tipo de migração.

## Qualquer alteração na estrutura do banco feita através de acesso direto ao banco (via terminal, por exemplo), sem o uso de uma migração, não é indexada/rastreável.
Por exemplo, uma nova coluna adicionada a uma tabela diretamente via SQL, com o comando ALTER TABLE Tabela, não passou pela migração, essa alteração não foi indexada pelo arquivo SequelizeMeta e o arquivo com a data e a descrição do que foi alterado não está na pasta de migrações.

## Migrações com ORM são úteis para coordenar alterações feitas por diferentes pessoas nas tabelas do banco.
Quando temos mais de uma pessoa trabalhando em um mesmo projeto e fazendo alterações no banco durante o desenvolvimento, as migrações são úteis para “documentar” o que foi alterado no banco, e quando isso aconteceu.

## As alterações feitas no banco via migrações podem ser rastreadas e revertidas para debugar conflitos e erros.
Caso alguma alteração gere erros ou bugs, é possível desfazê-la. Da mesma forma que o Sequelize utiliza o comando db-migrate para rodar as migrações, o comando db:migrate:undo vai desfazê-las em ordem, começando pela última executada.



