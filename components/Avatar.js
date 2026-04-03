import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ source, size = 40 }) {
  const getSource = (src) => {
    if (typeof src === 'number') return src;
    return { uri: src };
  };

  return (
    <Image
      source={getSource(source)}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: '#FFA62B',
  },
});