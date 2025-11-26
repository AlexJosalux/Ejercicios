import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ff6600ff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultado: {
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
  },

  listItem: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
    marginVertical: 5,
  },

  listText: {
    fontSize: 16,
  },

});