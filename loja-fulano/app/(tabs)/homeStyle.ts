import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
      },
      list: {
            flex: 1,
            width: '100%',
            padding: 10,
      },
      button: {
            padding: 10,
            backgroundColor: '#333',
            borderRadius: 5,
            marginTop: 10,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
      },
      buttonText: {
            color: '#fff',
            fontWeight: 'bold',
      },
      error: {
            color: '#f00',
            marginBottom: 10,
      },
})