import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ color: 'white', fontSize: 34, fontWeight: 800 }}>WeatherOrNot</Text>
      <LinearGradient colors={['rgba(93, 56, 140, 0.5)', 'transparent']} style={styles.background}></LinearGradient>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})
