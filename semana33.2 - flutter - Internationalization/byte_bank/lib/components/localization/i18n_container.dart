

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../http/webclients/I18NWebClient.dart';
import '../container.dart';
import 'i18n_cubit.dart';
import 'i18n_view.dart';

class I18NLoadingContainer extends BlocContainer {
  late I18NWidgetCreator creator;
  late String viewKey;

  I18NLoadingContainer(
      {required String viewKey, required I18NWidgetCreator creator}) {
    this.creator = creator;
    this.viewKey = viewKey;
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider<I18NMessagesCubit>(
      create: (BuildContext context) {
        final cubit = I18NMessagesCubit(this.viewKey);
        cubit.reload(I18NWebClient(this.viewKey));
        return cubit;
      },
      child: I18NLoadingView(this.creator),
    );
  }
}