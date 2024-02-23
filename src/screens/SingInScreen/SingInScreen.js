import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Picture from '../../../assets/images/Picture.jpg';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';

const SingInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };
  const onSignUpPress = () => {
    console.warn('onSignUpPress');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Image source={Picture} style={style.Picture} />

        <Text style={style.welcomeText}>Welcome</Text>
        <Text style={style.loginText}>Login To Your Account</Text>
        <Custominput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <Custominput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Picture: {
    width: 450,
    height: 150,
  },
  welcomeText: {
    fontSize: 44,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  loginText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SingInScreen;
