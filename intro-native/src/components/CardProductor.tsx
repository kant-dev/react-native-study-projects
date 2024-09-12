import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import { DataProd } from '../data/data';
import { Button } from './Button';

// Definindo o tipo dos itens
interface Productor {
      id: number;
      image: string;
      name: string;
      price: number;
}

const CardProductor = () => {
      const data: Productor[] =  DataProd; // Garantindo que o 'data' tem o tipo correto

      return (
            <FlatList
                  data={data}
                  renderItem={({ item }: { item: Productor }) => (
                        <View style={styles.card}>
                              <View style={styles.contimage}>
                                    <Image
                                          source={{ uri: item.image }}
                                          resizeMode="cover"
                                          style={styles.image}
                                    />
                              </View>
                              <View style={styles.details}>
                                    <Text style={styles.nameProd}>{item.name}</Text>
                                    <Text style={styles.priceProd}>R$ {item.price}</Text>
                                    <Button/>
                              </View>
                        </View>
                  )}
                  keyExtractor={(item: Productor) => item.id.toString()} // Certificando que a key seja string
            />
      );
};

const styles = StyleSheet.create({
      card: {
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
            gap: 20

      },
      contimage: {
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
      },
      image: {
            width: 100,
            height: 100,
            marginBottom: 10,
      },
      details: {
            flex: 1,
            rowGap: 4,
      },
      nameProd: {
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 5,
      },
      priceProd: {
            fontSize: 16,
            color: "red",
      }
});

export default CardProductor;
