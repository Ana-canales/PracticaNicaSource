import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Inicio para poder hacer el principal la cuenta user y password

const Home = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const validaUser = () => {
    // alert('Hola guapa') para ver si funciona
    // vamos hacer vailidacion para que nos mande ala siguiente ventana

    if (user === "Ana" && password === "12") {
      navigation.navigate("TAREAS");
      alert("acceso");
    } else {
      alert("Contraseña INCORRECTA");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuario</Text>
      <TextInput
        style={styles.inputs}
        placeholder={"Ingrese su Correo"}
        onChangeText={setUser}
        // onChangeText es para que hagarre los datos parq ue lo resiba set user
      />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        style={styles.inputs}
        placeholder={"Ingrese su Contraseña"}
        onChangeText={setPassword}
      />
      <View style={styles.button}>
        <Button
          title="Iniciar"
          onPress={validaUser}
          // para que funcione el boton Y SE PONE TAREAS PARA QUE LLEVE A ESA VENTANA
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 10,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },
  text: {
    fontSize: 34,
    color: "#034C50",
  },
  button: {
    color: "#C4C4C4",
    marginTop: 50,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
});
