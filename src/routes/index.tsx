import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './private/app.tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
