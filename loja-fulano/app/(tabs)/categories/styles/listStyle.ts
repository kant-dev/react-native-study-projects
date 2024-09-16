import { StyleSheet } from "react-native";

export const ListStyle = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 16
      },
      title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16
      },
      item: {
            marginBottom: 8
      },
      productInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between'
      }
})