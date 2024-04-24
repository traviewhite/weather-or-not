import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ color: 'white', fontSize: 34, fontWeight: 800 }}>WeatherOrNot</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(53, 34, 77)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
