import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import LottieView from 'lottie-react-native';

export default function Feeling({ feelings }) {
  return (
    <View style={{ backgroundColor: Colors.primary,paddingVertical:10,gap:10 }}>
      <Text style={styles.sectionTitle}>How I'm Feeling Right Now</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity>
          <ArrowLeft size={20} color={Colors.textDark} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ArrowRight size={20} color={Colors.textDark} />
        </TouchableOpacity>
      </View>
      <View style={styles.feelingContainer}>
        {feelings.map((f, index) => {
          if (index === 2) {
            return (
              <View key={f.label} style={[styles.feelingItem,{marginTop:-60}]}>
                <LottieView
                  autoPlay
                  loop
                  source={require('../assets/animation/sad-emoji.json')}
                  style={styles.feelingLottie}
                />
                <Text
                  style={[
                    styles.feelingLabel,{marginTop:-5,},
                    f.selected && styles.selectedText,
                  ]}
                >
                  {f.label}
                </Text>
                {f.selected && (
                  <Text style={[styles.feelingCount]}>{f.count} users</Text>
                )}
              </View>
            );
          } else {
            return (
              <View key={f.label} style={styles.feelingItem}>
                <Text style={styles.feelingEmoji}>{f.emoji}</Text>
                <Text
                  style={[
                    styles.feelingLabel,
                    f.selected && styles.selectedText,
                  ]}
                >
                  {f.label}
                </Text>
                {f.selected && (
                  <Text style={styles.feelingCount}>{f.count} users</Text>
                )}
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.textDark,
  },
  feelingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  feelingLottie: { width: 80, height: 80 },
  feelingItem: { alignItems: 'center' },
  feelingEmoji: { fontSize: 30 },
  feelingLabel: { marginTop: 4, fontSize: 14, color: Colors.textDark },
  selectedText: { fontWeight: 'bold', color: 'orange' },
  feelingCount: { fontSize: 12, color: Colors.textDark },
});
