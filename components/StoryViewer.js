import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StoryViewer({ visible, story, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => onClose(), 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible || !story) return null;

  return (
    <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
      <View style={styles.storyContainer}>
        <Image source={{ uri: story.image }} style={styles.storyImage} />
        <View style={styles.header}>
          <Text style={styles.storyName}>{story.name}</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.futuristicText}>STORY MODE</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: '#2E5AA7', justifyContent: 'center' },
  storyContainer: { flex: 1, position: 'relative' },
  storyImage: { flex: 1, resizeMode: 'cover' },
  header: { position: 'absolute', top: 60, left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  storyName: { color: '#FFFFFF', fontSize: 22, fontWeight: '700' },
  futuristicText: { position: 'absolute', bottom: 100, alignSelf: 'center', color: '#FFA62B', fontSize: 18, fontWeight: '700', letterSpacing: 4 },
});