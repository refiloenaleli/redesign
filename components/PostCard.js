import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import Avatar from './Avatar';
import { Ionicons } from '@expo/vector-icons';

export default function PostCard({ post }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.4, duration: 120, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
  };

  const getImageSource = (img) => {
    if (!img) return null;
    if (typeof img === 'number') return img;
    return { uri: img };
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Avatar source={post.profilePic} size={48} />
        <View style={styles.headerText}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.time}>Just now • Maseru, Lesotho</Text>
        </View>
      </View>

      <Text style={styles.content}>{post.content}</Text>

      {post.type === 'image' && post.image && (
        <Image source={getImageSource(post.image)} style={styles.media} resizeMode="cover" />
      )}

      {post.type === 'video' && post.video && (
        <Video
          source={post.video}
          style={styles.media}
          useNativeControls
          resizeMode="cover"
          isLooping
        />
      )}

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={handleLike}>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Ionicons name={liked ? "heart" : "heart-outline"} size={28} color={liked ? "#FF5252" : "#86C5FF"} />
          </Animated.View>
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="chatbubble-outline" size={28} color="#86C5FF" />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn}>
          <Ionicons name="share-social-outline" size={28} color="#86C5FF" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 14,
    marginVertical: 12,
    borderRadius: 24,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FFA62B',
    shadowColor: '#2E5AA7',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 15,
  },
  header: { flexDirection: 'row', alignItems: 'center' },
  headerText: { marginLeft: 14 },
  username: { fontSize: 17, fontWeight: '700', color: '#2E5AA7' },
  time: { fontSize: 12, color: '#86C5FF' },
  content: { marginVertical: 14, fontSize: 16, lineHeight: 24, color: '#2E5AA7' },
  media: { width: '100%', height: 320, borderRadius: 20, marginTop: 8 },
  actions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 16, borderTopWidth: 1, borderTopColor: '#FFA62B', paddingTop: 16 },
  actionBtn: { alignItems: 'center' },
  actionText: { fontSize: 14, marginTop: 6, color: '#FFA62B', fontWeight: '700' },
});