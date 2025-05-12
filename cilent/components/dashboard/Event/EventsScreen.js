import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import styles from './EventsScreen.styles'; 

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

export default EventsScreen;
