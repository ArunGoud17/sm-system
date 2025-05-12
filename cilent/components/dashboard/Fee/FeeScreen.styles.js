import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#75bc20',
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
    color: '#35509d',
    fontSize: 14,
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
    color: '#333',
  },
  viewDetails: {
    color: '#35509d',
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
    backgroundColor:'#75bc20',
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

export default styles;
