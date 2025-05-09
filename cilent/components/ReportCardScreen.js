// ReportCardScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const subjects = [
  {
    title: 'Mathematics',
    final: '92%',
    unitTests: ['UT1: 23/25', 'UT2: 21/25'],
  },
  {
    title: 'Science',
    final: '88%',
    unitTests: ['UT1: 22/25', 'UT2: 20/25'],
  },
  {
    title: 'Social Studies',
    final: '91%',
    unitTests: ['UT1: 24/25', 'UT2: 22/25'],
  },
  {
    title: 'Hindi',
    final: '85%',
    unitTests: ['UT1: 20/25', 'UT2: 19/25'],
  },
  {
    title: 'Computer Science',
    final: '95%',
    unitTests: ['UT1: 25/25', 'UT2: 24/25'],
  },
];

export default function ReportCardScreen() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>📊 Report Card</Text>
        <Text style={styles.subHeader}>Tap a subject to view results</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {subjects.map((subject, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => toggleExpand(index)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{subject.title}</Text>
              <AntDesign
                name={expandedIndex === index ? 'up' : 'down'}
                size={20}
                color="black"
              />
            </View>
            {expandedIndex === index && (
              <View style={styles.cardBody}>
                <Text style={styles.resultTitle}>Final Result</Text>
                <Text style={styles.resultText}>{subject.final}</Text>
                <Text style={styles.resultTitle}>Unit Tests</Text>
                {subject.unitTests.map((ut, i) => (
                  <Text key={i} style={styles.resultText}>{ut}</Text>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  headerContainer: {
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
  header: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subHeader: {
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
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardBody: {
    marginTop: 10,
  },
  resultTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  resultText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
    marginTop: 4,
  },
});