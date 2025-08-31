import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const CustomButton = ({ title, onPress ,style={}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryDark,
    paddingVertical: 15,
    paddingHorizontal:20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    color: Colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomButton;
