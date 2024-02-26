import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import SearchBar from '../../components/SearchBar';

function CustomerScreen() {
  return (
    <View>
      <Text>Part Picker</Text>
      <SearchBar placeholder={'Search'} />
    </View>
  );
}
const style = StyleSheet.create({});

export default CustomerScreen;
