import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import Theme from '../theme/Theme';

function Button({ label, onPress, colored, containerStyle, loading, icon }) {
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
          (icon && !loading) && icon
        }
        {
          loading ? (
            <ActivityIndicator color='#FFF' size={25} />
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
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  }
}

export { Button }