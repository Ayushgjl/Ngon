import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import OnBoarding from './screens/OnBoarding';
import Success from './screens/Success';
import Error from './screens/Error';
import Search from './screens/Search';
import Esewa from './screens/Esewa';



const Stack = createStackNavigator();
export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} ></Stack.Screen>
        {/* <Stack.Screen name="Onboarding" component={OnBoarding} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Success" component={Success} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Error" component={Error} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Esewa" component={Esewa} options={{headerShown:false}}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
