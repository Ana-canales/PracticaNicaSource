import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="LOGIN" component={Home} />
      <Stack.Screen name="TAREAS" component={HomeWork} />

      {/* el stack nos mantiene en la pantalla home 
      para que pasemos a otra ventana nos vamos a home y pegamos el codigo en button  */}

      </Stack.Navigator>
    </NavigationContainer>
     
  );
}
