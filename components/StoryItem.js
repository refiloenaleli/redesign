import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from './Avatar';

export default function StoryItem({ item, onPress }) {
  if (item.isAdd) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={[styles.storyRing, styles.addRing]}>
          <Ionicons name="add-circle" size={65} color="#FFA62B" />
        </View>
        <Text style={styles.name}>Add Story</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.storyRing}>
        <Avatar source={item.avatar} size={65} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginRight: 15 },
  storyRing: {
    borderWidth: 4,
    borderColor: '#FFA62B',
    borderRadius: 999,
    padding: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#2E5AA7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  addRing: { borderColor: '#86C5FF' },
  name: { marginTop: 8, fontSize: 13, fontWeight: '700', color: '#2E5AA7' },
});