# ByteBank - Um projeto em Flutter

Este projeto é continuação da semana 30.2.

Faça esse curso de Flutter e:
* Crie e mostre um Dialog
* Capture erros em chamadas do web client
* Apresente adequadamente a mensagem de resposta da requisição
* Configura o App para lidar com diferentes tipos de erros
* Adicione um progresso enquanto a requisição web é realizada

## Tópicos importantes
* [Idempotência](https://en.wikipedia.org/wiki/Idempotence) - Suponha que o usuário faça uma transferência e esta demore para ser concluída por alguma lentidão da web api. O usuário pode ficar impaciente e tentar confirmar a transferência novamente. Isso pode gerar duas transferênias iguais. Para evitar esse problema, utilizou-se o conceito de idempotência. Ou seja, confirmar uma transferência é uma operação idempotente, uma vez que gerará apenas uma transferência mesmo que o usuário clique em confirmar por diversas vezes. Para fazer com que a confirmação da transferência seja uma operação idempotente, o app passou a gerar um id único, através do gerador de [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier). Assim, o formulário gera um id único para uma transação. Se o usuário confirmar uma transação e depois confirmá-la novamente, apenas uma transação será gerada. Isso porque o app não permite criar duas transações com o mesmo id.


## Tecnologias utilizadas

* Flutter
* sqflite - SQLite plugin for Flutter. Supports iOS, Android and MacOS.
* [http package](https://pub.dev/packages/http) - This package contains a set of high-level functions and classes that make it easy to consume HTTP resources. It's multi-platform, and supports mobile, desktop, and the browser.
*[http_interceptor](https://pub.dev/packages/http_interceptor) - This is a plugin that lets you intercept the different requests and responses from Dart's http package. You can use to add headers, modify query params, or print a log of the response.
* [uuid](https://pub.dev/packages/uuid) - Simple, fast generation of RFC4122 UUIDs.

## Setup

Para o app funcionar é preciso que o servidor do web api (vide pasta [servidor-webapi](./servidor-webapi/)) seja executado.

Para rodar o servidor, entre no Power Shell do windows e digite:

```
java -jar server.jar
```

## Como acessar o servidor

A rota do servidor é: http://localhost:8080/transactions

Porém, o celular não consegue acessar localhost:8080/transactions (esse endereço só dá para acessar no próprio computador).

É preciso descobrir a url que o celular consegue acessar digitando o comando "ipconfig" no power shell do windows.

Para informar o app acerca da url, modifique a variável `baseUrl` no arquivo [webclient.dart](./byte_bank/lib/http/webclient.dart).

Exemplo de url: http://192.168.15.8:8080/transactions

## Acessando o servidor por meio do NGROK

É possível compartilhar o localhost através da internet por meio do [ngrok](https://ngrok.com/).

**OBS: cada vez que o ngrok é reiniciado, será necessário mudar a variável `baseUrl` no arquivo [webclient.dart](./byte_bank/lib/http/webclient.dart).**



