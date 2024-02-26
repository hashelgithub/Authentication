/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Navigation from './src/navigation/index';
import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <SafeAreaView style={style.root}>
      {/* <Navigation /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
