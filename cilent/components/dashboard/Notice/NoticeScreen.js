import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import styles from './NoticeScreen.styles'; // Import shared styles

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

export default NoticeScreen;
