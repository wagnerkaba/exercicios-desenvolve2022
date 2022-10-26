import 'package:byte_bank/main.dart';
import 'package:byte_bank/screens/contact_form.dart';
import 'package:byte_bank/screens/contacts_list.dart';
import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/mockito.dart';

import 'matchers.dart';
import 'mocks.dart';


void main() {
  testWidgets('Should save a contact', (tester) async {
    final mockContactDao = MockContactDao();
    await tester.pumpWidget(ByteBankApp(contactDao: mockContactDao,));

    final dashboard = find.byType(Dashboard);
    expect(dashboard, findsOneWidget);

    final transferFeatureItem = find.byWidgetPredicate((widget) =>
        featureItemMatcher(widget, 'Transfer', Icons.monetization_on));
    expect(transferFeatureItem, findsOneWidget);
    await tester.tap(transferFeatureItem);
    // await tester.pumpAndSettle();
    for (int i = 0; i < 5; i++) {
      await tester.pump(Duration(seconds: 1));
    }

    final contactsList = find.byType(ContactsList);
    expect(contactsList, findsOneWidget);

    // verify(mockContactDao.findAll()).called(0);

    final fabNewContact = find.widgetWithIcon(FloatingActionButton, Icons.add);
    expect(fabNewContact, findsOneWidget);
    await tester.tap(fabNewContact);
    // await tester.pumpAndSettle();
    for (int i = 0; i < 5; i++) {
      await tester.pump(Duration(seconds: 1));
    }

    final contactForm = find.byType(ContactForm);
    expect(contactForm, findsOneWidget);

    final nameTextField = find.byWidgetPredicate((widget) {
      if(widget is TextField){
        return widget.decoration?.labelText == 'Full name';
      }
      return false;
    });
    expect(nameTextField, findsOneWidget);
    await tester.enterText(nameTextField, 'Alex');

    final accountNumberTextField = find.byWidgetPredicate((widget) {
      if(widget is TextField){
        return widget.decoration?.labelText == 'Account number';
      }
      return false;
    });
    expect(accountNumberTextField, findsOneWidget);
    await tester.enterText(accountNumberTextField, '1000');

    final createButton = find.widgetWithText(ElevatedButton, 'Create');
    expect(createButton, findsOneWidget);
    await tester.tap(createButton);
    // await tester.pumpAndSettle();
    // for (int i = 0; i < 10; i++) {
    //   await tester.pump(Duration(seconds: 1));
    // }


    // obs: O TESTE DEVERIA ENCONTRAR CONTACTSLIST, PORÉM ESTÁ ENCONTRADO CONTACTFORM
    final contactsListBack = find.byType(ContactForm);
    expect(contactsListBack, findsOneWidget);


    // final contactsListBack = find.byType(ContactsList);
    // expect(contactsListBack, findsOneWidget);


  });
}
