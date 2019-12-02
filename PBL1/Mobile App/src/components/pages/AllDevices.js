import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Api } from '~/services/api'
import { LogoHeader } from '../molecules';
import { CollapsibleList } from '../organisms';

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
  }
];

function AllDevices({ navigation }) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  getAllDevices = async () => {
    try {
      setLoading(true);

      const response = await Api.get('/getAllDevices');
      console.log('RESPONSE GETALLDEVICES', response)
      if (response) {
        setSections(response)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message)
      console.log('ERROR GETALLDEVICES', error)
    }
  }
  useEffect(() => {
    getAllDevices();
  }, [])

  return (
    <View style={styles.container}>
      <LogoHeader title='Todos Dispositivos' />
      <ScrollView contentContainerStyle={styles.content}>
        {
          loading ? (
            <ActivityIndicator size='large' color='#343434' />
          ) : (
              <CollapsibleList sections={sections} />
            )
        }
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
export { AllDevices };