import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
  },
  header: {
    backgroundColor: '#75bc20', 
    paddingVertical: 24,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFF', 
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 4,
  },
  list: {
    padding: 16,
    paddingBottom: 40,
  },
  subjectCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF', 
    padding: 16,
    marginBottom: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#35509d',
  },
  teacherName: {
    fontSize: 14,
    color: '#75bc20',
    marginTop: 4,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: '#e6e6e6',
  },
});

export default styles;
