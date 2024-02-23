import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Custominput from '../../components/Custominput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setcode] = useState('');

  const onConfirmPressed = () => {
    console.warn('onConfirmPressed');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Text style={style.title}>Confirm your email</Text>

        <Custominput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setcode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
