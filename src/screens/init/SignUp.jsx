import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ alignItems: 'center' }}>
          {/* Heading */}
          <Heading>Welcome to okaBoka</Heading>
          <Text style={styles.subText}>
            Connect with emotionally similar people
          </Text>

          {/* Logo */}
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Subtitle */}
          <Text style={styles.introText}>
            Let’s start with your number your world begins here.
          </Text>
        </View>
        {/* Phone Number Input */}
        <Text style={styles.label}>Phone Number</Text>
        <Input
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          maxLength={10}
          keyboardType="phone-pad"
        />

        {/* OR */}
        <Text style={styles.orText}>or</Text>

        {/* WhatsApp Button */}
        <TouchableOpacity style={styles.whatsappButton}>
          <Text style={styles.whatsappButtonText}>Continue With Whatsapp</Text>
        </TouchableOpacity>

        {/* Send Code Button */}
        <CustomButton
          title="Send Me The Code"
          onPress={() => {
            if(phone.length === 10){
              navigation.navigate('Verification');
            }
          }}
          style={styles.sendButton}
        />

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>We’ll never share your number</Text>
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
  },
  subText: {
    fontSize: 14,
    color: Colors.textDark,
    marginTop: 5,
    textAlign: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginVertical: 30,
  },
  introText: {
    fontSize: 16,
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: Colors.textDark,
    marginBottom: 5,
  },
  orText: {
    marginVertical: 10,
    color: Colors.textDark,
    fontSize: 14,
    textAlign: 'center',
  },
  whatsappButton: {
    backgroundColor: Colors.inputBackground,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  whatsappButtonText: {
    fontSize: 16,
    color: Colors.textDark,
    fontWeight: '500',
  },
  sendButton: {
    marginBottom: 10,
    marginTop: -3,
    alignSelf: 'center',
    width: '50%',
  },
  disclaimer: {
    fontSize: 13,
    color: Colors.textDark,
    textAlign: 'center',
    marginTop: 5,
  },
});
