import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchBar({value, setValue, placeholder, secureTextEntry}) {
  const handleVoiceRecognition = () => {
    console.log('Voice recognition activated');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity
        onPress={handleVoiceRecognition}
        style={styles.voiceButton}>
        <Icon name="microphone" size={30} color="balck" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  voiceButton: {
    marginLeft: 10,
  },
});

export default SearchBar;
