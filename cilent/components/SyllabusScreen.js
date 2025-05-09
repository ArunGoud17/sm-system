import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const syllabusData = {
  Mathematics: [
    '1. Number Systems',
    '2. Algebraic Expressions',
    '3. Geometry - Lines and Angles',
    '4. Mensuration - Area & Volume',
    '5. Trigonometry Basics',
  ],
  Science: [
    '1. Nutrition in Plants and Animals',
    '2. Chemical Reactions and Equations',
    '3. Motion and Time',
    '4. Acids, Bases and Salts',
    '5. Electricity and Magnetism',
  ],
  'English Literature': [
    '1. Prose - Stories from Around the World',
    '2. Poetry - Romantic Poets',
    '3. Drama - Shakespearean Plays',
    '4. Grammar & Composition',
    '5. Novel Reading - "To Kill a Mockingbird"',
  ],
  'Social Studies': [
    '1. Ancient Civilizations',
    '2. Indian Freedom Struggle',
    '3. Geography - Landforms and Climates',
    '4. Civics - Indian Constitution',
    '5. Economics - Resources and Development',
  ],
  Hindi: [
    '1. अपठित गद्यांश',
    '2. साहित्य - कविताएं और कहानियां',
    '3. व्याकरण - संधि, समास, काल',
    '4. निबंध लेखन',
    '5. पत्र लेखन',
  ],
  'Computer Science': [
    '1. Introduction to Programming',
    '2. HTML & CSS Basics',
    '3. Python Programming',
    '4. Cyber Safety & Security',
    '5. Database Concepts',
  ],
};

const SyllabusScreen = ({ route }) => {
  const { subject } = route.params;
  const syllabus = syllabusData[subject.name] || ['Syllabus not available.'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{subject.name} Syllabus</Text>
      <Text style={styles.teacher}>Instructor: {subject.teacher}</Text>
      <View style={styles.syllabusContainer}>
        {syllabus.map((item, index) => (
          <Text key={index} style={styles.syllabusItem}>
            • {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default SyllabusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  teacher: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  syllabusContainer: {
    paddingTop: 10,
  },
  syllabusItem: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
});
