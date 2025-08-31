import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { EllipsisVertical, MapPin } from 'lucide-react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

export default function MomentCard({ moment }) {
  const [showAll, setShowAll] = useState(false);

  const imagesToShow = showAll ? moment.images : moment.images.slice(0, 8);

  return (
    <View style={styles.momentCard}>
      {/* Header: Date + Emoji */}
      <View style={styles.momentHeader}>
        <Text style={styles.momentDate}>{moment.date}</Text>
        <Text style={styles.momentEmoji}>{moment.emoji}</Text>
        <TouchableOpacity>
          <EllipsisVertical size={20} color={Colors.textDark} />
        </TouchableOpacity>
      </View>

      {/* Location */}
      <View style={styles.locationRow}>
        <MapPin size={14} color={'red'} />
        <Text style={styles.location}>{moment.location}</Text>
      </View>

      {/* Content */}
      <Text style={styles.momentText}>{moment.content}</Text>

      {/* Images */}
      <View style={styles.momentImages}>
        {imagesToShow.map((img, index) => (
          <View key={index} style={styles.momentImageBox}>
            <Image
              source={moment.image} // update: assuming you're passing image objects directly
              style={styles.momentImage}
            />
            {index === moment.bestMomentIndex && (
              <View style={styles.bestMomentTag}>
                <Text style={styles.bestMomentText}>
                  Best Moment Of The Day
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Show More Button */}
      {moment.images.length > 6 && (
        <TouchableOpacity
          onPress={() => setShowAll(!showAll)}
          style={styles.moreMomentsContainer}
        >
          {!showAll ? (
            <View style={styles.iconRow}>
              <Text style={styles.moreMomentsText}>
                {moment.images.length - 6} More Moments
              </Text>
              <ChevronDown size={16} color={Colors.textDark} />
            </View>
          ) : (
            <View style={styles.iconRow}>
              <Text style={styles.moreMomentsText}>Show Less</Text>
              <ChevronUp size={16} color={Colors.textDark} />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  momentCard: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  momentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  momentDate: { fontWeight: '600', fontSize: 15 },
  momentEmoji: { fontSize: 16 },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    borderColor: Colors.bordercolor,
  },
  location: { fontSize: 13, marginLeft: 5, color: Colors.textDark },
  momentText: {
    fontSize: 14,
    color: Colors.textDark,
    marginVertical: 5,
    textAlign: 'center',
  },
  momentImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginVertical: 10,
  },
  momentImageBox: {
    width: '23%',
    aspectRatio: 4 / 3,
    position: 'relative',
  },
  momentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  bestMomentTag: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  bestMomentText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  moreMomentsText: {
    textAlign: 'center',
    marginTop: 5,
    color: Colors.textDark,
    fontWeight: '600',
  },
  moreMomentsContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  moreMomentsText: {
    color: Colors.textDark,
    fontWeight: '600',
    marginRight: 5,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
