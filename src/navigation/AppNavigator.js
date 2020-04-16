import React from 'react';

// Navigation Container
import { NavigationContainer } from '@react-navigation/native';
// Bottom Tab Menu
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
