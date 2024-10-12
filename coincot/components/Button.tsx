import { Pressable, StyleSheet, Text } from "react-native"


type ButtonProps = {
      label: string,
      onPress: () => void,
}

export const Button = ({label, onPress} : ButtonProps) => {
      return(
            <Pressable
                  style={styles.container}
                  onPress={onPress}
            >
                  <Text style={styles.text}>{label}</Text>
            </Pressable>
      )
}

const styles = StyleSheet.create({
      container: {
            backgroundColor: '#C0E864',
            borderRadius: 4,
            padding: 15,
            width: '50%',
      },
      text: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
      }
})