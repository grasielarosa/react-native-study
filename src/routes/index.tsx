import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

export const Routes = () => {
  const { userInfo } = useAuth();

  return (
    <NavigationContainer>
      {userInfo?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
