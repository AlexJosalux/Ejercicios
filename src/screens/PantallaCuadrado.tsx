import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { appStyles } from "../theme/appStyles";

export default function PantallaCuadrado() {

  const [lado, setLado] = useState("");
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = () => {
    const n = parseFloat(lado);
    if (!isNaN(n)) setArea(n * n);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Area del Cuadrado</Text>

      <TextInput
        style={appStyles.input}
        placeholder="Ingrese el lado"
        keyboardType="numeric"
        onChangeText={setLado}
      />

      <TouchableOpacity style={appStyles.button} onPress={calcularArea}>
        <Text style={appStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {area !== null && (
        <Text style={appStyles.resultado}>Area: {area}</Text>
      )}
    </View>
  );
}