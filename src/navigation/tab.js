import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as screens from 'screens';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={screens.Intro} />
  </Tab.Navigator>
);
