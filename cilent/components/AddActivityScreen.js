import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation, useRoute } from '@react-navigation/native';

const subjects = ['Math', 'Science', 'History', 'English', 'Physics']; // You can fetch this from props or state if needed

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
        renderItem={({ item }) => <Text style={styles.fileText}>{item.name}</Text>}
      />

      <Button title="Pick Files" onPress={pickFile} />
      <View style={{ height: 20 }} />
      <Button title="Submit Activity" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16, marginTop: 15, marginBottom: 5 },
  subjectButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginVertical: 4,
  },
  subjectSelected: {
    backgroundColor: '#007AFF',
  },
  subjectText: { fontSize: 16 },
  subjectTextSelected: { color: '#fff' },
  fileText: { fontSize: 14, color: '#444', marginVertical: 2 },
});

export default AddActivityScreen;
