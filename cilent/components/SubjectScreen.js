import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const subjects = [
  { id: '1', name: 'Mathematics', teacher: 'Mr. Arun Goud', icon: require('../assets/icons/math.png') },
  { id: '2', name: 'Science', teacher: 'Mr. Srikanth Reddy', icon: require('../assets/icons/science.png') },
  { id: '3', name: 'English Literature', teacher: 'Mr. Katraj Ramu', icon: require('../assets/icons/english.png') },
  { id: '4', name: 'Social Studies', teacher: 'Mr. Akash Mehta', icon: require('../assets/icons/social.png') },
  { id: '5', name: 'Hindi', teacher: 'Mr. Sai Teja', icon: require('../assets/icons/hindi.png') },
  { id: '6', name: 'Computer Science', teacher: 'Mr. Teddy', icon: require('../assets/icons/computer.png') },
];

const SubjectScreen = ({ navigation }) => {
  const renderSubject = ({ item }) => (
    <TouchableOpacity
      style={styles.subjectCard}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('Syllabus', { subject: item })}
    >
      <Image source={item.icon} style={styles.icon} />
      <View>
        <Text style={styles.subjectName}>{item.name}</Text>
        <Text style={styles.teacherName}>{item.teacher}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📚 Subjects</Text>
        <Text style={styles.subtitle}>Tap a subject to view details</Text>
      </View>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={renderSubject}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SubjectScreen;

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
  subjectCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  teacherName: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: '#e6e6e6',
  },
});
