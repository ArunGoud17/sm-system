import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const clubs = [
  { id: '1', name: 'Science Club', icon: 'flask' },
  { id: '2', name: 'Art Club', icon: 'color-palette' },
  { id: '3', name: 'Drama Club', icon: 'theater-masks' },
  { id: '4', name: 'Music Club', icon: 'musical-notes' },
  { id: '5', name: 'Coding Club', icon: 'code' },
];

const ClubsScreen = ({ navigation }) => {
  const renderClub = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ClubDetails', { club: item })}
    >
      <Ionicons name={item.icon} size={32} color="#4e73df" />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎓 Clubs</Text>
        <Text style={styles.subtitle}>Explore your interests and join a club!</Text>
      </View>
      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id}
        renderItem={renderClub}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default ClubsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe' },
  header: {
    backgroundColor: '#4e73df',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#e0e0e0', marginTop: 4 },
  list: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: '600', color: '#333' },
});
