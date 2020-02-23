import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from 'screens';
import Tab from './tab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Intro"
      component={screens.Intro}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={screens.Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="BottomTab" component={Tab} />
  </Stack.Navigator>
);
