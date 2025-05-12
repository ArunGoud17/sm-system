import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './TransportScreen.styles'; // Import styles from the styles file

const busRoutes = [
  {
    id: '1',
    name: 'Route 1',
    driver: 'Mr. Rakesh',
    stops: ['Mayapur', 'Kukatpally', 'Balanagar'],
    coordinates: [
      { latitude: 17.4908, longitude: 78.3125, title: 'Mayapur' },
      { latitude: 17.4872, longitude: 78.3915, title: 'Kukatpally' },
      { latitude: 17.4552, longitude: 78.4483, title: 'Balanagar' },
    ],
  },
  {
    id: '2',
    name: 'Route 2',
    driver: 'Mr.raju',
    stops: ['Kompally', 'Medchal', 'Begumpet', 'Secunderabad'],
    coordinates: [
      { latitude: 17.547, longitude: 78.4896, title: 'Kompally' },
      { latitude: 17.6315, longitude: 78.4817, title: 'Medchal' },
      { latitude: 17.444, longitude: 78.4605, title: 'Begumpet' },
      { latitude: 17.4399, longitude: 78.4983, title: 'Secunderabad' },
    ],
  },
];

const TransportScreen = ({ navigation }) => {
  const handleRoutePress = (route) => {
    navigation.navigate('MapRoute', { route });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🚌 Transport</Text>
        <Text style={styles.subtitle}>Tap a route to view map and stops</Text>
      </View>
      <FlatList
        data={busRoutes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleRoutePress(item)}>
            <Text style={styles.routeName}>{item.name}</Text>
            <Text style={styles.driver}>Driver: {item.driver}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default TransportScreen;
