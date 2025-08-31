import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/init/Splash';
import SignUp from '../screens/init/SignUp';
import Verification from '../screens/init/Verification';
import Profile from '../screens/init/Profile';
import UserInfo from '../screens/init/UserInfo';
import UserInfo2 from '../screens/init/UserInfo2';
import Relationship from '../screens/init/Relationship';
import Student from '../screens/init/Student';
import Employee from '../screens/init/Employee';
import Freelancer from '../screens/init/Freelancer';
import Others from '../screens/init/Others';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Verification' component={Verification} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='UserInfo' component={UserInfo} />
      <Stack.Screen name='UserInfo2' component={UserInfo2} />
      <Stack.Screen name='Relationship' component={Relationship} />
      <Stack.Screen name='Student' component={Student} />
      <Stack.Screen name='Employee' component={Employee} />
      <Stack.Screen name='Freelancer' component={Freelancer} />
      <Stack.Screen name='Others' component={Others} />
      <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
    </Stack.Navigator>
  )
}