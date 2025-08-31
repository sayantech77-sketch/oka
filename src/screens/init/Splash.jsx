import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  }, []);
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.text}>okaBaka</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    gap: 5,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
