import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: '#75bc20',
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 4,
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subtitle: { fontSize: 13, color: '#e0e0e0', marginTop: 4 },
  error: { fontSize: 16, color: 'red', marginTop: 20 },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
