import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

export default function Navbar() {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>OkaBoka</Text>
      </View>
      <View style={styles.rightIcons}>
        <Text style={styles.bell}>🔔</Text>
        <Image source={require('../assets/user.png')} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
  },
  logo: { width: 40, height: 40 },
  title: { fontWeight: 'bold', fontSize: 18, color: Colors.textDark },
  rightIcons: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  bell: { fontSize: 20 },
  avatar: { width: 35, height: 35, borderRadius: 20 },
});
