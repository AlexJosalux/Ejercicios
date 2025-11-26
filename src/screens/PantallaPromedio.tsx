import React from "react";
import { View, Text } from "react-native";
import { appStyles } from "../theme/appStyles";

export default function PantallaPromedio() {
  const alumnos = [
    { nombre: "Alex", edad: 19, calificacion: 10 },
    { nombre: "Joel", edad: 20, calificacion: 8 },
    { nombre: " David ", edad: 18, calificacion: 9 },
  ];

  const promedio =
    alumnos.reduce((t, a) => t + a.calificacion, 0) / alumnos.length;

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Promedio Alumnos</Text>

      {alumnos.map((a, i) => (
        <Text key={i} style={appStyles.listText}>
          {a.nombre} — Calificacion: {a.calificacion}
        </Text>
      ))}

      <Text style={appStyles.resultado}>Promedio: {promedio.toFixed(2)}</Text>
    </View>
  );
}
