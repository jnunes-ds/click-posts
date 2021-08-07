import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ChangePassword, EditProfile } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export function AppSecondaryRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="EditProfile">
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="ChangePassword" component={ChangePassword} />
    </Navigator>
  );
}
