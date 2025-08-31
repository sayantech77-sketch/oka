import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import Heading from '../../components/Heading';
import { Colors } from '../../constants/Colors';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function Verification() {
  const [otpValue, setOtpValue] = useState('');
  const [timer, setTimer] = useState(4);
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Heading style={styles.heading}>Verify your number</Heading>
      <Text style={styles.subText}>We've sent a code to your phone</Text>

      {/* OTP Input */}
      <OtpInput
        numberOfDigits={4}
        onTextChange={setOtpValue}
        autoFocus={false}
        focusColor={Colors.primary}
        blurOnFilled={true}
        keyboardType="numeric"
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusedPinCodeContainerStyle: styles.focusedPinCodeContainer,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
        }}
      />

      {/* Verify Button */}
      <CustomButton
        title="Verify"
        onPress={() => {
          if (otpValue.length == 4) {
            navigation.navigate('Profile');
          } else {
            Alert.alert('Please enter a valid code');
          }
        }}
        style={styles.button}
      />

      {/* Resend Section */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}> Resend</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.timerText}>
        You can request a new code in {timer} seconds
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 70,
  },
  heading: {
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: Colors.textDark,
    marginBottom: 20,
    marginTop: -10,
  },
  otpContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  pinCodeContainer: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.textDark,
  },
  pinCodeText: {
    fontSize: 20,
    color: Colors.textDark,
    fontWeight: 'bold',
  },
  focusedPinCodeContainer: {
    borderColor: Colors.primaryDark,
  },
  filledPinCodeContainer: {
    borderColor: Colors.primary_light,
  },
  button: {
    marginTop: 15,
    width: '60%',
    alignSelf: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  resendText: {
    fontSize: 13,
    color: Colors.textDark,
  },
  resendLink: {
    fontSize: 13,
    color: Colors.textDark,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 12,
    color: Colors.textDark,
    marginTop: 5,
  },
});
