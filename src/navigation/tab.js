import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {TabDark, Primary, White38} from 'assets/colors';
import * as images from 'assets/images';
import * as screens from 'screens';

const Tab = createBottomTabNavigator();

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const TabIcon = styled(Icon)`
  width: 24px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

const TabCircle = styled.TouchableOpacity`
  position: relative;
  bottom: 28px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${Primary};
  box-shadow: 0px 10px 10px ${Primary};
  elevation: 5;
  justify-content: center;
  align-content: center;
`;

export default () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: Primary,
      inactiveTintColor: White38,
      labelStyle: {
        fontSize: 12,
        lineHeight: 15,
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      tabStyle: {
        height: 56,
      },
      style: {
        backgroundColor: TabDark,
        borderTop: 0,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={screens.Home}
      options={{
        tabBarLabel: '홈',
        tabBarIcon: ({focused}) => (
          <Icon
            source={focused ? images.HomeActive : images.HomeActive}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="CapsuleSelect"
      component={screens.CapsuleSelect}
      options={{
        tabBarLabel: '',
        showLabel: false,
        tabBarButton: ({onPress}) => (
          <TabCircle activeOpacity={0.95} onPress={onPress}>
            <TabIcon source={images.Plus} resizeMode="contain" />
          </TabCircle>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={screens.Profile}
      options={{
        tabBarLabel: '프로필',
        tabBarIcon: ({focused}) => (
          <Icon
            source={focused ? images.Profile : images.Profile}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
);
