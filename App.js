import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import Header from "./components/Header";
import TaskInput from "./components/Taskinput";
import Task from "./components/Finder";

export default function App() {
  const lista = [
    { id: "1", text: "Hacer tarea de movil" },
    { id: "2", text: "Estudiar para el examen" },
    { id: "3", text: "Ir al gym" },
  ];

  return (
    <View style={styles.container}>
      <Header></Header>
      <TaskInput></TaskInput>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task text={item.text} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});
