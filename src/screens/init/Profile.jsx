import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { Colors } from '../../constants/Colors';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          {/* Profile Image */}
          <Image
            source={require('../../assets/user.png')} // Make sure this exists
            style={styles.avatar}
          />

          {/* Heading */}
          <Heading style={styles.heading}>What should we call you?</Heading>
        </View>

        {/* Label */}
        <Text style={styles.label}>Full Name</Text>

        {/* Input */}
        <Input placeholder="Your Name" value={name} onChangeText={setName} />

        {/* Button */}
        <CustomButton
          title="Lets Get To Know You"
          onPress={() => {
            if(name){
              navigation.navigate('UserInfo');
            }
          }}
          style={styles.button}
        />

        {/* Footer */}
        <Text style={styles.footerText}>Your safety is our priority</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
    marginTop:60,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginBottom: 30,
  },
  heading: {
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: Colors.textDark,
  },
  button: {
    width: '70%',
    marginTop: 20,
    alignSelf: 'center',
  },
  footerText: {
    marginTop: 10,
    fontSize: 13,
    color: Colors.textDark,
    textAlign: 'center',
  },
});
