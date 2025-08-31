import React from 'react';

import Home from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { Colors } from './src/constants/Colors';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primary} />
      <StackNavigation/>
    </NavigationContainer>
  );
}
