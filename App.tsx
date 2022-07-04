import { StatusBar, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#00011D" />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
