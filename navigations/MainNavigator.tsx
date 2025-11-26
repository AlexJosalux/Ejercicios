import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import PantallaCuadrado from "../src/screens/PantallaCuadrado";
import PantallaSumaArreglo from "../src/screens/PantallaSumaArreglo";
import PantallaDivisionArreglo from "../src/screens/PantallaDivisionArreglo";
import PantallaPromedio from "../src/screens/PantallaPromedio";
import PantallaAcumulador from "../src/screens/PantallaAcumulador";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Cuadrado" component={PantallaCuadrado} />
        <Stack.Screen name="SumaArreglo" component={PantallaSumaArreglo} />
        <Stack.Screen name="DivisionArreglo" component={PantallaDivisionArreglo} />
        <Stack.Screen name="Promedio" component={PantallaPromedio} />
        <Stack.Screen name="Acumulador" component={PantallaAcumulador} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}