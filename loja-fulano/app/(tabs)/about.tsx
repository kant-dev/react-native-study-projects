import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AboutStyle } from './aboutStyle'

const AboutMe = () => {
  return (
    <SafeAreaView style={AboutStyle.container}>
      <Text style={AboutStyle.title}>About Store</Text>
    </SafeAreaView>
  )
}

export default AboutMe