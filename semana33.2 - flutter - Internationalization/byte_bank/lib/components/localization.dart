// localization and internationalization

import 'package:byte_bank/components/error.dart';
import 'package:byte_bank/components/progress.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';

import 'container.dart';

class LocalizationContainer extends BlocContainer {
  final Widget child;

  LocalizationContainer({required Widget this.child});

  @override
  Widget build(BuildContext context) {
    return BlocProvider<CurrentLocaleCubit>(
      create: (context) => CurrentLocaleCubit(),
      child: this.child,
    );
  }
}

class CurrentLocaleCubit extends Cubit<String> {
  CurrentLocaleCubit() : super("pt-br");
}

class ViewI18N {
  late String _language;

  ViewI18N(BuildContext context) {
    // o problema desta abordagem é o rebuild quando se troca a lingua
    // o que vc quer reconstruir quando trocar o currentLocaleCubit?
    // em geral, é comum reinicializar o sistema ou voltar para tela inicial
    this._language = BlocProvider.of<CurrentLocaleCubit>(context).state;
  }

  String localize(Map<String, String> values) {
    assert(values != null);
    assert(values.containsKey(_language));
    return values[_language] as String;
  }
}

@immutable
abstract class I18NMessagesState {
  const I18NMessagesState();
}

@immutable
class LoadingI18NMessagesState extends I18NMessagesState {
  const LoadingI18NMessagesState();
}

@immutable
class InitI18NMessagesState extends I18NMessagesState {
  const InitI18NMessagesState();
}

@immutable
class LoadedI18NMessagesState extends I18NMessagesState {
  final I18NMessages _messages;

  const LoadedI18NMessagesState(this._messages);
}

class I18NMessages {
  final Map<String, String> _messages;

  I18NMessages(this._messages);

  String get(String key) {
    assert(key != null);
    assert(_messages.containsKey(key));
    return _messages[key] as String;
  }
}

@immutable
class FatalErrorI18NMessagesState extends I18NMessagesState {
  const FatalErrorI18NMessagesState();
}

typedef Widget I18NWidgetCreator(I18NMessages messages);

class I18NLoadingContainer extends BlocContainer {
  final I18NWidgetCreator _creator;

  I18NLoadingContainer(this._creator);

  @override
  Widget build(BuildContext context) {
    return BlocProvider<I18NMessagesCubit>(
      create: (BuildContext context) {
        final cubit = I18NMessagesCubit();
        cubit.reload();
        return cubit;
      },
      child: I18NLoadingView(this._creator),
    );
  }
}

class I18NLoadingView extends StatelessWidget {
  final I18NWidgetCreator _creator;

  I18NLoadingView(this._creator);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<I18NMessagesCubit, I18NMessagesState>(
      builder: (context, state) {
        if (state is InitI18NMessagesState ||
            state is LoadingI18NMessagesState) {
          return ProgressView();
        }
        if (state is LoadedI18NMessagesState) {
          final messages = state._messages;
          return _creator.call(messages);
        }
        return ErrorView("Erro ao buscar mensagens da tela");
      },
    );
  }
}

class I18NMessagesCubit extends Cubit<I18NMessagesState> {
  I18NMessagesCubit() : super(InitI18NMessagesState());

  reload() {
    emit(LoadingI18NMessagesState());
    //todo: carregar
    emit(
      LoadedI18NMessagesState(
        I18NMessages(
          {
            "transfer": "TRANSFER",
            "transaction_feed": "TRANSACTION FEED",
            "change_name": "CHANGE NAME",
          },
        ),
      ),
    );
  }
}
