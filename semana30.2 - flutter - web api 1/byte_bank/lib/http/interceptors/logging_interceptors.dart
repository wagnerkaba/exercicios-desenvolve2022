import 'package:http_interceptor/http_interceptor.dart';


// http_interceptor is a plugin that lets you intercept the different requests and responses from Dart's http package. You can use to add headers, modify query params, or print a log of the response.
// O código abaixo foi adaptado da pagina: https://pub.dev/packages/http_interceptor
class LoggingInterceptor implements InterceptorContract {
  @override
  Future<RequestData> interceptRequest({required RequestData data}) async {
    print('Request');
    print('url: ${data.baseUrl}');
    print('headers: ${data.headers}');
    print('body: ${data.body}');
    return data;
  }

  @override
  Future<ResponseData> interceptResponse({required ResponseData data}) async {
    print('Response');
    print('headers: ${data.headers}');
    print('status code: ${data.statusCode}');
    print('body: ${data.body}');
    return data;
  }
}
