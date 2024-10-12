import { StyleSheet } from "react-native";

export const IdStyle = StyleSheet.create({
      container: {

            flexDirection: 'row',
            marginBottom: 40,
            gap:10
      },
      image: {
            width: 140,
            height: 160,
            borderRadius: 10,
            backgroundColor: "#ccc"
            // resizeMode: 'cover',
            // marginLeft: 10,
      },
      infoProducts: {
            marginLeft: 10,
            justifyContent: 'center',
            flex: 1,
            // paddingVertical: 10,
      },
      title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
      },
      description: {
            fontSize: 14,
            fontWeight: '500',
            marginBottom: 5,
      },
      price: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 5,
            textAlign: 'right',
      }
})