import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

interface TestProps {
  testing?: boolean;
}

export const Routes = (props: TestProps) => {
  const { userInfo, setUserInfo } = useAuth();

  if (props) {
    Alert.alert(
      'should testing logged?',
      '',
      [
        {
          text: 'Yes',
        },
        {
          text: 'No',
          onPress: () => setUserInfo(undefined),
        },
      ],
      {
        cancelable: true,
      },
    );
  }
  return (
    <NavigationContainer>
      {userInfo?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
