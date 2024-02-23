import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingInScreen from '../screens/SingInScreen/SingInScreen';
// import SingUpScreen from '../screens/SingUpScreen/SingUpScreen';
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SingInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
