import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'matchers.dart';
import 'mocks.dart';

void main() {
  final mockContactDao = MockContactDao();

  testWidgets('Should display the main image when Dashboard is opened',
      (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(home: Dashboard(contactDao: mockContactDao,)));
    final mainImage = find.byType(Image);
    expect(mainImage, findsOneWidget);
  });

  testWidgets(
      'Should display the transfer feature when Dashboard is opened (maneira de testar #1)',
      (tester) async {
    await tester.pumpWidget(MaterialApp(home: Dashboard(contactDao: mockContactDao,)));
    // verifica se o icone do feature é monetization_on
    final iconTransferFeatureItem =
        find.widgetWithIcon(FeatureItem, Icons.monetization_on);
    expect(iconTransferFeatureItem, findsOneWidget);
    // verifica se o texto do item é "Transfer"
    final nameTransferFeatureItem =
        find.widgetWithText(FeatureItem, "Transfer");
    expect(nameTransferFeatureItem, findsOneWidget);
  });

  testWidgets(
      'Should display the transfer feature when Dashboard is opened (maneira de testar #2)',
      (tester) async {
    await tester.pumpWidget(MaterialApp(home: Dashboard(contactDao: mockContactDao,)));
    final transferFeatureItem = find.byWidgetPredicate((widget) =>
        featureItemMatcher(widget, 'Transfer', Icons.monetization_on));
    expect(transferFeatureItem, findsOneWidget);
  });

  testWidgets(
      'Should display the transaction feed feature when Dashboard is opened',
      (tester) async {
    await tester.pumpWidget(MaterialApp(home: Dashboard(contactDao: mockContactDao,)));
    final transactionFeedFeatureItem = find.byWidgetPredicate((widget) =>
        featureItemMatcher(widget, 'Transaction Feed', Icons.description));
    expect(transactionFeedFeatureItem, findsOneWidget);
  });
}


