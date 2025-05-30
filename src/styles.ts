import { StyleSheet } from 'react-native';

// Color palette
export const colors = {
  text: '#1F2937',
  primary: '#2563EB',
  secondary: '#4B5563',
  background: '#F9FAFB',
};

// Global styles for consistent, modern UI/UX
export const styles = StyleSheet.create({
  // Original styles
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    // justifyContent: 'center',

  },
  
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  detail: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 8,
  },
  success: {
    fontSize: 18,
    color: '#16A34A',
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  badge: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 12,
  },
  driverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  driverName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  actionContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 16,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  spaceMono: {
    fontFamily: 'SpaceMono',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailsContainer: {
    marginVertical: 12,
  },
  flex1: {
    flex: 1,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginRight8: {
    marginRight: 8,
  },
  // Merged styles for RouteSelection
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  selectedCard: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  routeFee: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  routeDescription: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 12,
  },
  routeDetails: {
    gap: 8,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: colors.secondary,
  },
  stopsContainer: {
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
  },
  stopsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.secondary,
  },
  stopsText: {
    fontSize: 14,
    color: colors.secondary,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  disabledInput: {
    backgroundColor: '#F3F4F6',
    color: colors.secondary,
  },
  errorText: {
    fontSize: 14,
    color: '#EF4444',
    marginBottom: 16,
  },
});