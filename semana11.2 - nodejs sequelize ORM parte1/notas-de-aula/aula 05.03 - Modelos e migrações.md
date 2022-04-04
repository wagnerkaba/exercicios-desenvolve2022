# 03 Modelos e migrações



Solange está trabalhando em uma nova API e precisa de uma lista de usuários. Ela já criou o modelo e o arquivo de migração que precisava, utilizando o comando `npx sequelize-cli model:create`, e rodou o comando de migração `npx sequelize-cli db:migrate` para gerar a tabela no banco.

A tabela `Usuarios` ficou da seguinte forma:

```
| Field     | Type         | Null | Key | Default | Extra          |
|-----------|--------------|------|-----|---------|----------------|
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| nome      | varchar(255) | NO   |     | NULL    |                |
| celular   | varchar(255) | NO   |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |                  
```

Porém, só depois de rodar o comando de migração ela conferiu a tabela no banco e notou que havia esquecido de inserir um atributo nessa tabela, o `data_nascimento`.

Quais são as alterações de código que ela precisa fazer para incluir essa coluna na tabela?

## Resposta

- Incluir o novo atributo no modelo: `data_nascimento: DataTypes.STRING`

- Incluir a coluna no arquivo de migração:
  
  ```
  data_nascimento: {
    type: Sequelize.STRING
  },
  ```

- Rodar novamente o comando de migração para fazer a alteração no banco.

Utilizamos o comando de migração no ORM para fazer alterações rastreáveis no banco. As migrações ficam indexadas em `sequelizeMeta` e podem ser revertidas, mas não é preciso desfazer a migração anterior para fazer uma nova alteração no banco, como adicionar uma coluna. É só rodar um novo comando de migração para adicionar as alterações.


