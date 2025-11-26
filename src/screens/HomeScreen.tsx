import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { appStyles } from "../theme/appStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export default function HomeScreen({ navigation }: any) {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Ejercicios</Text>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate("Cuadrado")}
      >
        <Text style={appStyles.buttonText}>Area del Cuadrado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate("SumaArreglo")}
      >
        <Text style={appStyles.buttonText}>Suma de Arreglo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate("DivisionArreglo")}
      >
        <Text style={appStyles.buttonText}>Dividir Arreglo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate("Promedio")}
      >
        <Text style={appStyles.buttonText}>Promedio Alumnos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={appStyles.button}
        onPress={() => navigation.navigate("Acumulador")}
      >
        <Text style={appStyles.buttonText}>Acumulador</Text>
      </TouchableOpacity>
    </View>
  );
}
