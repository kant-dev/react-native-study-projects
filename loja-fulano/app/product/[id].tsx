import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { productStyle } from './style';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import Button from '../../components/Button/Button';
import { getProductById } from '../../services/products';


const ProductSceren = () => {
      const {id} = useLocalSearchParams()

      const idProduct = parseInt(id as string);

      const product = getProductById(idProduct);
      if(!product) return router.back();

      const handleBuyProduct = () => {
            alert("Aguarde, estamos processando seu pedido...")
      }

      return (
            <SafeAreaView style={productStyle.container}>
                  <Stack.Screen options={{title: 'Produtos'}}/>
                  <ScrollView style={productStyle.scrollArea}>
                        <Image
                              source={{uri: product.image}}
                              resizeMode='cover'
                              style={productStyle.productImage}
                        />
                        <Text style={productStyle.title}>
                              {product.title}
                        </Text>
                        <Text style={productStyle.description}>
                              {product.description}
                        </Text>
                        <View style={productStyle.priceArea}>
                              <Text style={productStyle.price}>
                                    R$ {product.price}
                              </Text>
                        </View>
                  </ScrollView>
                  <View style={productStyle.btnArea}>
                        <Button
                              title='Comprar Agora'
                              onPress={handleBuyProduct}
                        />
                  </View>
            </SafeAreaView>
      )
}

export default ProductSceren;
