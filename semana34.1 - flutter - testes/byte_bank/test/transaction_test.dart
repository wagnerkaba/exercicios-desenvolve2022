
import 'package:byte_bank/models/contact.dart';
import 'package:byte_bank/models/transaction.dart';
import 'package:flutter_test/flutter_test.dart';

void main(){
  test('Should return the value when creating a transaction', (){
    final transaction = Transaction('id teste', 200, Contact(0, 'contato teste', 0));
    expect(transaction.value, 200);
  });

  test('Should show error when creating transaction with value less than zero', (){
    expect(()=>Transaction('id teste', 0, Contact(0, 'contato teste', 0)), throwsAssertionError);
  });
}