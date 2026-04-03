import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePostModal({ visible, onClose }) {
  const [text, setText] = useState('');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Create Post</Text>
          <TextInput
            style={styles.input}
            placeholder="What's on your mind?"
            multiline
            value={text}
            onChangeText={setText}
          />
          <View style={styles.mediaRow}>
            <TouchableOpacity style={styles.mediaBtn}><Ionicons name="image" size={30} color="#FFA62B" /></TouchableOpacity>
            <TouchableOpacity style={styles.mediaBtn}><Ionicons name="camera" size={30} color="#FFA62B" /></TouchableOpacity>
            <TouchableOpacity style={styles.mediaBtn}><Ionicons name="videocam" size={30} color="#FFA62B" /></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.postBtn} onPress={onClose}>
            <Text style={styles.postBtnText}>Post Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(46,90,167,0.75)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 20, color: '#2E5AA7' },
  input: { height: 150, backgroundColor: '#FEF7E6', borderRadius: 16, padding: 16, fontSize: 16, textAlignVertical: 'top', color: '#2E5AA7' },
  mediaRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  mediaBtn: { padding: 12 },
  postBtn: { backgroundColor: '#FFA62B', padding: 16, borderRadius: 999, alignItems: 'center', marginTop: 10 },
  postBtnText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  closeBtn: { marginTop: 16, alignItems: 'center' },
  closeText: { color: '#86C5FF', fontSize: 16 },
});