import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { Home, NewPost } from '../screens';

import HomeSvg from '../assets/home.svg';
import PlusSvg from '../assets/plus-square.svg';
import PersonSvg from '../assets/person.svg';
import { EditProfile } from '../screens/EditProfile/index';

interface Props {
  color: string;
}

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const { subtitle, text, shape } = theme.colors;

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: subtitle,
        inactiveTintColor: text,
        showLabel: false,
        style: {
          height: 85,
          backgroundColor: shape,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }: Props) => (
            <HomeSvg width={28} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarIcon: ({ color }: Props) => (
            <PlusSvg width={28} height={24} fill="transparent" stroke={color} />
          ),
        }}
      />
      <Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarIcon: ({ color }: Props) => (
            <PersonSvg width={28} height={24} fill={color} stroke={color} />
          ),
        }}
      />
    </Navigator>
  );
}
