# API para um sistema de controle de alunos e turmas de uma escola de inglês - PARTE 2

API para um sistema de controle de alunos e turmas de uma escola de inglês que utiliza o ORM Sequelize, um mapeador de objeto relacional.

## Funcionalidades implementadas nesta parte 2



| Funcionalidade desejada                                                                                                                                                                                                   | Tecnologias utilizadas                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados.                                                                                        | [Paranoid Tables do Sequelize](https://www.topcoder.com/thrive/articles/paranoid-tables-in-sequelize-orm-implementing-soft-delete)                                                                                     |
| 2. Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.                                                                                | [Scopes do sequelize](https://sequelize.org/docs/v6/other-topics/scopes/)                                                                                                                                              |
| 3. Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front. | [Validations do sequelize](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)                                                                                                                   |
| 4. É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.                                                                                                                 | [Association-scopes do sequelize](https://sequelize.org/docs/v6/advanced-association-concepts/association-scopes)                                                                                                      |
| 5. O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).                                                                      | [Sequelize Operators](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators)                                                                                                                    |
| 6. O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.                                                                                         | [Sequelize Grouping](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#grouping)<br/>[Sequelize findAndCountAll](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall) |
| 7. O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.                                 | [Sequelize Transactions](https://sequelize.org/docs/v6/other-topics/transactions/)                                                                                                                                     |

* ## Tecnologias

* NodeJS

* MySQL

## Bibliotecas do NODEJS

* Express
* Body Parser
* MySQL2
* Sequelize
* [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
* [Path](https://nodejs.org/api/path.html)

## Postman

Para testar a API, utilize [este arquivo do POSTMAN](./orm-sequelize.postman_collection.json)