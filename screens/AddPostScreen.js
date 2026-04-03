import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddPostScreen() {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      alert(`Post created: ${text}`);
      setText('');
    } else {
      alert('Please write something');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        placeholderTextColor="#86C5FF"
        multiline
        value={text}
        onChangeText={setText}
      />
      <View style={styles.mediaRow}>
        <TouchableOpacity style={styles.mediaBtn}><Ionicons name="image" size={30} color="#FFA62B" /></TouchableOpacity>
        <TouchableOpacity style={styles.mediaBtn}><Ionicons name="camera" size={30} color="#FFA62B" /></TouchableOpacity>
        <TouchableOpacity style={styles.mediaBtn}><Ionicons name="videocam" size={30} color="#FFA62B" /></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
        <Text style={styles.postBtnText}>Post Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6', padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 30, color: '#2E5AA7' },
  input: { height: 200, backgroundColor: '#FFFFFF', borderRadius: 28, padding: 20, fontSize: 18, textAlignVertical: 'top', color: '#2E5AA7', borderWidth: 2, borderColor: '#FFA62B' },
  mediaRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 30 },
  mediaBtn: { padding: 12, backgroundColor: '#FFFFFF', borderRadius: 40, borderWidth: 2, borderColor: '#FFA62B' },
  postBtn: { backgroundColor: '#FFA62B', padding: 18, borderRadius: 999, alignItems: 'center', marginTop: 20 },
  postBtnText: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
});