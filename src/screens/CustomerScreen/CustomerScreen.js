import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageSelector from '../../components/ImageSelector';
import SearchBar from '../../components/SearchBar';

function CustomerScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = imageUri => {
    setSelectedImage(imageUri);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.description}>
        PartPicker Your Personal Spare Part Locator
      </Text>
      <SearchBar placeholder="search" />
      <Text style={styles.title}>Upload your Image</Text>
      <ImageSelector onSelectImage={handleSelectImage} />
      {selectedImage && (
        <Text style={styles.imageText}>Selected Image: {selectedImage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageText: {
    marginTop: 20,
  },
});

export default CustomerScreen;
