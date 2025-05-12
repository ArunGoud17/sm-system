import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './AddActivityScreen.styles';

const subjects = ['Math', 'Science', 'History', 'English', 'Physics'];

const AddActivityScreen = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [files, setFiles] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const date = route.params?.date;

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ multiple: true });
      if (!result.canceled) {
        setFiles([...files, ...result.assets]);
      }
    } catch (error) {
      console.log('Error picking file:', error);
    }
  };

  const handleSubmit = () => {
    if (!selectedSubject) return;

    navigation.navigate('Calendar', {
      newActivity: {
        date,
        subject: selectedSubject,
        files,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity for {date}</Text>

      <Text style={styles.label}>Select Subject</Text>
      {subjects.map((subject) => (
        <TouchableOpacity
          key={subject}
          style={[
            styles.subjectButton,
            selectedSubject === subject && styles.subjectSelected,
          ]}
          onPress={() => setSelectedSubject(subject)}
        >
          <Text
            style={[
              styles.subjectText,
              selectedSubject === subject && styles.subjectTextSelected,
            ]}
          >
            {subject}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Files</Text>
      <FlatList
        data={files}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.fileText}>{item.name}</Text>
        )}
      />

      <TouchableOpacity style={styles.pickFileButton} onPress={pickFile}>
        <Text style={styles.buttonText}>Pick Files</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddActivityScreen;
