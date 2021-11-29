import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

const HomeWork = ({ navigation }) => {

  const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])
    
    const crearTarea = () => {      
        setTareas([...tareas,tarea])

    }

    const eliminarTarea = (id: number) => {
      tareas.splice(id, 1)
      getTareas()
        
    }
    const getTareas = () => {
      setTareas([...tareas])
    }

  useEffect(getTareas, [])

  return (
    <ScrollView>
    <View style={styles.containerBase}>
      
      <View style={styles.container}>
        <TextInput

        style={styles.inputs}
        placeholder={"Escriba su Tarea"} 
        onChangeText={setTarea}
        />

        <Button color="#586e85" 
        title="Agregar" 
        onPress={crearTarea} 
        />

      </View>
      {

      tareas.map(lista => (
        <View style={styles.container}>
          <Text style={styles.text}>{lista}</Text>

          <Button 
          color="#7fb7f0" 
          title="ELiminar"
          onPress={() => eliminarTarea(tareas.id)}
          />
        </View>
      ))
      }
    </View>
    </ScrollView>
  )
}

export default HomeWork;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "#000000",
  },
  text: {
    fontSize: 24,
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#beb5c7",
  },
  inputs: {
    backgroundColor: "#beb5c7",
    borderRadius: 8,
    padding: 15,
    textAlign: "right",
    fontSize: 20,
    color: "#004445",
  }
});