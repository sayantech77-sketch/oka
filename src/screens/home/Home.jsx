import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MomentCard from '../../components/MomentCard';
import Navbar from '../../components/Navbar';
import Feeling from '../../components/Feeling';
const feelings = [
  { label: 'Happy', emoji: '😊' },
  { label: 'Romantic', emoji: '😘' },
  { label: 'Sad', emoji: '😔', selected: true, count: '1.5k' },
  { label: 'Neutral', emoji: '😐' },
  { label: 'Excited', emoji: '🤩' },
];

const moments = [
  {
    date: 'July 07, 2025',
    location: 'Metro Manila, Philippines',
    emoji: '😊',
    content:
      'You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    image: require('../../assets/img1.png'),
    bestMomentIndex: 2,
  },
  {
    date: 'July 27, 2025',
    location: 'Bataan, Philippines',
    emoji: '🏅',
    content:
      'You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.',
    image: require('../../assets/img2.png'),
    images: [7, 8, 9, 10, 11, 12, 12, 345, 678, 890, 433, 22],
    bestMomentIndex: 2,
  },
  {
    date: 'July 27, 2025',
    location: 'Bataan, Philippines',
    emoji: '🏅',
    content:
      'You spent time by the shore — embraced by salty breeze, golden sand, and the gentle heartbeat of the sea.',
    images: [13, 14, 15, 16, 17, 18],
    image: require('../../assets/img3.png'),
    bestMomentIndex: 2,
  },
];

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Feeling Section */}
      <Feeling feelings={feelings} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Moments Feed */}
        {moments.map((moment, i) => (
          <MomentCard key={i} moment={moment} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
