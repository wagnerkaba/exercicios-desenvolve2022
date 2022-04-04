# 04 Para saber mais: Camadas extras no MVC

Dependendo da necessidade ou da complexidade do projeto, é possível adicionar mais camadas à sua aplicação, além das que o MVC contempla (modelo - visão - controlador). Por exemplo, se vários controladores utilizam métodos semelhantes para as operações de banco, é possível abstrair estes métodos para uma camada própria, para que sejam utilizados pelos controladores.

Exemplos de camadas extras são: *middlewares* para autenticação de usuários e a chamada *camada de serviços*, que pode ser implementada para separar os métodos de acesso aos modelos, não sendo nesse caso o modelo acessado diretamente pelo controlador.

Lembrando sempre que, quanto mais separadas as responsabilidades, mais organizado fica o sistema. Nem sempre é preciso separar a aplicação em camadas extras, mas você pode fazer isso se perceber que alguma das camadas está fazendo mais do que a tarefa para a qual foi criada.
