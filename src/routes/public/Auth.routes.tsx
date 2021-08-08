import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  RegistrationFirstStep,
  RegistrationSecondStep,
} from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
      <Screen name="RegistrationFirstStep" component={RegistrationFirstStep} />
      <Screen
        name="RegistrationSecondStep"
        component={RegistrationSecondStep}
      />
    </Navigator>
  );
}
