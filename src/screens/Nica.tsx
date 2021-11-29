import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import FormInputs from "../components/FormInputs";

const Nica = () => {

  const [producto, setProducto] = useState<string>('');
  const [cantidad, setCantidad] = useState<string>('');
  const [precio, setPrecio] = useState<string>('');
  const [descuento, setDescuento] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);
  
  const CalcularVenta = () => {

    let calculo = parseFloat(cantidad) * parseFloat(precio)
    let caldescuento = calculo * parseFloat(descuento) /100
    let result = calculo - caldescuento
    setResultado(caldescuento)

  }
//   useEffect(CalcularVenta, [descuento]);
  return (

    <View style={styles.container}>

<FormInputs
            title={"Nombre producto"}
            placeholder={"Producto"}
            onChangeText={setProducto}
            />
            <FormInputs
            title={"Cantidad"}
            placeholder={"Cantidad"}
            onChangeText={setCantidad}
            />
            <FormInputs
            title={"Precio del producto"}
            placeholder={"$"}
            onChangeText={setPrecio}
            />
             <FormInputs
            title={"descuento del producto"}
            placeholder={"descuento"}
            onChangeText={setDescuento}
            />
      <TouchableOpacity
                onPress={CalcularVenta}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.text}>La compra de {producto}  con un descuento del {descuento}es de{resultado}</Text>

    </View>
  );
};

export default Nica;

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
    fontSize: 24,
    color: "#034C50",
  },
  container: {
    flex: 1,
    backgroundColor: "#a2e8",
    width: "95%",
    marginLeft: 10,
  },
  botonReset: {
    backgroundColor: '#00C1AC',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 7,
    marginTop: 10
},
textbotonReset: {
    color: '#00514E',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center'
}
});
