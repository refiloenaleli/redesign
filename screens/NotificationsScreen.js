import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const data = [
  { id: '1', type: 'notification', text: 'Sarah liked your post' },
  { id: '2', type: 'friendRequest', text: 'Mike sent you a friend request' },
  { id: '3', type: 'message', text: 'Emma: Hey, are you free tomorrow?' },
];

export default function NotificationsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tab, setTab] = useState('all');

  const filteredData = data.filter(item => {
    const matchesTab = tab === 'all' || 
      (tab === 'requests' && item.type === 'friendRequest') ||
      (tab === 'messages' && item.type === 'message');
    const matchesSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search notifications..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholderTextColor="#86C5FF"
        />
      </View>

      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tab, tab === 'all' && styles.activeTab]} onPress={() => setTab('all')}>
          <Text style={tab === 'all' ? styles.activeTabText : styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tab === 'requests' && styles.activeTab]} onPress={() => setTab('requests')}>
          <Text style={tab === 'requests' ? styles.activeTabText : styles.tabText}>Friend Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, tab === 'messages' && styles.activeTab]} onPress={() => setTab('messages')}>
          <Text style={tab === 'messages' ? styles.activeTabText : styles.tabText}>Messages</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6', padding: 16 },
  header: { fontSize: 28, fontWeight: '700', color: '#2E5AA7', marginBottom: 16 },
  searchContainer: { marginBottom: 16 },
  searchInput: { backgroundColor: '#FFFFFF', padding: 12, borderRadius: 999, fontSize: 16, color: '#2E5AA7', borderWidth: 2, borderColor: '#FFA62B' },
  tabRow: { flexDirection: 'row', marginBottom: 20 },
  tab: { flex: 1, padding: 12, alignItems: 'center', backgroundColor: '#FFFFFF', marginHorizontal: 4, borderRadius: 999, borderWidth: 1, borderColor: '#FFA62B' },
  activeTab: { backgroundColor: '#FFA62B' },
  tabText: { color: '#2E5AA7' },
  activeTabText: { color: '#FFFFFF', fontWeight: '700' },
  item: { backgroundColor: '#FFFFFF', padding: 20, marginBottom: 12, borderRadius: 16, borderWidth: 2, borderColor: '#FFA62B' },
  itemText: { fontSize: 16, color: '#2E5AA7' },
});