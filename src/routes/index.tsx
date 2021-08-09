import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './private/app.tab.routes';
import { AuthRoutes } from './public/Auth.routes';
import { useUsers } from '../hooks/Users';

export function Routes() {
  const { user } = useUsers();

  return (
    <NavigationContainer>
      {!user.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
