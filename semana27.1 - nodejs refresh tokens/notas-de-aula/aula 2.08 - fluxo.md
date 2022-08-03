
# Exercício

Se quiséssemos implementar um cliente mobile da API do Blog do Código utilizada no curso, quais das funcionalidades abaixo seriam implementações corretas para esse cliente?

## Quando uma pessoa realizar uma operação de login no aplicativo, o cliente deverá fazer uma requisição POST para a rota /usuario/login da API. Em seguida, ele deverá guardar o access token e refresh token para próximos usos.

Correto! Como os tokens deverão ser enviados pelo cliente em rotas que necessitam de autenticação, é preciso guardá-los após o login.

## Quando o cliente recebe uma resposta 401 Unauthorized, dizendo que o access token está expirado, ele deverá tentar atualizar esses tokens automaticamente. Para isso, ele fará uma requisição para /usuario/atualiza_token, enviando o refresh token, e, se este for válido, receberá dois novos tokens. Dessa forma, o cliente deverá refazer a requisição respondida com código 401, mas agora com um access token válido.

 Correto! Essa estratégia permite que a pessoa não tenha que fazer operações manuais dentro do aplicativo para atualizar seus tokens. O uso de refresh tokens dá a liberdade ao cliente para realizar todos esses procedimentos por debaixo dos panos.