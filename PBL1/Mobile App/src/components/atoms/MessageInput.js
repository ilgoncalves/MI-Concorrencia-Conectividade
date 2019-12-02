import React from 'react'
import { Platform, View } from 'react-native'
import { Input } from 'react-native-elements'


const styles = {
  inputContainerStyle: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
    // minHeight: 60,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',

  },
  inputStyle: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '400',
    fontFamily: 'Avenir-Book',
    color: '#444444',
    marginLeft: 8
  }
}

function MessageInput({ placeholder, onSend, inputContainerStyle, ...props }) {
  return (
    <Input
      {...props}
      placeholder={placeholder}
      containerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      underlineColorAndroid='rgba(0,0,0,0)'
      inputStyle={styles.inputStyle}
      autoCompleteType='off'
      spellCheck={false}
      autoCapitalize='none'
      placeholderTextColor='#44444445'
      inputContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#00000000',
      }}
    />
  )
}
export { MessageInput }
