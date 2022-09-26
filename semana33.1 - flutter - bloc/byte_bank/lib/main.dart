
import 'package:byte_bank/screens/counter_page.dart';
import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';
import 'components/theme.dart';

void main() {
  runApp(ByteBankApp());

}

class ByteBankApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: bytebankTheme,
        home: CounterContainer(),
    );
  }
}


