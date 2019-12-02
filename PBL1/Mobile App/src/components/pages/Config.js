import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { LogoHeader } from '../molecules';
import { CollapsibleList, FreeRequest } from '../organisms';
import { Api } from '~/services/api'


const SECTIONS = [
  {
    title: 'Afinal, o óleo de coco é saudável?',
    content: 'O assunto é polêmico. Alguns estudos apontam que, em quantidades pequenas, ele emagrece! Mas, devemos ficar atentos!',
  },
  {
    title: 'Queijo branco é magro?',
    content: 'Sim, é top!',
  },
  {
    title: 'Queijo branco é magro?',
    content: 'Sim, é top!',
  },
  {
    title: 'Queijo branco é magro?',
    content: 'Sim, é top!',
  },
  {
    title: 'Queijo branco é magro?',
    content: 'Sim, é top!',
  },
];

function Config({ navigation }) {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  onSend = async () => {
    try {
      setLoading(true);
      if (!topic || !message) {
        setLoading(false);
        return Alert.alert('É necessario digitar topic e uma menssagem!')
      }

      const response = await Api.post('/publish', { topicName: topic, message });
      console.log('RESPONSE PUBLISH TOPIC', response)
      if (response) {
        Alert.alert(`Message enviada com sucesso para o tópico ${topic}!`)
      }
      setLoading(false);
    } catch (error) {
      console.log('ERROR PUBLISH TOPIC', error)
    }
  }
  return (
    <View style={styles.container}>
      <LogoHeader title='Configurações' />
      <ScrollView
        keyboardDismissMode='none'
        contentContainerStyle={styles.content}
      >
        <FreeRequest
          loading={loading}
          setTopic={setTopic}
          topic={topic}
          setMessage={setMessage}
          message={message}
          onSend={onSend}
        />
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EDEDED'
  },
  content: {
    flexGrow: 1,
    padding: 20
  },

}
export { Config };