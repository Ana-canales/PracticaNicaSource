import React from "react";
import { Text, View, Button } from "react-native";

const HomeWork = ({ navigation }) => {

  return (
    <View>
      <Text>HOLA BEBE</Text>
        <Button
          title="REGRESAR"
          onPress={() => navigation.goBack()}
        />
      </View>
  )
}

export default HomeWork