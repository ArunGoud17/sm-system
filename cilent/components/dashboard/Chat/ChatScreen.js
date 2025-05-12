import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import styles from './ChatScreen.styles';

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

export default ChatScreen;
