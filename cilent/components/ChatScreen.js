import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const initialMessages = [
  { id: '1', sender: 'Teacher', message: 'Hello students, reminder about tomorrow’s test.' },
  { id: '2', sender: 'You', message: 'Thank you for the update!' },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      id: Date.now().toString(),
      sender: 'You',
      message: inputText.trim(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>💬 Chat</Text>
        <Text style={styles.subtitle}>Talk with your teachers or classmates</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        renderItem={({ item }) => (
          <View style={[styles.messageBubble, item.sender === 'You' ? styles.sent : styles.received]}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.message}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe' },
  header: {
    backgroundColor: '#4e73df',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#e0e0e0', marginTop: 4 },

  chatContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#e1ecf9',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  sender: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4e73df',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ChatScreen;
