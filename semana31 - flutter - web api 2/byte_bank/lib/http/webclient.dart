import 'package:http/http.dart';
import 'package:http_interceptor/http_interceptor.dart';
import 'interceptors/logging_interceptors.dart';

Client client = InterceptedClient.build(
  interceptors: [LoggingInterceptor()],
  requestTimeout: Duration(seconds: 5),
);
// Obs: criei um link através do ngrok para compartilhar meu localhost
Uri baseUrl = Uri.https('f19d-177-204-7-116.sa.ngrok.io', 'transactions');
