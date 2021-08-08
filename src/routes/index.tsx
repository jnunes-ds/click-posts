import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './private/app.tab.routes';
import { AuthRoutes } from './public/Auth.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
