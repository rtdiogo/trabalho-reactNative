import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/login';
import CadastroScreen from './src/screens/cadastro';
import BemVindo from './src/screens/bemvindo';
import HomeScreen from './src/screens/home'


import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{flex: 1}}>

    {<HomeScreen/>} 
    </View>
  )
}
