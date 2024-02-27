import React, {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

function ImageSelector({onSelectImage}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCamera = () => {
    ImagePicker.launchCamera({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setSelectedImage({uri: response.uri});
        onSelectImage(response.uri);
      }
    });
  };

  const handleGallery = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setSelectedImage({uri: response.uri});
        onSelectImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCamera}>
        <Icon name="camera" size={50} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGallery}>
        <Icon name="image" size={50} color="black" />
      </TouchableOpacity>
      {selectedImage && <Image source={selectedImage} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ImageSelector;
