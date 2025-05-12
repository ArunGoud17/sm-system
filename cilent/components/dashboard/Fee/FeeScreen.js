import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './FeeScreen.styles'; 

const FeeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.sessionText}>2025-2026</Text>
        <TouchableOpacity>
          <Icon name="sync" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.balanceCard}>
          <View>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>INR 0.00</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Fee Details {'>'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.noDues}>No Fee Dues</Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.btnText}>View Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.btnText}>Online Transactions{'\n'}Status</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FeeScreen;
