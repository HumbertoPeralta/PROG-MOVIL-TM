import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>¡Mi primera app con React native!</Text>
      <Button
      title="Presióname"
      onPress={()=> Alert.alert('¡Hola! Este es mi primer botón')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle:{
    fontsize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
