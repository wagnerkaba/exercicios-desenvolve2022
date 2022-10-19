
import 'package:byte_bank/screens/dashboard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main(){
  testWidgets('Should display the main image when Dashboard is opened', (WidgetTester tester) async{
    await tester.pumpWidget(MaterialApp(home: Dashboard()));
    final mainImage = find.byType(Image);
    expect(mainImage, findsOneWidget);
  });

  testWidgets('Should display the first feature when Dashboard is opened', (tester) async {
    await tester.pumpWidget(MaterialApp(home: Dashboard()));
    // verifica se o icone do feature é monetization_on
    final iconTransferFeatureItem = find.widgetWithIcon(FeatureItem, Icons.monetization_on);
    expect(iconTransferFeatureItem,findsOneWidget);
    // verifica se o texto do item é "Transfer"
    final nameTransferFeatureItem = find.widgetWithText(FeatureItem, "Transfer");
    expect(nameTransferFeatureItem, findsOneWidget);
  });

}