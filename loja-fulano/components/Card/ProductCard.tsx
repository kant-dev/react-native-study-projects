import React from 'react'
import { Products } from '../../types/productor'
import { Image, Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { CardStyle } from './style';
import Button from '../Button/Button';

type ProductCardProps = {
      data: Products;
}

const ProductCard = ({data} : ProductCardProps) => {

      const handleBuyProduct = () => {

      }

      return (
            <Link href={`/product/${data.id}`} asChild>
                  <Pressable style={CardStyle.container}>
                        <Image 
                              source={{uri: data.image}}
                              resizeMode="cover"
                              style={CardStyle.image}
                        />
                        <View style={CardStyle.infoProducts}>
                              <Text style={CardStyle.title}>{data.title}</Text>
                              <Text style={CardStyle.description}>{data.description}</Text>
                              <Text style={CardStyle.price}>R$ {data.price.toFixed(2)}</Text>
                        </View>
                  </Pressable>
            </Link>
      )
}

export default ProductCard