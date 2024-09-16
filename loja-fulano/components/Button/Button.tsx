import React from 'react'
import { Pressable, Text } from 'react-native'
import { BtnStyle } from './styles'

type ButtoProps = {
      title: string,
      onPress: () => void
}

const Button = ({ title, onPress }: ButtoProps) => {
      return (
            <Pressable
                  onPress={onPress}
                  style={BtnStyle.btn}
            >
                  <Text
                        style={BtnStyle.btnText}
                  >
                        {title}
                  </Text>
            </Pressable>
      )
}

export default Button