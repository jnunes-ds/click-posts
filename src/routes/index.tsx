import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { AppRoutes } from './private/app.tab.routes';
import { AuthRoutes } from './public/Auth.routes';
import { useUsers } from '../hooks/Users';

export function Routes() {
  const [loading, setLoading] = useState<boolean>(false);
  const { user, checkIfUserIsLogged, getUsers } = useUsers();

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let isMounted = true;
    async function checkUser() {
      try {
        await getUsers();
        setLoading(true);
        if (isMounted) {
          await checkIfUserIsLogged();
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);

      return () => {
        isMounted = false;
      };
    }
    checkUser();
  }, []);

  useEffect(() => {}, [loading]);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {!user.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
