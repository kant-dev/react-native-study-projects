import React from 'react'
import { Category } from '../../types/category'
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';

type BannerPros = {
      data: Category;
}

const Banner = ({ data }: BannerPros) => {
      const handleClick = () => {
            router.push(`/categories/${data.id}`)
      }

      return (
            <Pressable style={styles.container} onPress={handleClick}>
                  <Image
                        source={{ uri: data.cover }}
                        resizeMode='cover'
                        style={styles.image}
                  />
                  <View style={styles.bg}>
                  </View>
                  <View style={styles.box}>
                        <Text style={styles.title}>{data.title}</Text>
                  </View>
            </Pressable>
      )
}

export default Banner