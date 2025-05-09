import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const noticeData = [
  {
    id: '1',
    title: 'Holiday on May 1st',
    date: '2025-04-20',
    description: 'School will remain closed on account of Labour Day.',
  },
  {
    id: '2',
    title: 'Fee Payment Reminder',
    date: '2025-04-18',
    description: 'Kindly pay the term fees before April 30 to avoid late charges.',
  },
  {
    id: '3',
    title: 'New Uniform Guidelines',
    date: '2025-04-15',
    description: 'Students are required to wear the new summer uniform starting May 2.',
  },
];

const NoticeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📢 Notices</Text>
        <Text style={styles.subtitle}>Stay updated with latest announcements</Text>
      </View>

      <FlatList
        data={noticeData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.noticeTitle}>{item.title}</Text>
            <Text style={styles.noticeDate}>{item.date}</Text>
            <Text style={styles.noticeDesc}>{item.description}</Text>
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
  noticeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4e73df',
  },
  noticeDate: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  noticeDesc: {
    fontSize: 13,
    color: '#777',
    marginTop: 6,
  },
});

export default NoticeScreen;
