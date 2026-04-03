import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StoryItem from '../components/StoryItem';
import PostCard from '../components/PostCard';
import StoryViewer from '../components/StoryViewer';
import CreatePostModal from '../components/CreatePostModal';

const stories = [
  { id: 'add', name: 'Add Story', avatar: null, isAdd: true },
  { id: '1', name: 'Refiloe Naleli', avatar: require('../assets/profile-refiloe.jpg'), image: 'https://picsum.photos/id/1005/600/600' },
  { id: '2', name: 'Rethabile Seiso', avatar: require('../assets/profile-rethabile.jpg'), image: 'https://picsum.photos/id/64/600/600' },
  { id: '3', name: 'Lineo Motaung', avatar: require('../assets/profile-lineo.jpg'), image: 'https://picsum.photos/id/1011/600/600' },
  { id: '4', name: 'Ayla Mohapi', avatar: require('../assets/profile-ayla.jpg'), image: 'https://picsum.photos/id/1005/600/600' },
  { id: '5', name: 'Thabo Lerotholi', avatar: require('../assets/profile-thabo.jpg'), image: 'https://picsum.photos/id/180/600/600' },
];

const posts = [
  { id: '1', username: 'Rethabile Seiso', profilePic: require('../assets/profile-rethabile.jpg'), content: 'Morning rugby training was fire 🔥 Who’s joining the session tomorrow?', type: 'text' },
  { id: '2', username: 'Lineo Motaung', profilePic: require('../assets/profile-lineo.jpg'), content: 'Just finished my assignment for BIMP2210! Anyone else struggling with React Native?', type: 'text' },
  { id: '3', username: 'Ayla Mohapi', profilePic: require('../assets/profile-ayla.jpg'), content: 'The mountains in Lesotho are calling ☀️', type: 'text' },
  { id: '4', username: 'Thabo Lerotholi', profilePic: require('../assets/profile-thabo.jpg'), content: 'Anyone know where I can get good sesotho music playlists?', type: 'text' },
  { id: '5', username: 'Mpho Khanyile', profilePic: require('../assets/profile-mpho.jpg'), content: 'Proud to be from Maseru! 🇱🇸', type: 'text' },
  { id: '6', username: 'Refiloe Naleli', profilePic: require('../assets/profile-refiloe.jpg'), content: 'Rugby practice highlights from yesterday!', type: 'image', image: require('../assets/post-rugby.jpg') },
  { id: '7', username: 'Rethabile Seiso', profilePic: require('../assets/profile-rethabile.jpg'), content: 'New kit just dropped! What do you guys think?', type: 'image', image: require('../assets/post-kit.jpg') },
  { id: '8', username: 'Refiloe Naleli', profilePic: require('../assets/profile-refiloe.jpg'), content: 'Watch this epic try I scored last weekend!', type: 'video', video: require('../assets/video-post.mp4') },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [postText, setPostText] = useState('');

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStory = () => {
    alert('Add new story');
  };

  const handleCreatePost = () => {
    if (postText.trim()) {
      alert(`Post created: ${postText}`);
      setPostText('');
    } else {
      alert('Write something first!');
    }
  };

  const HeaderComponent = () => (
    <>
      <View style={styles.header}>
        <Image source={require('../assets/app-logo.png')} style={styles.appLogo} />
        <Text style={styles.appTitle}>LESOTHO FB</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search posts..."
          placeholderTextColor="#86C5FF"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <View style={styles.createPostSection}>
        <TextInput
          style={styles.createPostInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#86C5FF"
          multiline
          value={postText}
          onChangeText={setPostText}
        />
        <View style={styles.mediaRow}>
          <TouchableOpacity style={styles.mediaBtn}><Ionicons name="image" size={24} color="#FFA62B" /></TouchableOpacity>
          <TouchableOpacity style={styles.mediaBtn}><Ionicons name="camera" size={24} color="#FFA62B" /></TouchableOpacity>
          <TouchableOpacity style={styles.mediaBtn}><Ionicons name="videocam" size={24} color="#FFA62B" /></TouchableOpacity>
          <TouchableOpacity style={styles.postNowBtn} onPress={handleCreatePost}>
            <Text style={styles.postNowText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.storiesCard}>
        <Text style={styles.storiesTitle}>🌟 STORIES</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
          {stories.map(item => (
            <StoryItem
              key={item.id}
              item={item}
              onPress={() => item.isAdd ? handleAddStory() : setCurrentStory(item)}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={HeaderComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity style={styles.floatingBtn} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={75} color="#FFA62B" />
      </TouchableOpacity>

      <CreatePostModal visible={modalVisible} onClose={() => setModalVisible(false)} />

      <StoryViewer
        visible={!!currentStory && !currentStory.isAdd}
        story={currentStory}
        onClose={() => setCurrentStory(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FEF7E6' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: '#FFA62B' },
  appLogo: { width: 36, height: 36, marginRight: 8 },
  appTitle: { fontSize: 22, fontWeight: '700', color: '#2E5AA7', letterSpacing: 2 },
  searchContainer: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8, backgroundColor: '#FEF7E6' },
  searchInput: { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 999, fontSize: 14, color: '#2E5AA7', borderWidth: 2, borderColor: '#FFA62B' },
  createPostSection: { backgroundColor: '#FFFFFF', marginHorizontal: 16, marginBottom: 8, borderRadius: 20, padding: 12, borderWidth: 2, borderColor: '#FFA62B', shadowColor: '#2E5AA7', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  createPostInput: { height: 60, backgroundColor: '#FEF7E6', borderRadius: 16, padding: 12, fontSize: 14, textAlignVertical: 'top', color: '#2E5AA7' },
  mediaRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 8 },
  mediaBtn: { padding: 8 },
  postNowBtn: { backgroundColor: '#FFA62B', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 999, alignItems: 'center' },
  postNowText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  storiesCard: { backgroundColor: '#FFFFFF', marginHorizontal: 16, marginBottom: 8, borderRadius: 20, padding: 12, borderWidth: 2, borderColor: '#FFA62B', shadowColor: '#2E5AA7', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  storiesTitle: { fontSize: 16, fontWeight: '700', color: '#2E5AA7', marginBottom: 8 },
  storiesScroll: { flexDirection: 'row' },
  floatingBtn: { position: 'absolute', bottom: 80, right: 20, zIndex: 10 },
});