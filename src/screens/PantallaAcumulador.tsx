import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { appStyles } from "../theme/appStyles";

export default function PantallaAcumulador() {
    
  const [valor, setValor] = useState(5);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Acumulador</Text>

      <Text style={appStyles.resultado}>{valor}</Text>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => setValor(valor + 1)}
      >
        <Text style={appStyles.buttonText}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => setValor(valor - 1)}
      >
        <Text style={appStyles.buttonText}>Disminuir</Text>
      </TouchableOpacity>
    </View>
  );
}
