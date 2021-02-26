import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../shared/config/routes';

import HomeScreen from '../screens/home';
// TODO: Add forgot screens...

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
