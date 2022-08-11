import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native';
import React from 'react';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from './src/hooks/auth';
import theme from './src/global/styles/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="#36344a" barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
export default App;
