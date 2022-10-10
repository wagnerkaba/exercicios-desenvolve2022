// localization and internationalization

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';

import 'container.dart';

class LocalizationContainer extends BlocContainer{
  final Widget child;
  LocalizationContainer({required Widget this.child});
  @override
  Widget build(BuildContext context) {
    return BlocProvider<CurrentLocaleCubit>(
      create: (context)=>CurrentLocaleCubit(),
      child: this.child,
    );
  }

}

class CurrentLocaleCubit extends Cubit<String>{
  CurrentLocaleCubit() : super("pt-br");
}

class ViewI18N {
  late String _language;

  ViewI18N(BuildContext context){
    // o problema desta abordagem é o rebuild quando se troca a lingua
    // o que vc quer reconstruir quando trocar o currentLocaleCubit?
    // em geral, é comum reinicializar o sistema ou voltar para tela inicial
    this._language = BlocProvider.of<CurrentLocaleCubit>(context).state;
  }

  String localize(Map<String, String> values) {
    return values[_language] as String;

  }
}