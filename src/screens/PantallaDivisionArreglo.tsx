import React from "react";
import { View, Text, FlatList } from "react-native";
import { appStyles } from "../theme/appStyles";

export default function PantallaDivisionArreglo() {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const dividido = arreglo.map(n => n / 5);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Division de Arreglo</Text>

      <Text style={appStyles.title}>Original</Text>
      <FlatList
        data={arreglo}
        renderItem={({ item }) => (
          <View style={appStyles.listItem}>
            <Text style={appStyles.listText}>{item}</Text>
          </View>
        )}
      />

      <Text style={appStyles.title}>Dividido entre 5</Text>
      <FlatList
        data={dividido}
        renderItem={({ item }) => (
          <View style={appStyles.listItem}>
            <Text style={appStyles.listText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}