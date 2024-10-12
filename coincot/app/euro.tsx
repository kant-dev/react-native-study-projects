import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { getEUR, getUSD } from '../services/coincotapi'

export default function Euro() {

      const [isLoading, setIsLoading] = useState(true)

      const [currentValue, setCurrentValue] = useState<Number>(0)

      const UpdateCurrency = async() => {
            setIsLoading(true);
            const dolar = await getEUR();
            setIsLoading(false);
            setCurrentValue(dolar);
      }

      useEffect(() => {
            const timeOutDelay = setTimeout(() => {
                  UpdateCurrency();
            }, 5000)

            return () => clearTimeout(timeOutDelay);
      }, [])

      return (
            <View style={styles.container}>
                  <Image
                        source={require('../assets/euro.png')}
                        resizeMode='contain'
                        style={styles.logo}
                  />

                  {
                        isLoading &&
                              <Text style={styles.title}>Verificando Cotação</Text>
                  }

                  {
                        !isLoading &&
                              <>
                                    <Text style={styles.title}>Cotação Euro - EUR/BRL</Text>
                                    <Text style={styles.cotacao}>R$ {currentValue.toFixed(2)}</Text>

                                    <Button label='Atualizar ' onPress={UpdateCurrency} />
                              </>
                  }
            </View>
      )
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0B1C2D',
            paddingHorizontal: 30,
      },
      logo: {
            width: 200,
            height: 180,
      },
      title: {
            color: '#cccccc',
            fontSize: 24,
            marginTop: 30,
      },
      cotacao: {
            color: '#FFF',
            fontSize: 40,
            marginBottom: 50,
      },
})