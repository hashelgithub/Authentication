import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, {useState}from 'react'
import Custominput from '../../components/Custominput'
import CustomButton from '../../components/CustomButton'

const NewPasswordScreen = () => {
  
  const[code, setcode] = useState('')
  const[newPassword, setnewPassword] = useState('')

  const onSubmitPress = () => {
    console.warn("onSubmitPressed");
  }
 
  const onSignInPress = () => {
    console.warn("onSignInPress");
  }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.root}>
      
      <Text 
        style={style.title}
      >
        Reset your password
      </Text>
     
      <Custominput 
       placeholder="Code" 
       value={code} 
       setValue={setcode}
      />
      <Custominput 
       placeholder="Enter your new password" 
       value={newPassword} 
       setValue={setnewPassword}
      />
      
      <CustomButton 
      text="Submit" 
      onPress={onSubmitPress}
      />

      <CustomButton 
      text="Back to Sign In" 
      onPress={onSignInPress} 
      type="TERTIARY"
      />
    </View>
    </ScrollView>  
  )
}

const style = StyleSheet.create({
   
   
    title: {
      fontSize: 40,
      textAlign: 'center',
      marginVertical:10,
      
      
    },
   
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    }
})

export default NewPasswordScreen