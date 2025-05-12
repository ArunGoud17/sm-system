import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#35509d',
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    color: '#35509d',
  },
  subjectButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginVertical: 4,
  },
  subjectSelected: {
    backgroundColor: '#75bc20',
  },
  subjectText: {
    fontSize: 16,
    color: '#35509d',
  },
  subjectTextSelected: {
    color: '#FFF',
  },
  fileText: {
    fontSize: 14,
    color: '#75bc20',
    marginVertical: 2,
  },
  pickFileButton: {
    backgroundColor: '#75bc20',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#75bc20',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
