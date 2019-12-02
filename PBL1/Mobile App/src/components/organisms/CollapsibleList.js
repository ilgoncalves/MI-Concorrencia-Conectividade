import React, { useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { QuestionItem } from '../molecules';
import Theme from '../theme/Theme';
import { Button } from '../atoms';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native'
import { Api } from '~/services/api'

function CollapsibleList({ sections, myDevice, loadMyDevices }) {
  const [activeSections, setActiveSections] = useState([])
  const [loading, setLoading] = useState(false)
  _renderHeader = (section, index, isActive, sections) => {
    return (
      <QuestionItem
        index={index}
        title={(section.topic_id.topicName) && section.topic_id.topicName}
        hasCollapsibled={isActive}
      />
    );
  }
  subscribe = async (topic_id) => {
    try {
      setLoading(true);
      const user_id = await AsyncStorage.getItem('user_id');
      const response = await Api.post('/subscribeInTopic', { user_id, topic_id });
      console.log('RESPONSE SUBSCRIBEINTOPIC', response)
      if (response) {
        Alert.alert(response.message)
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message)
      console.log('ERROR SUBSCRIBEINTOPIC', error)
    }
  }
  unsubscribe = async (topic_id) => {
    console.log(topic_id)
    try {
      setLoading(true);
      const user_id = await AsyncStorage.getItem('user_id');
      const response = await Api.post('/unsubscribeInTopic', { user_id, topic_id });
      console.log('RESPONSE SUBSCRIBEINTOPIC', response)
      if (response) {
        Alert.alert(response.message)
        loadMyDevices();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(error.message)
      console.log('ERROR SUBSCRIBEINTOPIC', error)
    }
  }
  _renderContent = (section, i, isActive, sections) => {
    return (
      <Animatable.View
        animation='fadeInLeft'
        duration={500}
        style={styles.collapsibleContent}>
        <Animatable.Text
          duration={500}
          easing="ease-out"
          useNativeDriver
          animation={isActive ? 'zoomIn' : ''}
          style={styles.contentText}
        >
          {section.description}
        </Animatable.Text>
        <Animatable.View
          duration={500}
          easing="ease-out"
          useNativeDriver
          animation={isActive ? 'zoomIn' : ''}
          style={{
            paddingTop: 12
          }}
        >
          <Button
            loading={loading}
            label={myDevice ? "Desinscrever" : "Se Inscrever"}
            onPress={() => myDevice ? unsubscribe(section.topic_id._id) : subscribe(section.topic_id._id)}
            colored
          />

        </Animatable.View>
      </Animatable.View>
    );
  }
  _updateSections = activeSections => {
    setActiveSections(activeSections)
  };
  return (
    <Accordion
      sections={sections}
      underlayColor='transparent'
      sectionContainerStyle={styles.sectionContainerStyle}
      activeSections={activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
}

const styles = {
  sectionContainerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginVertical: 7,
  },
  collapsibleContent: {
    flex: 1,
    padding: 18,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  contentText: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '400',
    fontStyle: 'italic',
    color: Theme.primary
  }
}

export { CollapsibleList }