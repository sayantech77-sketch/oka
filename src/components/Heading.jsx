import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const Heading = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.textDark,
  },
});

export default Heading;
