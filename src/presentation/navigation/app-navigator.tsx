import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from '../../shared/config/routes';

import {HomeScreen, PinDetail} from '../screens';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={routes.pinDetail} component={PinDetail} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
