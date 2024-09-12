import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

export const Header = () => {
      return (
            <SafeAreaView>
                  <StatusBar/>

                  <View style={styles.container}>
                        <Image
                              source={require('../../assets/hero.jpg')}
                              resizeMode='cover'
                              style={styles.logo}
                        />
                  </View>

            </SafeAreaView>
      )
}

const styles = StyleSheet.create({
      container: {
            height: 'auto',
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
      },
      logo: {
            width: '100%',
            height: 150,

      },
})