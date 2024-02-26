import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingInScreen from '../screens/SingInScreen/SingInScreen';
import SingUpScreen from '../screens/SingUpScreen/SingUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen/CustomerScreen';
import VendorScreen from '../screens/VendorScreen/VendorScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SingInScreen} />
        <Stack.Screen name="SignUp" component={SingUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Customer" component={CustomerScreen} />
        <Stack.Screen name="Vendor" component={VendorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
