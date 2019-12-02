import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, Alert, Text, RefreshControl } from 'react-native';
import { Api } from '~/services/api'
import { LogoHeader } from '../molecules';
import { CollapsibleList } from '../organisms';

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

  onRefresh = () => {
    getAllDevices();

  }

  return (
    <View style={styles.container}>
      <LogoHeader title='Todos Dispositivos' />
      <ScrollView
        contentContainerStyle={[styles.content, (sections.length == 0) && { justifyContent: 'center', }]}
        refreshControl={
          <RefreshControl
            tintColor='#343434'
            refreshing={loading}
            onRefresh={() => this.onRefresh()}
          />
        }
      >
        {
          loading ? (
            <ActivityIndicator size='large' color='#343434' />
          ) : (
              <CollapsibleList sections={sections} />
            )
        }
        {
          ((sections.length == 0) && (!loading)) && (
            <Text
              style={styles.text}
            >
              {`Nenhum dispositivo foi encontrado!`}
            </Text>
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
    padding: 20,

  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  }

}
export { AllDevices };