import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './PersonalInfoScreen.styles'; 

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
    session: '2025-2026',
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
      default:
        return null;
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
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
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
