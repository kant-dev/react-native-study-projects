import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Button = () => {
      return (
            <TouchableOpacity style={styles.button}>
                  <Text  style={styles.textBtn}>Comprar</Text>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      button: {
            backgroundColor: '#1192fc',
            padding: 10,
            width: "100%",
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            borderRadius: 5,
      },
      textBtn: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
      }
})