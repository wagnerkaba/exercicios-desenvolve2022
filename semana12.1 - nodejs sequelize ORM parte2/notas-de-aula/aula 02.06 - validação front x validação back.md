## Validações feitas no front-end são muito úteis para melhorar a experiência de quem utiliza a aplicação, mas não substituem a validação no back-end.

Validações feitas no front-end ajudam na experiência de utilização, pois evitam o envio de requisições desnecessárias (o que pode consumir a conexão do usuário), mas não garantem a integridade dos dados enviados.

## Validações feitas no back-end devem ser levadas em conta nos custos de hospedagem em nuvem, pois é preciso fazer a requisição para então ser validada.
Serviços de hospedagem em nuvem podem cobrar alguns serviços por uso, ou a cada requisição feita. Um bom motivo para fazer a primeira validação no front é evitar requisições desnecessárias também por razões de custo.

## As validações feitas no front-end são mais fáceis de serem burladas por pessoas mal-intencionadas.
É possível alterar os dados de uma requisição, entre outras formas, a partir do próprio inspetor de código do navegador. Alguém com o conhecimento necessário pode passar por cima das regras de validação.

## Uma vez que a API é disponibilizada para o front-end, não é possível garantir que a requisição esteja realmente sendo enviada pela aplicação, então, por segurança, ela também deve ser feita no back-end.
 É possível utilizar ferramentas para enviar requisições para a API sem necessariamente estar no ambiente da aplicação “oficial”, por exemplo via `curl`.