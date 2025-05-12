import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ClubDetails.styles';

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
