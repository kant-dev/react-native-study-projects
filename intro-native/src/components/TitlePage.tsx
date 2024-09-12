import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TitlePage = () => {
      return (
            <View>
                  <Text style={styles.text}>Produtos</Text>
            </View>
      )
}

const styles = StyleSheet.create({
      text: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
      }
})