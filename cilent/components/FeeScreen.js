import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4e73df',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  sessionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flexGrow: 1,
    padding: 16,
  },
  balanceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  balanceLabel: {
    color: '#777',
    fontSize: 14,
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
    color: '#333',
  },
  viewDetails: {
    color: '#4e73df',
    fontWeight: '600',
  },
  noDues: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#4e73df',
    justifyContent: 'space-around',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },
  bottomBtn: {
    flex: 1,
    padding: 16,
    borderRightWidth: 0.5,
    borderColor: '#fff',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
