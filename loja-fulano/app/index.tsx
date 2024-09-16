import React from 'react'
import { Image, SafeAreaView, Text } from 'react-native'

import { IdxStyles } from './styles'
import Button from '../components/Button/Button'
import { router } from 'expo-router'

const WelcomePage = () => {
      const handleStart = () => {
            router.replace('/home')
      }

      return (
            <SafeAreaView style={IdxStyles.container}>
                  <Image
                        source={require('../assets/logo.png')}
                        resizeMode='cover'
                        style={IdxStyles.logo}
                  />

                  <Text style={IdxStyles.h1}>Loja do Fulano</Text>
                  <Text style={IdxStyles.h2}>Encontre o que procura aqui</Text>

                  <Button 
                        title='Ir para Loja'
                        onPress={handleStart}
                  />
            </SafeAreaView>
      )
}

export default WelcomePage