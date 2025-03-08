import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

interface JobCardProps {
  onPress: (event: GestureResponderEvent) => void;
}

export default function JobCard({ onPress }: JobCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>
        Job Card
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});