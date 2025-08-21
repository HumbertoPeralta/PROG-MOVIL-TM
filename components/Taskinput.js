import { StyleSheet, View, TextInput, Button } from "react-native";

export default function TaskInput() {
  return (
    <View style={styles.container}>
     <TextInput style={styles.input}  placeholder="Escribe una tarea"></TextInput>
     
     <Button title="Agregar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
  },
});