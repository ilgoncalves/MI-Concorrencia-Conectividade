import React from 'react';
import { View, ScrollView } from 'react-native';
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
  return (
    <View style={styles.container}>
      <LogoHeader title='Todos Dispositivos' />
      <ScrollView contentContainerStyle={styles.content}>
        <CollapsibleList sections={SECTIONS} />
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