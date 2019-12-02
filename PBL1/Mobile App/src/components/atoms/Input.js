import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Theme from '../theme/Theme';

function Input({ label, reference, ...rest }) {
  const [hasFocus, setHasFocus] = useState(false);
  return (
    <View
      style={{
        marginVertical: 4
      }}
    >
      <Text style={{ color: Theme.primary, fontSize: 12, marginLeft: 4 }}>{hasFocus ? label : ''}</Text>
      <TextInput
        autoCorrect={false}
        ref={reference}
        disableFullscreenUI
        autoCompleteType='off'
        spellCheck={false}
        autoCapitalize='none'
        placeholderTextColor='#44444445'
        underlineColorAndroid='#00000000'
        placeholder={hasFocus ? '' : label}

        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        style={[styles.input, { borderBottomColor: hasFocus ? Theme.primary : '#D9D9D9' }]}
        {...rest}
      />
    </View>
  );
}

const styles = {
  input: {
    color: '#34343490',
    borderBottomWidth: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.005)',
    // borderRadius: 8,
    height: 45,
    fontSize: 16,
    marginTop: 4,
    paddingLeft: 8,
    paddingRight: 8
  }
}

export { Input };