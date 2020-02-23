import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as screens from 'screens';
import {Back} from 'components';
import {Background, White} from 'assets/colors';
import Tab from './tab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Signup">
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
    <Stack.Screen
      name="Signup"
      component={screens.Signup}
      options={({navigation}) => ({
        title: '회원가입',
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: Background,
          borderBottomWidth: 0,
          borderColor: Background,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
        headerTintColor: White,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft: () => <Back onPress={() => navigation.goBack()} />,
      })}
    />
    <Stack.Screen
      name="Welcome"
      component={screens.Welcome}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <Stack.Screen name="BottomTab" component={Tab} />
  </Stack.Navigator>
);
