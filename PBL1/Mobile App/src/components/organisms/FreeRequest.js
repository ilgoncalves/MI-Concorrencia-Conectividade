import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Card, Input, Button, MessageInput } from '../atoms';
import Theme from '../theme/Theme';
import * as Animatable from 'react-native-animatable';

function FreeRequest({ setTopic, topic, setMessage, message, onSend, loading }) {
  return (
    <Animatable.View
      animation='fadeInLeft'
      duration={1000}
      style={styles.card}
    >
      <Text
        style={styles.card_text}
      >
        Campo Livre
      </Text>
      <MessageInput
        placeholder='Tópico'
        onChangeText={setTopic}
        value={topic}
      />
      <View style={{ marginVertical: 8 }} />
      <MessageInput
        placeholder='Menssagem'
        inputContainerStyle={{
          minHeight: 80,
        }}
        onChangeText={setMessage}
        value={message}

      />
      <View style={{ marginVertical: 16 }} />
      <Button
        loading={loading}
        label="Enviar"
        onPress={onSend}
        colored
      />
    </Animatable.View>
  );
}

const styles = {
  card: {
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginVertical: 7,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#faf7f7',
    elevation: 2
  },
  card_text: {
    textAlign: 'left',
    color: Theme.primary,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 12
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Black'
  },
  subTitle: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 20
  }
}

export { FreeRequest };