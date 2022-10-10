import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';
import 'components/localization.dart';

import 'components/theme.dart';
import 'package:flutter_bloc/flutter_bloc.dart';


void main() {
  runApp(ByteBankApp());
}

class LogObserver extends BlocObserver {


  @override
  void onChange(BlocBase bloc, Change change) {
    print("${bloc.runtimeType} > $change");
    super.onChange(bloc, change);
  }
}

class ByteBankApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Bloc.observer = LogObserver();
    return MaterialApp(
      theme: bytebankTheme,
      home: LocalizationContainer(child: DashboardContainer(),),
    );
  }
}


