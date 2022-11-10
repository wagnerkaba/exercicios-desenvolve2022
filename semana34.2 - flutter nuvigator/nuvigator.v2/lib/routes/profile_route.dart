
import 'package:flutter/src/widgets/framework.dart';
import 'package:nuvigator/next.dart';
import '../screens/profile_screen.dart';

class ProfileRoute extends NuRoute {


  @override
  String get path => 'profile';

  @override
  ScreenType get screenType => materialScreenType;

  @override
  Widget build(BuildContext context, NuRouteSettings<Object> settings) {
    return ProfileScreen();
  }

}