import React from 'react'
import { View, Image, Text } from 'react-native'
import Theme from '../theme/Theme'

function TabBarIcon({ children, focused, shouldRenderNotifications }) {
  renderNotifications = (shouldRender) => {
    if (shouldRender) {
      return (
        <View
          style={styles.circleNotification}
        >
          <Text
            style={styles.text}
          >
            {`${1}`}
          </Text>
        </View>
      )
    }
  }
  return (
    <>
      <View
        style={[styles.indicatorActived, { backgroundColor: focused ? '#FFF' : 'transparent' }]}
      />
      {renderNotifications(shouldRenderNotifications)}
      {
        children && children
      }
    </>
  )
}

const styles = {
  indicatorActived: {
    width: 80,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#78A331',
    marginTop: -8,
    marginBottom: 8
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
    color: '#FFF'
  },
  circleNotification: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    top: 10,
    right: 32,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { TabBarIcon }