import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import Heading from '../../components/Heading';
import BackBtn from '../../components/BackBtn';
import { useNavigation } from '@react-navigation/native';

export default function Freelancer() {
  const [interestedIn, setInterestedIn] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
 const navigation = useNavigation();
 const handleContinue = () => {
   navigation.replace("BottomTabNavigation");
 }
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BackBtn/>

        <Heading style={styles.heading}>
          Let us understand who you're{'\n'}looking for and where you're at.
        </Heading>

        {/* Interested In */}
        <View style={styles.section}>
          <View style={styles.rowLabel}>
            <Text style={styles.sectionLabel}>Interested In</Text>
            <Text style={styles.sectionSubLabel}>
              (Who’s energy do you connect with?)
            </Text>
          </View>
          <View style={styles.genderContainer}>
            {['Male', 'Female', 'Other'].map(g => (
              <TouchableOpacity
                key={g}
                style={[
                  styles.genderButton,
                  interestedIn === g && styles.genderButtonSelected,
                ]}
                onPress={() => setInterestedIn(g)}
              >
                <Text
                  style={[
                    styles.genderText,
                    interestedIn === g && styles.genderTextSelected,
                  ]}
                >
                  {g}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Relationship Status */}
        <View style={styles.section}>
          <View style={styles.rowLabel}>
            <Text style={styles.sectionLabel}>Relationship Status</Text>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity
              onPress={() => setRelationshipStatus('single')}
              style={[
                styles.btn,
                relationshipStatus === 'single' && styles.btnSelected,
              ]}
            >
              <Text
                style={[
                  styles.txt,
                  relationshipStatus === 'single' && styles.txtSelected,
                ]}
              >
                Single
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRelationshipStatus('relationship')}
              style={[
                styles.btn,
                relationshipStatus === 'relationship' && styles.btnSelected,
              ]}
            >
              <Text
                style={[
                  styles.txt,
                  relationshipStatus === 'relationship' && styles.txtSelected,
                ]}
              >
                In Relationship
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnRow}>
            <TouchableOpacity
              onPress={() => setRelationshipStatus('married')}
              style={[
                styles.btn,
                relationshipStatus === 'married' && styles.btnSelected,
              ]}
            >
              <Text
                style={[
                  styles.txt,
                  relationshipStatus === 'married' && styles.txtSelected,
                ]}
              >
                Prefer Not to say
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Are you */}
        <View style={styles.section}>
          <View style={styles.rowLabel}>
            <Text style={styles.sectionLabel}>Are you</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.btn,
              styles.btnSelected,
              { alignSelf: 'flex-start', paddingHorizontal: 40 },
            ]}
          >
            <Text style={[styles.txt, styles.txtSelected]}>Freelancer</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: -5 }}>
          <Text style={styles.label}>What kind of work do you do?</Text>
          <Input />
         
        </View>
      </ScrollView>

      {/* Bottom Fixed Area */}
      <View style={styles.fixedBottom}>
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          style={styles.button}
        />
        <Text style={styles.bottomText}>Your very first vibe</Text>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip For Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // space for bottom buttons
  },
  backArrow: {
    fontSize: 22,
    color: Colors.textDark,
    marginBottom: 10,
  },
  heading: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
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
  rowLabel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 5,
    color: Colors.textDark,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  btn: {
    flex: 1,
    backgroundColor: Colors.inputBackground,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnSelected: {
    backgroundColor: Colors.primaryDark,
  },
  txtSelected: {
    color: Colors.textLight,
    fontWeight: '500',
  },
  txt: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  sectionSubLabel: {
    fontSize: 13,
    color: Colors.textDark,
    marginLeft: 4,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    width: '80%',
  },
  bottomText: {
    fontSize: 13,
    color: Colors.textDark,
    marginTop: 10,
  },
  skipText: {
    marginTop: 10,
    fontSize: 15,
    color: Colors.textDark,
    fontWeight: 'bold',
  },
});
