import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';
import PostCard from '../components/PostCard';

const profilePosts = [
  { id: 'p1', username: 'Refiloe Naleli', profilePic: require('../assets/profile-refiloe.jpg'), content: 'Rugby is life! Training hard for the next match 💪', type: 'text' },
  { id: 'p2', username: 'Refiloe Naleli', profilePic: require('../assets/profile-refiloe.jpg'), content: 'Proud to represent Lesotho Rugby!', type: 'image', image: 'https://picsum.photos/id/180/600/400' },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cover}>
        <Image source={{ uri: 'https://picsum.photos/id/1015/800/300' }} style={styles.coverImage} />
        <View style={styles.avatarContainer}>
          <Avatar source={require('../assets/profile-refiloe.jpg')} size={110} />
        </View>
      </View>

      <Text style={styles.name}>Refiloe Naleli</Text>
      <Text style={styles.bio}>Rugby Player | Lesotho National Team ⚡</Text>
      <Text style={styles.location}>Maseru, Lesotho</Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.btnText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your Posts</Text>
      {profilePosts.map(post => <PostCard key={post.id} post={post} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6' },
  cover: { height: 220, position: 'relative' },
  coverImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  avatarContainer: { position: 'absolute', bottom: -55, left: 20, borderWidth: 6, borderColor: '#FFFFFF', borderRadius: 999 },
  name: { fontSize: 28, fontWeight: '700', color: '#2E5AA7', textAlign: 'center', marginTop: 60 },
  bio: { fontSize: 18, color: '#FFA62B', textAlign: 'center', marginTop: 4 },
  location: { fontSize: 16, color: '#86C5FF', textAlign: 'center' },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 30, marginBottom: 20 },
  editBtn: { 
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    borderWidth: 2, 
    borderColor: '#FFA62B', 
    paddingVertical: 14, 
    marginRight: 10, 
    borderRadius: 999, 
    alignItems: 'center' 
  },
  shareBtn: { 
    flex: 1, 
    backgroundColor: '#FFA62B', 
    borderWidth: 2, 
    borderColor: '#FFA62B', 
    paddingVertical: 14, 
    marginLeft: 10, 
    borderRadius: 999, 
    alignItems: 'center' 
  },
  btnText: { color: '#2E5AA7', fontWeight: '700', fontSize: 16 },
  sectionTitle: { fontSize: 22, color: '#2E5AA7', margin: 20, fontWeight: '700' },
});