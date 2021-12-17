import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FlatEmails from './src/Screens/FlatEmails';
import Email from './src/Screens/Email'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FlatEmails"
          component={FlatEmails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}