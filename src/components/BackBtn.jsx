import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function BackBtn() {
    const navigation = useNavigation();
    const handleClick = () => {
        if(navigation.canGoBack()){
            navigation.goBack();
        }
    }
  return (
    <TouchableOpacity onPress={handleClick} style={{ marginBottom: 10 }}>
      <ArrowLeft color={Colors.textDark} />
    </TouchableOpacity>
  );
}
