import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const ExamScreen = () => {
  const [exams, setExams] = useState([
    {
      id: '1',
      name: 'Midterm Exam',
      subject: 'Mathematics',
      date: '2025-04-22',
      time: '10:00 AM',
      duration: '2 hours',
      totalMarks: 100,
      syllabus: 'Algebra, Geometry, Trigonometry',
    },
    {
      id: '2',
      name: 'Science Test',
      subject: 'Science',
      date: '2025-04-24',
      time: '9:00 AM',
      duration: '1.5 hours',
      totalMarks: 80,
      syllabus: 'Physics, Chemistry',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.examName}>{item.name}</Text>
        <Text style={styles.subject}>{item.subject}</Text>
      </View>
      <Text style={styles.detail}>📅 {item.date} | 🕙 {item.time}</Text>
      <Text style={styles.detail}>⏱ Duration: {item.duration}</Text>
      <Text style={styles.detail}>📝 Total Marks: {item.totalMarks}</Text>
      <Text style={styles.syllabusLabel}>📚 Syllabus:</Text>
      <Text style={styles.syllabusText}>{item.syllabus}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🗓️ Exams</Text>
        <Text style={styles.subtitle}>Check upcoming exams and syllabus</Text>
      </View>
      <FlatList
        data={exams}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ExamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    backgroundColor: '#4e73df',
    paddingVertical: 24,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 14,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  examName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subject: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4e73df',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  syllabusLabel: {
    marginTop: 8,
    fontWeight: '600',
    color: '#333',
  },
  syllabusText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
