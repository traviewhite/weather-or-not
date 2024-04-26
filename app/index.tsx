import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button, ScrollView, YStack, YGroup } from 'tamagui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { LinearGradient } from 'expo-linear-gradient'

const App = () => {
  const insets = useSafeAreaInsets()

  return (
    <>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <StatusBar style='auto' />

        <YStack fullscreen inset={insets} justifyContent='center' paddingHorizontal='$6'>
          <YStack alignItems='center'>
            <Text theme='alt1' fontSize='$8' fontWeight='300'>
              Welcome to
            </Text>
            <Text paddingTop='$2' paddingBottom='$4' fontSize='$10' fontWeight='900'>
              WeatherOrNot
            </Text>
            <Text theme='alt1' fontSize='$4' textAlign='center' lineHeight={'$2'}>
              Not just a weather app, but a weather lifestyle. Let WeatherOrNot decide the best outfit options based on
              your personal preferences.
            </Text>
          </YStack>

          <Button theme='purple_active' size={'$5'} marginTop='$10' onPress={() => router.push('/new-user-sign-in')}>
            Begin
          </Button>
        </YStack>
      </ScrollView>
    </>
  )
}

export default App
