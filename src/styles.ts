import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  header: {
    backgroundColor: '#2563EB',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderRadius: 4,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  notification: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  boldText: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  smallText: {
    fontSize: 14,
  },
  confirmationContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  confirmationCheckmark: {
    width: 64,
    height: 64,
    backgroundColor: '#DCFCE7',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  confirmationText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginTop12: {
    marginTop: 12,
  },
  marginBottom12: {
    marginBottom: 12,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  flex1: {
    flex: 1,
  },
  marginRight8: {
    marginRight: 8,
  },
  marginLeft8: {
    marginLeft: 8,
  },
  spaceMono: {
    fontFamily: 'SpaceMono',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    height: 256,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize24: {
    fontSize: 24,
  },
});

export const colors = {
  primary: '#16A34A',
  secondary: '#6B7280',
  background: '#F3F4F6',
  white: '#FFFFFF',
  text: '#333333',
  blue: '#2563EB',
  blueLight: '#EFF6FF',
  green: '#156B00',
  greenLight: '#DCFCE7',
  yellow: '#CA8A04',
  yellowLight: '#FEFCE8',
};
