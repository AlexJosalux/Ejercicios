import React from "react";
import { View, Text } from "react-native";
import { appStyles } from "../theme/appStyles";

export default function PantallaSumaArreglo() {
  const numeros = [5, 10, 15, 20, 30];

  const sumar = () => numeros.reduce((t, n) => t + n, 0);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Suma del Arreglo</Text>

      <Text style={appStyles.resultado}>
        Numeros: {numeros.join(", ")}
      </Text>

      <Text style={appStyles.resultado}>Total: {sumar()}</Text>
    </View>
  );
}