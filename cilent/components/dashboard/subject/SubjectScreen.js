import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from './SubjectScreen.styles'; 

const subjects = [
  { id: '1', name: 'Mathematics', teacher: 'Mr. Arun Goud', icon: require('../../assets/icons/math.png') },
  { id: '2', name: 'Science', teacher: 'Mr. Srikanth Reddy', icon: require('../../assets/icons/science.png') },
  { id: '3', name: 'English Literature', teacher: 'Mr. Katraj Ramu', icon: require('../../assets/icons/english.png') },
  { id: '4', name: 'Social Studies', teacher: 'Mr. Akash Mehta', icon: require('../../assets/icons/social.png') },
  { id: '5', name: 'Hindi', teacher: 'Mr. Sai Teja', icon: require('../../assets/icons/hindi.png') },
  { id: '6', name: 'Computer Science', teacher: 'Mr. Teddy', icon: require('../../assets/icons/computer.png') },
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
