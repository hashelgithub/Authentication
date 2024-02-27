import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const VendorScreen = () => {
  const [shopName, setShopName] = useState('');
  const [modelNo, setModelNo] = useState('');
  const [sparePartName, setSparePartName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [telNo, setTelNo] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('SignIn');
    console.log({
      shopName,
      modelNo,
      sparePartName,
      price,
      location,
      quantity,
      telNo,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.title}>
          Please register your spare part by filling the form below.
        </Text>

        <TextInput
          style={styles.input}
          value={shopName}
          onChangeText={setShopName}
          placeholder="Name of the shop"
        />
        <TextInput
          style={styles.input}
          value={modelNo}
          onChangeText={setModelNo}
          placeholder="Model No of the Vehicle"
        />
        <TextInput
          style={styles.input}
          value={sparePartName}
          onChangeText={setSparePartName}
          placeholder="Name of the spare part"
        />
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Location"
        />
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Quantity"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={telNo}
          onChangeText={setTelNo}
          placeholder="Tel No"
          keyboardType="phone-pad"
        />

        <CustomButton text="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 44,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 15,
  },
});

export default VendorScreen;
