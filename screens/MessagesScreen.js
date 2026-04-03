import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../components/Avatar';

const chats = [
  { id: '1', name: 'Rethabile Seiso', avatar: require('../assets/profile-rethabile.jpg'), lastMessage: 'Hey, are we meeting for rugby tomorrow?', time: '10:30' },
  { id: '2', name: 'Lineo Motaung', avatar: require('../assets/profile-lineo.jpg'), lastMessage: 'Did you finish the BIMP2210 assignment?', time: '09:15' },
  { id: '3', name: 'Ayla Mohapi', avatar: require('../assets/profile-ayla.jpg'), lastMessage: 'The mountains were beautiful today!', time: 'Yesterday' },
];

export default function MessagesScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages by name..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="#86C5FF"
        />
      </View>

      <FlatList
        data={filteredChats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem} onPress={() => alert(`Chat with ${item.name} opened`)}>
            <Avatar source={item.avatar} size={50} />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6' },
  searchContainer: { padding: 16, backgroundColor: '#FEF7E6' },
  searchInput: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 999, fontSize: 16, color: '#2E5AA7', borderWidth: 2, borderColor: '#FFA62B' },
  chatItem: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderBottomColor: '#FFA62B', alignItems: 'center' },
  chatInfo: { flex: 1, marginLeft: 12 },
  chatName: { fontSize: 17, fontWeight: '700', color: '#2E5AA7' },
  lastMessage: { fontSize: 14, color: '#86C5FF' },
  time: { fontSize: 12, color: '#86C5FF' },
});