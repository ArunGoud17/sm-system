import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ClubDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Club Details</Text>
        <Text> the Club Details screen.</Text>
      </View>
    </SafeAreaView>
  );
};

export default ClubDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
});
