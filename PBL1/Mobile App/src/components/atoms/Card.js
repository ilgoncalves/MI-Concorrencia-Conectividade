import React from 'react';
import { View } from 'react-native';

function Card({ children, style }) {
  return (
    <View
      style={[styles.card, style]}
    >
      {children}
    </View>
  );
}

const styles = {
  card: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    elevation: 2
  }
}

export { Card };