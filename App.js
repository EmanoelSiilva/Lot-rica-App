import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './components/Login'
import Tela from './components/BettingScreen'
import Home from './components/HomeScreen'
import Result from './components/ResultScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={Home} />
        <Stack.Screen name='Login'component={Login}/>
        <Stack.Screen name='Resultados' component={Tela}/>
        <Stack.Screen name='Resultados Mega Sena' component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}