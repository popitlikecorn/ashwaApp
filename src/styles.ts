import { StyleSheet } from 'react-native';

export const colors = {
  text: '#1F2937',
  primary: '#16A34A', // Green for prices and key actions
  secondary: '#4B5563',
  background: '#F9FAFB',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  textContent: {
    fontSize: 18,
    color: colors.text,
    marginTop: 8,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    color: colors.text,
  },
  button: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
        borderWidth: 1, // Added for ESLint fix (Tracking, Confirmation, etc.)

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
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
  },
  driverName: {
  fontSize: 18,
  fontWeight: '600',
  color: colors.text,
}
});