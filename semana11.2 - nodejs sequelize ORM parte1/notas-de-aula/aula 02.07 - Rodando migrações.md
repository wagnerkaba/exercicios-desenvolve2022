# 07 Rodando migrações

[00:00] Agora que o modelo da primeira tabela já está criado, criamos partindo aqui do nosso diagrama da tabela “pessoas”. Podemos usar o Sequelize para fazer as migrações do banco, para gerenciar as alterações do nosso esquema e guardar essas alterações. Faremos isso com comando chamado *migrate*. Vou dar um zoom nesse terminal. Estão rodando o meu terminal do SQL e nosso servidor. Então, o comando aqui será `npx sequelize-cli db:migrate`, ok?

[00:38] Acesso negado para o usuário *root*. Vamos dar uma olhada nos nossos dados de acesso *root*. Não tem senha nenhuma que eu não coloquei senha, está tudo ok.

[00:50] Vamos fazer o seguinte: o que pode ser é uma questão de autenticação do Linux, estou usando Linux. Então vamos fazer o seguinte: eu vou trocar o usuário *root* para um usuário que eu tenho que é o usuário da Alura. Acho que já está, inclusive, criado. Então, meu usuário será “alura”. A senha que eu tinha colocado para ele, colocamos em *string* também, “admin123”. Não tem problema porque é um banco local.

[01:19] Acho, inclusive, que eu tenho aqui. Se você der `select user from mysql.user;` vai mostrar uma lista de usuários. Aqui, eu já tinha esse usuário “alura”. Troquei aqui no banco, vou salvar.

[01:33] Vamos ver se rodou tudo e vamos testar com este usuário “alura” para ver se resolve este possível problema, que é do Linux. Deixa eu ver se rodou.

[01:42] Agora sim, agora rodou. Ele carregou as configurações do caminho que eu passei, está usando o ambiente de desenvolvimento e criou uma migração baseado no arquivo create-pessoas.js, um arquivo de migração que está na nossa pasta de migrações acessando “API > migrations > create-pessoas.js”.

[02:08] Então está tudo certo. Agora a migração foi executada e podemos consultar o banco para ver se mudou alguma coisa. Vamos ao terminal do banco.

[02:20] Por enquanto, não selecionei ainda nenhuma *database* para usar. Então, vamos fazer isso agora. Vou pedir para usarmos a *database* que é `mysql> use escola_inglês`, para entrarmos, nos conectarmos a essa *database*. Modificou a *database*, agora estou em escola_inglês.

[02:40] E aí, podemos pedir para mostrar as *tables*, as tabelas que já estão nessa *database*.

[02:47] Então, vimos que o Sequelize criou a tabela “pessoas”, e tem a tabela “SequelizeMeta”. Ela tem a ver com a migração. Deixarei o material extra para vocês para saberem um pouco mais sobre ela, mas, por enquanto, as tabelas ainda não têm conteúdo nenhum nelas. As colunas só foram criadas, não colocamos conteúdo, mas é possível entrarmos em `mysql> describe Pessoas;` que é o nome da minha tabela.

[03:15] Deixa eu diminuir um pouco o tamanho da fonte, beleza. E vemos na tabela que o Sequelize criou tudo que está dentro do arquivo de migração, inclusive os campos automáticos “ID”, “criado em” e “atualizado em”. Identificou a chave como chave primária, o que pode e não pode ser nulo, o tipo de dado, está tudo certo.

[03:42] Então, até agora, usamos o Sequelize para criar a base do nosso projeto, com a pasta de modelos, a pasta de migração, “config” e “seeders”, a parte de *seed* veremos um pouco mais para frente, inclusive criando arquivos. Por exemplo, o arquivo `index.js` dentro da pasta models, que vai percorrer todos os nossos modelos, fazer essa conexão com o banco.

[04:06] Ele cria modelos automaticamente, ele cria os arquivos de migração também automaticamente, a partir da linha de comando. Mandamos criar o modelo e já criou o modelo de pessoas, com todos os dados, e também criou o arquivo certo com todos os tipos de dados que vão na tabela. E ele também já está se conectando com o banco e fazendo alterações, isso tudo sem usar nenhuma *query* de SQL, sem precisar ir ao terminal de SQL e fazer efetivamente uma operação, de inserir tabela, de fazer uma migração etc.

[04:45] Por enquanto, o banco está vazio e não temos nada ainda para retornar na nossa API. Então, vamos, em seguida, colocar alguns dados. Vamos popular nosso banco.
