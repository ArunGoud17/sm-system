// EventsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const eventsData = [
  {
    id: '1',
    title: 'Annual Sports Day',
    date: '2025-05-10',
    description: 'A full day of sports events for all grades.',
  },
  {
    id: '2',
    title: 'Science Exhibition',
    date: '2025-06-15',
    description: 'Students will present their science projects.',
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting',
    date: '2025-07-01',
    description: 'Parents meet teachers to discuss student progress.',
  },
];

const EventsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎉 Events</Text>
        <Text style={styles.subtitle}>Upcoming school events</Text>
      </View>

      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
            <Text style={styles.eventDesc}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

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
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4e73df',
  },
  eventDate: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  eventDesc: {
    fontSize: 13,
    color: '#777',
    marginTop: 6,
  },
});

export default EventsScreen;
