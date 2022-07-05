import { StatusBar, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/global/styles/theme';
import { Dashboard, Register, CategorySelectScreen } from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#36344a" />
      <Register />
    </ThemeProvider>
  );
};
export default App;
