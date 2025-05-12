import React from 'react';
import { View, Text, SafeAreaView, Button, Linking } from 'react-native';
import styles from './MapRoute.styles'; 

const MapRouteScreen = ({ route }) => {
  const { coordinates, name, stops } = route.params.route;

  if (!coordinates || coordinates.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>No route coordinates available.</Text>
      </SafeAreaView>
    );
  }

  const lat = coordinates[0].latitude;
  const lon = coordinates[0].longitude;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

  const openMap = () => {
    Linking.openURL(mapUrl).catch(err => {
      console.error("Failed to open map URL:", err);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Stops: {stops.join(', ')}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Map view is not available in this app version.</Text>
        <Button title="Open Map in Browser" onPress={openMap} />
      </View>
    </SafeAreaView>
  );
};

export default MapRouteScreen;
