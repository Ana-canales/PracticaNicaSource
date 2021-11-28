import React from 'react'
import Home from '../screens/Home';
import HomeWork from '../screens/HomeWork';
import Liquidacion from '../screens/Liquidacion';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TAREAS">
      <Stack.Screen name="LOGIN" component={Home} />
      <Stack.Screen name="TAREAS" component={HomeWork} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f53d3d',
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