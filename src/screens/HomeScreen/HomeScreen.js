import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const onCustomerPress = () => {
    navigation.navigate('Customer');
  };
  const onVendorPress = () => {
    navigation.navigate('Vendor');
  };

  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Please select your role</Text>

      <View>
        <CustomButton
          text="I am a Customer"
          onPress={onCustomerPress}
          text1={'I want to search for spare parts'}
        />

        <CustomButton
          text="I am a Vendor"
          onPress={onVendorPress}
          text1={'I want to add shops and spare parts'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 10,
  },
});
export default HomeScreen;
