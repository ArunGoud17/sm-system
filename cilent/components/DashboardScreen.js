import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const modules = [
  { name: 'Calendar', image: require('../assets/calendar.png'), route: 'Calendar' },
  { name: 'Subjects', image: require('../assets/subjects.png'), route: 'Subjects' },
  { name: 'Exams', image: require('../assets/exams.png'), route: 'Exams' },
  { name: 'Report Card', image: require('../assets/report-card.png'), route: 'Report Card' },
  { name: 'Fees', image: require('../assets/fees.png'), route: 'Fees' },
  { name: 'Personal Info', image: require('../assets/personal_info.png'), route: 'Personal Info' },
  { name: 'Events', image: require('../assets/events.png'), route: 'Events' },
  { name: 'Notice', image: require('../assets/noticeboard.png'), route: 'Notice' },
  { name: 'Chat', image: require('../assets/chat.png'), route: 'Chat' },
  { name: 'Transport', image: require('../assets/transport.png'), route: 'Transport' },
  { name: 'Clubs', image: require('../assets/clubs.png'), route: 'Clubs' },
];

export default function DashboardScreen({ navigation }) {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredModules, setFilteredModules] = useState(modules);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const user = {
    name: 'Arun Goud',
    fullName: 'Arun Goud Kanchanpally',
    classInfo: '10 - A',
    profileImage: require('../assets/profile.png'), // Your uploaded image
    phone: '+91 9398332987',
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = query
      ? modules.filter((module) =>
          module.name.toLowerCase().includes(query.toLowerCase())
        )
      : modules;
    setFilteredModules(filtered);
  };

  const handleMenuOption = (option) => {
    setShowMenu(false);
    console.log(`${option} clicked`);
  };

  const dismissKeyboard = () => {
    setShowMenu(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => setShowProfileDetails(!showProfileDetails)}
          >
            <Image
              source={user.profileImage}
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{user.name}</Text>
            <Ionicons name="chevron-down" size={18} color="#000" style={{ marginLeft: 5 }} />
          </TouchableOpacity>

          {/* Menu Icon */}
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <Ionicons name="menu-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Profile Details - under profile */}
        {showProfileDetails && (
          <View style={styles.profileDetailsInline}>
            <Text style={styles.profileName}>{user.fullName}</Text>
            <Text style={styles.profileInfo}>Class: {user.classInfo}</Text>
            <Text style={styles.profileInfo}>Phone: {user.phone}</Text>
          </View>
        )}

        {/* Search Bar */}
        {showSearch && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search Modules"
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus
          />
        )}

        {/* Dropdown Menu */}
        {showMenu && (
          <View style={styles.dropdownMenu}>
            {['Settings', 'Help', 'About', 'Exit'].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.menuItem}
                onPress={() => handleMenuOption(option)}
              >
                <Text style={styles.menuText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Grid */}
        <FlatList
          data={filteredModules}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.module}
              onPress={() => navigation.navigate(item.route)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.label}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  userName: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 80,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 8,
    width: 160,
    zIndex: 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  grid: { alignItems: 'center', paddingBottom: 30 },
  module: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    width: 140,
    height: 140,
    justifyContent: 'center',
  },
  image: { width: 60, height: 60, marginBottom: 10 },
  label: { fontSize: 14, fontWeight: '600', textAlign: 'center' },

  // Profile Details shown under the profile image
  profileDetailsInline: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  profileInfo: {
    fontSize: 15,
    color: '#333',
    marginBottom: 3,
  },
});
