import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
      return (
            <Stack screenOptions={{headerShown:  false}}>
                  <Stack.Screen name='index'/>
                  <Stack.Screen name='(tabs)'/>
                  <Stack.Screen name='product/[id]' options={{headerShown: true}}/>
            </Stack>
      )
}

export default RootLayout