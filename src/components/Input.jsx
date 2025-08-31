import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const Input = ({ placeholder, value, onChangeText,textAlign="left", style, ...rest }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input, { textAlign: textAlign }]}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.textDark,
    textAlign:"center"
  },
});

export default Input;
