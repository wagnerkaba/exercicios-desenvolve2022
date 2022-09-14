import 'package:http/http.dart';
import 'package:http_interceptor/http_interceptor.dart';
import 'interceptors/logging_interceptors.dart';

Client client = InterceptedClient.build(
  interceptors: [LoggingInterceptor()],
  requestTimeout: Duration(seconds: 5),
);
// Obs: criei um link através do ngrok para compartilhar meu localhost
// Para o ngrok compartilhar o localhost é necessário entrar na pasta do ngrok por meio do powershell e digitar o comando para iniciar o compartilhamento (na pasta tem um arquivo com instruções)
Uri baseUrl = Uri.https('d820-177-157-32-178.sa.ngrok.io', 'transactions');
