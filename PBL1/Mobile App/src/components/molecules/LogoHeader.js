import React from 'react';
import { View, Image, Text } from 'react-native';
import { images } from '~/constants';
import Theme from '../theme/Theme';

function LogoHeader({ title }) {
  return (
    <View style={styles.container}>
      <View
        style={styles.title}
      >
        <Text
          style={styles.title}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#EDEDED',
    height: '15%',
    padding: 22,
    paddingTop: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 5,
  },
  title: {
    fontSize: 30,
    color: '#808080',
    fontFamily: 'Cochin',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2,

    elevation: 5,
  }
}

export { LogoHeader };