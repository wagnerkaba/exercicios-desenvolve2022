## A separação entre serviços e controladores ajuda a aplicação a ficar mais modular, fácil de se atualizar e dar manutenção.

A separação entre controladores e serviços, assim como serviços entre vários arquivos, pode a princípio parecer que está adicionando complexidade, mas na verdade ajuda a separar responsabilidades, localizar mais facilmente em que parte da aplicação está acontecendo cada coisa, fazer modificações necessárias (inclusive troca de banco). Os métodos de cada classe também ficam menores e mais limpos.

## A camada de serviços passa a ser a única com acesso aos modelos, tirando essa responsabilidade dos controladores.

Passamos toda a conexão com os modelos (e com o banco) para a camada de serviços, que vai ser a responsável por chamar os métodos que o Sequelize utiliza para montar as queries.

## É uma boa prática conectar um controlador somente ao seu próprio serviço. Por exemplo: ProdutoController.js apenas importar e utilizar métodos que venham de ProdutoServices.js.

Para manter a estrutura da aplicação organizada, é ideal que um controlador “conheça” somente seu próprio serviço. Por exemplo: ProdutoController.js utiliza métodos de ProdutoServices.js mas não de FornecedorServices.js.

## Após a separação, a responsabilidade do serviço é se conectar aos modelos através dos métodos de query do Sequelize; já os controladores recebem as chamadas das rotas, passam para os serviços as informações necessárias e fazem os tratamentos de dados nos retornos.

O controlador perdeu a responsabilidade de se conectar aos modelos; agora é encarregado de passar para o serviço correspondente as informações que ele precisa passar para a query (através dos parâmetros), receber o retorno e tratar os resultados.