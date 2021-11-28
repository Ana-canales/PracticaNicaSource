import React, { useState } from "react";
import {StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeWork = ({ navigation }) => {

  const [usuarios, SetUsuarios] = useState([
    {
      // los corchetes significan array y tipar es estring o numeric
        "id": 1,
        "name": "Leanne Grah"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
    },
  ])
  const editarTarea = () => {
    alert("Editar nenes")
  }
  const eliminarTarea = () => {
    alert("Eliminar nenes")
  }

  return (
    <View style={styles.containerBase}>
      {
        usuarios.map(lista =>(
          <View style={styles.container}>
             <Text style={styles.text} key={lista.id}>{lista.name}</Text>
             <Button 
             color="#f53d3d"
             title="Editar"
             onPress={editarTarea}
             />
             <Button
             color="#f53d3d"
             title="Eliminar"
             onPress={eliminarTarea}
             />
          </View>
         
        )) 
  
      }
        {/* <Button
          title="REGRESAR"
          onPress={() => navigation.goBack()}
        /> */}
      </View>
  )
}

export default HomeWork

const styles = StyleSheet.create({
  container: {
    width:'95%',
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'#fa73d6',
    marginBottom: 15,
    paddingVertical:10,
    paddingHorizontal:8,
    borderRadius:10,
    marginLeft:10,
    // marginTop:10,
    borderWidth:3,
    borderColor:'#000000',
  },
  text:{
    fontSize:24,
    // backgroundColor:'#edbe9d'

  },
  containerBase: {
    flex:1,
    backgroundColor:'#ffd1b0'
  }
})