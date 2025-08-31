import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';

export default function AddMoment() {
  const [imageUri, setImageUri] = useState(null);


async function requestCameraPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs camera permission to take pictures',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true; // iOS handled via Info.plist
}

  const handleGallery = () => {
    console.log("Gallery");
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      (response) => {
        if (!response.didCancel && response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const handleCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      console.warn('Camera permission denied');
      return;
    }
  
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };
  

  return (
    <View style={styles.container}>
      {/* Center Image Placeholder or Selected Image */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
        ) : (
          <Image
            source={require('../../assets/user.png')}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>

      {/* Bottom Button Container */}
      <View style={styles.buttonContainer}>
        <CustomButton style={styles.button} title="Gallery" onPress={handleGallery} />
        <CustomButton style={styles.button} title="Camera" onPress={handleCamera} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 15,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 380,
    borderRadius: 12,
    backgroundColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
  },
});
