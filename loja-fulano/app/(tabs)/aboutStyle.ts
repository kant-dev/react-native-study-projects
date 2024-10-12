import { StyleSheet } from "react-native";

export const AboutStyle = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 24,
        marginBottom: 20
      },
      description: {
        fontSize: 16,
        marginBottom: 20
      },
      linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
      },
      link: {
        fontSize: 14,
        color: '#333'
      }
})