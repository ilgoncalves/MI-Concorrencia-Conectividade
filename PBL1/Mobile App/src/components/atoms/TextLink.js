import React from 'react'

import { TouchableOpacity, Text } from 'react-native'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
  }
}

function TextLink({ children, onPress, containerStyle, textStyle }) {

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text
        style={[styles.text, textStyle]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
export { TextLink }