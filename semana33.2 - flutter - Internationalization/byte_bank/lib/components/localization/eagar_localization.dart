

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'locale.dart';

class ViewI18N {
  late String _language;

  ViewI18N(BuildContext context) {
    // o problema desta abordagem é o rebuild quando se troca a lingua
    // o que vc quer reconstruir quando trocar o currentLocaleCubit?
    // em geral, é comum reinicializar o sistema ou voltar para tela inicial
    this._language = BlocProvider
        .of<CurrentLocaleCubit>(context)
        .state;
  }

  String localize(Map<String, String> values) {
    assert(values != null);
    assert(values.containsKey(_language));
    return values[_language] as String;
  }
}