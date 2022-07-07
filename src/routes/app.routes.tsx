import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard, Register } from '../screens';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const AppRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: RFValue(70),
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.body,
          borderTopColor: 'none',
        },
      }}>
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Categories"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export { AppRoutes };
