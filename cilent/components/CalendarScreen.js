import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [activities, setActivities] = useState({});
  const [currentDate] = useState(new Date());

  const navigation = useNavigation();
  const route = useRoute();

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    navigation.navigate('AddActivity', { date: day.dateString });
  };

  useFocusEffect(
    useCallback(() => {
      const newActivity = route.params?.newActivity;
      if (newActivity) {
        const { date, subject, files, status } = newActivity;
        setActivities((prev) => {
          const updated = { ...prev };
          if (!updated[date]) updated[date] = [];
          updated[date].push({ subject, files, status });
          return updated;
        });
        navigation.setParams({ newActivity: undefined });
      }
    }, [route.params?.newActivity])
  );

  const getMarkedDates = () => {
    const marked = {};
    Object.keys(activities).forEach((date) => {
      const hasAbsent = activities[date].some((a) => a.status === 'absent');
      marked[date] = {
        marked: true,
        dots: [
          { color: hasAbsent ? 'red' : '#4e73df' },
        ],
      };
    });
    return marked;
  };

  const renderActivities = () => {
    const activityList = activities[selectedDate] || [];
    return activityList.length > 0 ? (
      <FlatList
        data={activityList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            {item.status === 'absent' ? (
              <Text style={styles.absentText}>❌ Class Off - {item.subject}</Text>
            ) : (
              <>
                <Text style={styles.subjectText}>{item.subject}</Text>
                {item.files?.map((file, i) => (
                  <Text key={i} style={styles.fileText}>{file.name}</Text>
                ))}
              </>
            )}
          </View>
        )}
      />
    ) : (
      <Text style={styles.noActivity}>No activities for this date</Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📅 Calendar</Text>
        <Text style={styles.subtitle}>Tap a date to add/view activities</Text>
      </View>

      <Calendar
        current={currentDate.toISOString().split('T')[0]}
        onDayPress={onDayPress}
        markingType={'multi-dot'}
        markedDates={getMarkedDates()}
        style={styles.calendar}
        theme={{
          todayTextColor: '#4e73df',
          selectedDayBackgroundColor: '#4e73df',
          arrowColor: '#4e73df',
        }}
      />

      <View style={styles.activityContainer}>
        <Text style={styles.sectionTitle}>
          Activities for {selectedDate || 'selected date'}:
        </Text>
        {renderActivities()}
      </View>
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
  calendar: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 1,
    backgroundColor: '#fff',
  },
  activityContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  activityItem: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4e73df',
    marginBottom: 4,
  },
  fileText: {
    fontSize: 13,
    color: '#777',
  },
  absentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
  },
  noActivity: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CalendarScreen;
