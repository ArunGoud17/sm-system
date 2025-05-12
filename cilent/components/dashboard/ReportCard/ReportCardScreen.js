import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, LayoutAnimation, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './ReportCardScreen.styles'; 

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
