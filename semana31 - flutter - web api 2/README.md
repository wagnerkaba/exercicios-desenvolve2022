# ByteBank - Um projeto em Flutter

Este projeto é continuação da semana 30.2.



## Tópicos importantes



## Tecnologias utilizadas

* Flutter
* sqflite - SQLite plugin for Flutter. Supports iOS, Android and MacOS.
* [http package](https://pub.dev/packages/http) - This package contains a set of high-level functions and classes that make it easy to consume HTTP resources. It's multi-platform, and supports mobile, desktop, and the browser.
*[http_interceptor](https://pub.dev/packages/http_interceptor) - This is a plugin that lets you intercept the different requests and responses from Dart's http package. You can use to add headers, modify query params, or print a log of the response.

## Setup

Para o app funcionar é preciso que o servidor do web api (vide pasta [servidor-webapi](./servidor-webapi/)) seja executado.

Para rodar o servidor, entre no Power Shell do windows e digite:

```
java -jar server.jar
```
A rota do servidor é: http://localhost:8080/transactions

Porém, o celular não consegue acessar localhost:8080/transactions (esse endereço só dá para acessar no próprio computador).

É preciso descobrir a url que o celular consegue acessar digitando o comando "ipconfig" no power shell do windows.

Descobri que consigo acessar a rota "transactions" no celular, através do endereço: http://192.168.15.8:8080/transactions

O endereço 192.168.15.8:8080 estava em IPv4 dentro de Wireless LAN adapter wi-fi.

Caso o endereço seja diferente, basta informar o app acerca do endereço atual.

Para informar o app acerca da url, modifique a variável `baseUrl` no arquivo [webclient.dart](./byte_bank/lib/http/webclient.dart).



