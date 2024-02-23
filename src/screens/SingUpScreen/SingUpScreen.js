import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';

const SingUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Text style={style.registerText}>Register</Text>
        <Text style={style.createText}>Create an account</Text>
        <Custominput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <Custominput placeholder="Email" value={email} setValue={setEmail} />
        <Custominput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <Custominput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={style.text}>
          By registering, you confirm that you accept our
          <Text style={style.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and
          <Text style={style.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Have an account? Login In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  registerText: {
    fontSize: 44,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  createText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SingUpScreen;
