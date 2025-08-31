import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { MapPin } from 'lucide-react-native';

import Input from '../../components/Input';
import Heading from '../../components/Heading';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import BackBtn from '../../components/BackBtn';

const UserInfo2 = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const navigation = useNavigation();

    const handleContinue = ()=>{
      if(day && month && year && location && gender){
        // navigate to next screen
        navigation.navigate('Relationship')
      }else{
        Alert.alert('Please fill all the fields')
      }
    }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Arrow */}
     <BackBtn/>

        {/* Heading */}
        <Heading>A little about you so we match better</Heading>

        {/* DOB */}
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.dobContainer}>
          <Input
            placeholder="DD"
            value={day}
            onChangeText={setDay}
            style={styles.dobInput}
            keyboardType="numeric"
            maxLength={2}
            textAlign="center"
          />
          <Input
            placeholder="MM"
            value={month}
            onChangeText={setMonth}
            style={styles.dobInput}
            keyboardType="numeric"
            maxLength={2}
            textAlign="center"
          />
          <Input
            placeholder="YYYY"
            value={year}
            onChangeText={setYear}
            style={styles.dobInput}
            keyboardType="numeric"
            maxLength={4}
            textAlign="center"
          />
        </View>

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          {['Male', 'Female', 'Other'].map(g => (
            <TouchableOpacity
              key={g}
              style={[
                styles.genderButton,
                gender === g && styles.genderButtonSelected,
              ]}
              onPress={() => setGender(g)}
            >
              <Text
                style={[
                  styles.genderText,
                  gender === g && styles.genderTextSelected,
                ]}
              >
                {g}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Input
          placeholder="Write here"
          value={location}
          onChangeText={setLocation}
        />
        {/* Location */}
        <Text style={styles.label}>Location (City, Country)</Text>
        <Input
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
        />

        {/* Use Current Location */}
        <TouchableOpacity style={styles.locationOption}>
          <MapPin size={18} color={Colors.locationIcon} />
          <Text style={styles.useCurrentLocation}> Use current location</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Bottom */}
      <View style={styles.bottomContainer}>
        <CustomButton
          style={styles.button}
          title="Continue"
          onPress={handleContinue}
        />
        <Text style={styles.footerText}>
          Who are you open to connecting with?
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 100, // space for bottom button
  },
  backIcon: {
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 22,
    color: Colors.textDark,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 15,
    color: Colors.textDark,
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dobInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  genderButton: {
    flex: 1,
    backgroundColor: Colors.inputBackground,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  genderButtonSelected: {
    backgroundColor: Colors.primaryDark,
  },
  genderText: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  genderTextSelected: {
    color: Colors.textLight,
  },
  locationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  useCurrentLocation: {
    fontSize: 14,
    color: Colors.textDark,
    marginLeft: 5,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
  button: { alignSelf: 'center', width: '50%' },
  footerText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
    color: Colors.textDark,
  },
});

export default UserInfo2;
