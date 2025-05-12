import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import styles from './CalendarScreen.styles';

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

export default CalendarScreen;
