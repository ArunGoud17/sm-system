import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const PersonalInfoScreen = () => {
  const [activeTab, setActiveTab] = useState('Student');

  const personalInfo = {
    enrollmentCode: '23BK5A7207',
    admissionNumber: '23890',
    admissionType: 'Day Scholar',
    dob: '02 JULY 2003',
    school: 'JEEVADAN HIGH SCHOOL',
    class: '10 - A',
    studentName: 'KANCHANPALLY ARUN GOUD',
  };

  const parentInfo = {
    fatherName: 'Mr. kanchanpally shekar goud',
    motherName: 'Mrs. kanchanpally shyamala',
    contact: '+91 9398332987',
    address: 'arungoud1712@gmail.com',
  };

  const academicInfo = {
    group: 'N/A',
    bloodGroup: 'N/A',
    transport: 'Not availed / Route & stop - N/A',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Student':
        return (
          <View style={styles.card}>
            <Text style={styles.label}>Student Name</Text>
            <Text style={styles.value}>{personalInfo.studentName}</Text>

            <Text style={styles.label}>Class</Text>
            <Text style={styles.value}>{personalInfo.class}</Text>

            <Text style={styles.label}>Session</Text>
            <Text style={styles.value}>{personalInfo.session}</Text>

            <Text style={styles.label}>School</Text>
            <Text style={styles.value}>{personalInfo.school}</Text>

            <Text style={styles.label}>Enrollment Code</Text>
            <Text style={styles.value}>{personalInfo.enrollmentCode}</Text>

            <Text style={styles.label}>Admission Number</Text>
            <Text style={styles.value}>{personalInfo.admissionNumber}</Text>

            <Text style={styles.label}>Admission Type</Text>
            <Text style={styles.value}>{personalInfo.admissionType}</Text>

            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.value}>{personalInfo.dob}</Text>
          </View>
        );
      case 'Parents':
        return (
          <View style={styles.card}>
            <Text style={styles.label}>Father's Name</Text>
            <Text style={styles.value}>{parentInfo.fatherName}</Text>

            <Text style={styles.label}>Mother's Name</Text>
            <Text style={styles.value}>{parentInfo.motherName}</Text>

            <Text style={styles.label}>Contact</Text>
            <Text style={styles.value}>{parentInfo.contact}</Text>

            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{parentInfo.address}</Text>
          </View>
        );
      case 'Academics':
        return (
          <View style={styles.card}>
            <Text style={styles.label}>House Group</Text>
            <Text style={styles.value}>{academicInfo.group}</Text>

            <Text style={styles.label}>Blood Group</Text>
            <Text style={styles.value}>{academicInfo.bloodGroup}</Text>

            <Text style={styles.label}>School Transport</Text>
            <Text style={styles.value}>{academicInfo.transport}</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👤 Profile</Text>
        <Text style={styles.subtitle}>Student Details & Info</Text>
      </View>

      <View style={styles.tabContainer}>
        {['Student', 'Parents', 'Academics'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {renderTabContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    backgroundColor: '#4e73df',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    overflow: 'hidden',
  },
  tabButton: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4e73df',
  },
  tabText: {
    color: '#777',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 2,
  },
});
