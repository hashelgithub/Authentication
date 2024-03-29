import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, text1, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[style.container, style[`container_${type}`]]}>
      <Text style={[style.text, style[`text_${type}`]]}>{text}</Text>
      <Text style={[style.text1, style[`text_${type}`]]}>{text1}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: 'red',
    width: '85%',
    marginHorizontal: 30,
  },
  container_SECONDARY: {
    borderColor: 'red',
    borderWidth: 2,
    width: '85%',
    marginHorizontal: 30,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  text_SECONDARY: {
    color: 'red',
    fontWeight: 'light',
    fontSize: 16,
  },
  text_TERTIARY: {
    color: 'black',
    fontWeight: 'light',
    fontSize: 14,
  },
});

export default CustomButton;
