# 09 Problemas na autenticação

Conseguimos implementar nossa primeira solução de autenticação de transferência. Porém, se o usuário inserir uma senha incorreta, teremos um *feedback* pouco adequado, afinal não há qualquer tipo de aviso na tela e a transação simplesmente não é registrada no *"Transaction Feed"*.

Antes de abordarmos essa questão, estudaremos a solução que aplicamos para o *dialog* e possíveis problemas que ela apresenta. Toda a execução que realizamos não teve nenhum tipo de *delay* depois do `onConfirm`, e o `save`foi finalizado de maneira muito rápida. Trata-se, então, de um teste de sorte.

Quando fechamos o *dialog* com o botão "Confirm", chamamos o `save()`, cuja execução precisa de um contexto. Porém, é esperado o contexto do nosso formulário `transaction_form.dart`, e neste caso em específico estamos enviando o contexto do *dialog*, o que pode gerar erros.

Para analisarmos a situação com mais clareza, simularemos o erro. Primeiro, extrairemos o código do `_webClient.save()` para um método privado `save()` usando o atalho "Control + Alt + M" do IntelliJ.

```
void _save(Transaction transactionCreated, String password, BuildContext context) {
  _webClient.save(transactionCreated, password).then((transaction) {
    if(transaction != null){
      Navigator.pop(context);
    }
  });
}
```

No novo método, faremos uma execução assíncrona a partir do `async/await`. De modo a forçarmos o erro, incluiremos um `Future.delayed()` com a duração de `1` segundo (o suficiente para nossa simulação), precedido de um `await` que segurará a execução desse código.

```
void _save(Transaction transactionCreated, String password, BuildContext context) async {
  await Future.delayed(Duration(seconds: 1));
  _webClient.save(transactionCreated, password).then((transaction) {
    if(transaction != null){
      Navigator.pop(context);
    }
  });
}
```

Na aplicação, criaremos uma transferência com o valor `3000` para o contato "Alex" e passaremos a senha correta (`1000`). Entretanto, a tela *"New transaction"* não será fechada como deveria, ainda que a transferência tenha sido registrada em *"Transaction feed"*.

Isso ocorre porque estamos trabalhando com o contexto do *dialog*, fazendo com que a aplicação não se comporte de acordo com o fluxo esperado. No console, encontraremos o seguinte erro:

> ERROR:flutter/lib/ui/ui_dart_state.cc(148)] Unhandled Exception: Looking up a deactivated widget's ancestor is unsafe.

Ou seja, estamos tentando usar o **contexto de um widget que não faz mais parte da árvore de widgets**. Lidar com esse erro é mais simples do que pode parecer. Uma das maneiras é garantir que o `context` que está sendo passado realmente é o do widget principal (que representa a tela). Para isso, cada vez que utilizarmos o `builder`, podemos usar um nome diferente - por exemplo, **`contextDialog`**.

Evitar e corrigir esse erro é bem simples, precisamos nos atentar se o contexto passado é o do widget principal e que representa a tela. Cada vez que usarmos o `builder` especificarmos seu contexto. Neste caso, utilizaremos o `contextDialog`.

```
child: RaisedButton(
  child: Text('Transfer'), onPressed: () {
    final double value = double.tryParse(_valueController.text);
    final transactionCreated = Transaction(value, widget.contact);
    showDialog(context: context, builder: (contextDialog) {
      return TransactionAuthDialog(onConfirm: (String password) {
        _save(transactionCreated, password, context);
      },);
    });
},
),
```

Ao realizarmos uma nova transferência, navegaremos corretamente para a tela *"Transfer"* e a transação será adicionada ao *"Transaction Feed"*.

À medida que a aplicação se torna mais complexa, precisamos tomar cuidado em especificar os contextos para cada comportamento, principalmente os relacionados a ações que podem demorar algum tempo. Assim, teremos soluções mais seguras em consistentes. Terminado nosso teste, removeremos o `Future.delayed()`, mas manteremos o método `_save()` extraído.

```
void _save(Transaction transactionCreated, String password, BuildContext context) async {
  _webClient.save(transactionCreated, password).then((transaction) {
    if(transaction != null){
      Navigator.pop(context);
    }
  });
}
```

Voltaremos então ao aplicativo e criaremos uma nova transferência, dessa vez sem passar nenhuma senha. No console, veremos que a requisição para a Web API foi feita da maneira esperada, mas sem a senha. Além disso, teremos na resposta um código **`401`**, que indica que a autenticação falhou, e uma **`UnhandledException`**.

> I/flutter ( 6439): headers: {Content-type: application/json; charset=utf-8, password: }
> 
> I/flutter ( 6439): body: {"value":30000.0,"contact":{"name":"Alex","accountNumber":1000}}
> 
> I/flutter ( 6439): Response
> 
> I/flutter ( 6439): status code: 401

Perceba que realmente estamos lidando com erros de exceções, e portanto precisaremos tomar alguns cuidados a mais em se tratando de soluções que envolvem fluxos que podem ou não dar certo, investigando cada caso individualmente. Por exemplo, se enviarmos uma transferência sem valor nenhum, mas com uma senha correta, também teremos um problema, dessa vez com um código **`400`** e um erro indicando que não era esperado que o `value` fosse nulo.

A seguir, aprenderemos a lidar com esse tipo de abordagem e tornaremos nossa solução cada vez mais flexível, notificando o usuário quando há um erro específico.


