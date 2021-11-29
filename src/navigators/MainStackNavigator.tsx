import React from 'react'
import Home from '../screens/Home';
import HomeWork from '../screens/HomeWork';
import Liquidacion from '../screens/Liquidacion';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nica from '../screens/Nica';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TAREAS">
      <Stack.Screen name="LOGIN" component={Home} />
      <Stack.Screen name="TAREAS" component={HomeWork} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#b2dbd9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="NICA" component={Nica} 
         options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#a2e8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="CALCULO" component={Liquidacion} />
      {/* el stack nos mantiene en la pantalla home 
      para que pasemos a otra ventana nos vamos a home y pegamos el codigo en button  */}
      </Stack.Navigator>
    </NavigationContainer>
     
    )
}

export default MainStackNavigator