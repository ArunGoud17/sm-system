// TransportScreen.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

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
    driver: 'Ms. Pooja',
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
  list: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  routeName: { fontSize: 18, fontWeight: '600', color: '#333' },
  driver: { fontSize: 14, color: '#777', marginTop: 4 },
});
