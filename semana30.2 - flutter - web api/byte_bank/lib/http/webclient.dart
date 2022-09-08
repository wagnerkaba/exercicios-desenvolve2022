import 'dart:convert';

import 'package:http/http.dart';
import 'package:http_interceptor/http_interceptor.dart';

import '../models/Contact.dart';
import '../models/transaction.dart';
import 'interceptors/logging_interceptors.dart';


Client client = InterceptedClient.build(interceptors: [LoggingInterceptor()]);

Uri baseUrl = Uri.http('192.168.15.8:8080', 'transactions');
