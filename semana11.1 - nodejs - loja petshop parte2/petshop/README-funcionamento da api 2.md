
# Síntese do que foi feito na semana 11.1

[00:13] Temos uma pasta de produtos dentro da pasta de fornecedores onde descobrimos como que conseguimos gerenciar uma hierarquia de dados dentro de uma API Rest e também declaramos modelos de tabela do nosso produto, onde conseguimos representar os dados que estão no banco de dados, no caso o nosso MySQL, conseguimos representar a tabela dentro do nosso código. Inclusive, conseguimos também relacionar o id do fornecedor dentro da nossa tabela com a tabela de fornecedores.

[00:40] Para gerenciar todos esses dados e essas informações, criamos as rotas de produtos onde conseguimos fazer todas as operações necessárias em cima do nosso produto. Conseguimos listar os produtos cadastrados para um único fornecedor.

[00:55] Se precisarmos cadastrar novos produtos que queiramos vender já temos uma requisição POST para conseguir cadastrar o produto e caso queiramos atualizar o título do produto que criamos, temos a rota de PUT, onde conseguimos enviar os dados novos com o ID correto do nosso produto.

[01:11] Se quisermos diminuir o estoque quando fazemos uma venda, se eu vendi uma bolinha para cachorro, eu posso enviar uma requisição com um POST para a nossa API, onde estamos trabalhando com uma ação de produto e através desta ação conseguimos avisar a API que um produto foi vendido ou 5 unidades desse produto foram vendidas e, conforme essa ação vai sendo executada, vamos diminuindo o estoque do produto na nossa API.

[01:34] Se não quisermos mais vender o produto, também já temos uma requisição com DELETE para conseguirmos apagar esse produto caso não queiramos mais vendê-lo.

[01:43] Todas essas comunicações da API, estamos usando o Sequelize para nos comunicarmos com o banco de dados e também estamos tratando desses dados com o serializador, ou seja, temos uma classe descendendo o serializador onde conseguimos tratar todos os dados de produtos enviando apenas informações que queiramos ou não exibir.

[02:01] Caso for preciso mexer com mais alterações para produtos dentro do navegador, a nossa API já consegue trabalhar e respeitar todas as regras de segurança que o navegador possa ter, todas as convenções de segurança que um navegador possa ter, com as rotas de e as rotas de HEAD, e o CORS que implementamos na aplicação.

[02:18] Caso queiramos evoluir a nossa API e lançar uma nova versão da aplicação, também vimos como criar uma v2, ou seja, uma nova versão da nossa API. Respeitando também as versões antigas e com as novas versões. Descobrimos também como escolhemos as versões que queremos para a nossa aplicação, para as rotas da nossa aplicação.