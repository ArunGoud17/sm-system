import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF', // White Background
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#35509d', // Blue Text
  },
  teacher: {
    fontSize: 16,
    color: '#75bc20', // Green Text
    marginBottom: 20,
  },
  syllabusContainer: {
    paddingTop: 10,
  },
  syllabusItem: {
    fontSize: 16,
    color: '#35509d', // Blue Text
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
});

export default styles;
