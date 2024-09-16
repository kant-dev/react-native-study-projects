import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
      container: {
            // margin: 10,
            // backgroundColor: '#fff',
            // borderRadius: 10,
            // shadowColor: '#000',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 2,
            // elevation: 2,
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