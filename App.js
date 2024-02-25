import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>數位二甲 楊心宇</Text>
      <Text style={styles.font2}>111119002</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4E1E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 40,
    color:'#5E005E',
  },
  font2:{
    fontSize: 25,
    color:'#003E3E'
  }
});
