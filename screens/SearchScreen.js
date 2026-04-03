import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

const allPosts = [
  { id: '1', username: 'Rethabile Seiso', profilePic: require('../assets/profile-rethabile.jpg'), content: 'Morning rugby training was fire 🔥', type: 'text' },
  { id: '2', username: 'Lineo Motaung', profilePic: require('../assets/profile-lineo.jpg'), content: 'Just finished my assignment for BIMP2210!', type: 'text' },
  { id: '3', username: 'Ayla Mohapi', profilePic: require('../assets/profile-ayla.jpg'), content: 'The mountains in Lesotho are calling ☀️', type: 'text' },
  { id: '4', username: 'Refiloe Naleli', profilePic: require('../assets/profile-refiloe.jpg'), content: 'Rugby practice highlights from yesterday!', type: 'image', image: require('../assets/post-rugby.jpg') },
];

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <Text style={styles.title}>Search</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search posts or users..."
          placeholderTextColor="#86C5FF"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No results found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6' },
  searchHeader: { padding: 16, backgroundColor: '#FEF7E6', borderBottomWidth: 2, borderBottomColor: '#FFA62B' },
  title: { fontSize: 28, fontWeight: '700', color: '#2E5AA7', marginBottom: 16 },
  searchInput: { backgroundColor: '#FFFFFF', padding: 12, borderRadius: 999, fontSize: 16, color: '#2E5AA7', borderWidth: 2, borderColor: '#FFA62B' },
  emptyText: { textAlign: 'center', marginTop: 40, fontSize: 16, color: '#86C5FF' },
});