import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { EditProfile, Home, Profile } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export function AppPrimaryRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
}
