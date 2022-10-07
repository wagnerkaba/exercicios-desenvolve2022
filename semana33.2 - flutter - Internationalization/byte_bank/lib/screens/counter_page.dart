import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../components/container.dart';

// Exemplo de contador utilizando bloc
// vide nota de aula 1.06 - Bloc pattern

class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);

  void decrement() => emit(state - 1);
}

class CounterContainer extends BlocContainer {

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
    // Para entender (_) veja nota de aula: underscore as parameter
    create: (_) => CounterCubit(),
      child: CounterView(),
    );
  }
}


class CounterView extends StatelessWidget {
  const CounterView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme
        .of(context)
        .textTheme;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Nosso contador'),
      ),
      body: Center(
        child: BlocBuilder<CounterCubit, int>(
          builder: (context,state) {
            return Text(
              "$state",
              style: textTheme.headline2,
            );
          },
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () => context.read<CounterCubit>().increment(),
          ),
          const SizedBox(height: 8),
          FloatingActionButton(
            child: Icon(Icons.remove),
            onPressed: () => context.read<CounterCubit>().decrement(),
          ),
        ],
      ),
    );
  }
}
