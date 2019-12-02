import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StatusBar, KeyboardAvoidingView, Image, Alert } from 'react-native';
import { TextLink } from '../atoms';
import { images } from '~/constants';
import AsyncStorage from '@react-native-community/async-storage';

import { LoginCard } from '../organisms';
import Theme from '../theme/Theme';
import { Api } from '~/services/api'


function Entrance({ navigation }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  login = async () => {
    try {
      setLoading(true);
      let parse_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!parse_email.test(email)) {
        setLoading(false);
        return Alert.alert('É necessario digitar um email válido!')
      }
      const response = await Api.post('/sessions', { email: email });
      console.log('log', response)
      if (response) {
        const user_id = response._id;
        await AsyncStorage.setItem('user_id', user_id)
        console.log('User_ID', user_id)
        navigation.navigate('MainApp');
      }
      setLoading(false);
    } catch (error) {
      console.log('ERROR LOGIN', error)
    }
  }
  getId = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    return user_id;
  }

  useEffect(() => {
    getId().then(res => {
      if (res) {
        navigation.navigate('MainApp');
      }
    });

  }, [])

  return (
    <ImageBackground
      resizeMode="stretch"
      style={styles.imageBackground}
      imageStyle={{
        opacity: 0.85
      }}
      source={{ uri: 'https://i.pinimg.com/originals/df/f1/9a/dff19ae028ede04052ef8b9e5424c3b1.jpg' }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1
        }}
        enabled
        behavior='padding'
      >
        <StatusBar barStyle='light-content' />
        <View style={styles.container}>
          <View style={styles.divider} />
          <View style={{ marginBottom: 28 }}>
            <Image
              style={{
                width: 354,
                height: 128
              }}
              source={images.LOGO}
            />
          </View>
          <LoginCard
            loading={loading}
            email={email}
            login={login}
            setEmail={setEmail}
          />
          <View style={styles.divider} />
          <TextLink
            onPress={() => console.log('Esqueci a senha')}
          >
            {`Powered by Igor Gonçalves`}
          </TextLink>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = {
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.darkGreen + 40,
  },
  imageBackground: {
    width: '100%',
    flex: 1,
  },
  divider: {
    flex: 0.8
  }
}

export { Entrance };