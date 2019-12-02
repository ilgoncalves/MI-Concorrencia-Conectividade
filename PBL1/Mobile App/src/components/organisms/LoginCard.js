import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { Card, Input, Button } from '../atoms';
import Theme from '../theme/Theme';

function LoginCard({ email, setEmail, login, loading }) {

  return (
    <Card
      style={{
        paddingVertical: 40
      }}
    >
      <Text
        style={[styles.card_text, styles.title]}
      >
        {`Olá,`}
      </Text>
      <Text
        style={[styles.card_text, styles.subTitle]}
      >
        {`Para continuar basta apenas inserir o seu e-mail.`}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          containerStyle={{
            marginVertical: 12
          }}
          label="Digite seu e-mail"
        />
        <View style={{ marginTop: 20 }} />
        <Button
          loading={loading}
          label="Entrar"
          onPress={() => login()}
          colored
        />
        <View style={{ marginBottom: 20 }} />
      </View>
    </Card>
  );
}

const styles = {
  card_text: {
    textAlign: 'center',
    color: Theme.primary
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

export { LoginCard };