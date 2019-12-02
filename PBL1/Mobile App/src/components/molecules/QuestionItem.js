import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from '../atoms';
import * as Animatable from 'react-native-animatable';

import Theme from '../theme/Theme';
import { Icon } from 'react-native-elements';

function QuestionItem({ title, hasCollapsibled, onPress, index }) {
  return (
    <Animatable.View
      animation={((index + 1) % 2 === 0) ? 'fadeInRight' : 'fadeInLeft'}
      duration={700}
      style={
        [styles.card, hasCollapsibled && {
          backgroundColor: Theme.darkGreen,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }]}
    >
      <View
        style={styles.titleContainer}
      >
        <Text
          style={[styles.title, hasCollapsibled && { color: '#FFF' }]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name={hasCollapsibled ? 'chevron-up' : 'chevron-down'}
          type='font-awesome'
          color={hasCollapsibled ? '#FFF' : Theme.primary}
          size={16}
        />
      </View>
    </Animatable.View>
  );
}

const styles = {
  card: {
    borderRadius: 6,
    backgroundColor: '#FFF',
    width: '100%',
    height: 52,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: 12,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'left',
    color: Theme.darkGreen
  },
  iconContainer: {
    paddingRight: 12
  }
}

export { QuestionItem };