import { StatusBar } from 'expo-status-bar'
import { Text, View, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  return (
    <View className="flex-1 justify-center items-center bg-purple-400 dark:bg-purple-900">
      <Text className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">Welcome to</Text>
      <Text className="p-2 text-5xl font-extrabold text-neutral-800 dark:text-neutral-300">WeatherOrNot</Text>

      <StatusBar style="auto" />

      <LinearGradient className='h-full top-0 right-0 left-0 absolute' colors={['rgba(93, 56, 140, 0.5)', 'transparent']}></LinearGradient>
    </View>
  )
}

export default App
