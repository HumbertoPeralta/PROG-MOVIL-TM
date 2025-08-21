import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, } from 'react-native';

export default function Task({ text }) {
  return (<Text style={styles.item}>• {text}</Text>
    
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
  },
});