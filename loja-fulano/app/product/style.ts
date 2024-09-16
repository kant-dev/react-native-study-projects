import { StyleSheet } from "react-native";

export const productStyle = StyleSheet.create({
      container: {
            flex: 1,
      },
      scrollArea: {
            flex: 1,
            padding: 10,
      },
      btnArea:{
            padding: 10,
      },
      productImage: {
            width: '100%',
            height: 250,
            resizeMode: 'cover',
            borderRadius: 10,
      },
      title: {
            fontSize: 35,
            fontWeight: 'bold',
            marginVertical: 10,
      },
      description: {
            fontSize: 22,
            marginVertical: 10,
      },
      priceArea: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            borderRadius: 10,
            marginTop: 50,
            backgroundColor: '#cccccc'
      },
      price: {
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 10,
      }
})