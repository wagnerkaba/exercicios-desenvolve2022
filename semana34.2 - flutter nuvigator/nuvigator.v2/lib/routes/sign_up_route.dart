
import 'package:flutter/src/widgets/framework.dart';
import 'package:nuvigator/next.dart';
import 'package:proj/screens/signup_screen.dart';

class SignUpRoute extends NuRoute {


  @override
  String get path => 'sign-up';

  @override
  ScreenType get screenType => materialScreenType;

  @override
  Widget build(BuildContext context, NuRouteSettings<Object> settings) {
    return SignupScreen(
      onLoginClick: () => nuvigator.open('login'),
    );
  }

}