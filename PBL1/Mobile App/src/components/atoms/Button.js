import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import Theme from '../theme/Theme';

function Button({ label, onPress, colored, containerStyle, loading }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View
        style={[
          styles.button,
          { backgroundColor: colored ? Theme.darkGreen : '#FFF' },
          containerStyle
        ]}
      >
        {
          loading ? (
            <ActivityIndicator color='#FFF' size={20} />
          ) : (
              <Text
                style={[
                  styles.label,
                  { color: colored ? '#FFF' : Theme.primary }
                ]}
              >
                {label}
              </Text>

            )
        }
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
}

export { Button }