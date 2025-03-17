import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface SearchJobProps {
  onSearch: (query: string) => void;
}

export default function SearchJob({ onSearch }: SearchJobProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What job are you interested in?"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.subDescription}>Enter the job title or keywords</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
  subDescription: {
    fontStyle: 'italic',
    color: 'gray',
  },
});