import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import styles from './ExamScreen.styles'; 

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
