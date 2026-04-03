import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Facebook Redesign</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#8C6E63',
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#3E2522',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    color: '#FFF2DF',
    fontSize: 20,
    fontWeight: '700',
  },
});