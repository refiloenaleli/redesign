import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'iPhone 15 Pro', price: 'M12,000', image: 'https://picsum.photos/id/20/300/300', description: 'Brand new, 256GB, excellent condition' },
  { id: '2', name: 'MacBook Air M3', price: 'M28,500', image: 'https://picsum.photos/id/201/300/300', description: 'Latest model, 16GB RAM' },
  { id: '3', name: 'Sony Headphones', price: 'M1,800', image: 'https://picsum.photos/id/180/300/300', description: 'Noise cancelling, black' },
];

export default function MarketplaceScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDetails = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search marketplace..."
          placeholderTextColor="#8C6E63"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>🔥 Top Picks</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 16 }}>
          {filteredProducts.map(p => (
            <TouchableOpacity key={p.id} onPress={() => openDetails(p)} style={styles.topPickCard}>
              <Text style={styles.topPickName}>{p.name}</Text>
              <Text style={styles.topPickPrice}>{p.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>All Listings</Text>
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openDetails(item)} style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      </ScrollView>

      <View style={styles.floatingButtons}>
        <TouchableOpacity style={styles.fab}><Ionicons name="chatbubble" size={24} color="#D3A376" /><Text style={styles.fabText}>Inbox</Text></TouchableOpacity>
        <TouchableOpacity style={styles.fab}><Ionicons name="add-circle" size={24} color="#D3A376" /><Text style={styles.fabText}>Sell</Text></TouchableOpacity>
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.detailModal}>
            {selectedProduct && (
              <>
                <Text style={styles.detailTitle}>{selectedProduct.name}</Text>
                <Text style={styles.detailPrice}>{selectedProduct.price}</Text>
                <Text style={styles.detailDesc}>{selectedProduct.description}</Text>
                <TouchableOpacity style={styles.buyBtn} onPress={() => { setModalVisible(false); alert('Purchase flow started!'); }}>
                  <Text style={styles.buyText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeModal}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF2DF' },
  searchContainer: { padding: 16, backgroundColor: '#FFF2DF' },
  searchInput: { backgroundColor: '#FFE0B2', padding: 16, borderRadius: 999, fontSize: 16, color: '#3E2522', borderWidth: 2, borderColor: '#D3A376' },
  sectionTitle: { fontSize: 20, fontWeight: '700', margin: 16, color: '#3E2522' },
  topPickCard: { backgroundColor: '#FFE0B2', padding: 16, marginRight: 12, borderRadius: 16, width: 140, borderWidth: 3, borderColor: '#D3A376' },
  topPickName: { fontWeight: '700', color: '#3E2522' },
  topPickPrice: { color: '#D3A376', fontWeight: '700' },
  productCard: { flexDirection: 'row', backgroundColor: '#FFE0B2', marginHorizontal: 16, marginBottom: 16, borderRadius: 20, overflow: 'hidden', borderWidth: 3, borderColor: '#D3A376' },
  productImage: { width: 120, height: 120 },
  productInfo: { flex: 1, padding: 16, justifyContent: 'center' },
  productName: { fontSize: 18, fontWeight: '700', color: '#3E2522' },
  productPrice: { fontSize: 20, color: '#D3A376', fontWeight: '700' },
  floatingButtons: { position: 'absolute', right: 16, bottom: 100, gap: 12 },
  fab: { backgroundColor: '#FFE0B2', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 999, borderWidth: 3, borderColor: '#D3A376', flexDirection: 'row', alignItems: 'center' },
  fabText: { marginLeft: 8, fontWeight: '700', color: '#3E2522' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(62,37,34,0.75)', justifyContent: 'center', alignItems: 'center' },
  detailModal: { backgroundColor: '#FFF2DF', padding: 24, borderRadius: 24, width: '90%' },
  detailTitle: { fontSize: 24, fontWeight: '700', color: '#3E2522' },
  detailPrice: { fontSize: 28, color: '#D3A376', marginVertical: 8 },
  detailDesc: { fontSize: 16, color: '#8C6E63', marginTop: 8 },
  buyBtn: { backgroundColor: '#D3A376', padding: 18, borderRadius: 999, alignItems: 'center', marginTop: 20 },
  buyText: { color: '#FFF2DF', fontSize: 18, fontWeight: '700' },
  closeModal: { marginTop: 16, textAlign: 'center', color: '#8C6E63' },
});