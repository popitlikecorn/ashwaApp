import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState, useEffect } from 'react';

interface Notification {
  message: string;
  type: 'success' | 'warning' | 'error';
}

export default function TrackingScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();
  const [eta, setEta] = useState('15');
  const [notification, setNotification] = useState<Notification | null>(null);

  // Simulate ETA updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => {
        const mins = parseInt(prev) - 1;
        if (mins <= 2 && !notification) {
          setNotification({ 
            message: 'Driver arriving soon!',
            type: 'success'
          });
          setTimeout(() => setNotification(null), 5000);
        }
        return Math.max(mins, 1).toString();
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [notification]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="bus-outline" size={32} color="#2563EB" />
        <Text style={styles.title}>Track Your Ride</Text>
      </View>

      <View style={styles.mapPlaceholder}>
        <Ionicons name="map-outline" size={48} color="#9CA3AF" />
        <Text style={styles.placeholderText}>Map View Coming Soon</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="person-outline" size={24} color="#4B5563" />
            <Text style={styles.label}>Driver</Text>
            <Text style={styles.value}>{selectedDriver?.name || 'Not Assigned'}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="time-outline" size={24} color="#4B5563" />
            <Text style={styles.label}>ETA</Text>
            <Text style={[styles.value, styles.eta]}>{eta} mins</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="navigate-outline" size={24} color="#4B5563" />
            <Text style={styles.label}>Status</Text>
            <Text style={[styles.value, styles.status]}>On Route</Text>
          </View>
        </View>
      </View>

      {notification && (
        <View style={[styles.notification, styles[`${notification.type}Notification`]]}>
          <Ionicons 
            name={
              notification.type === 'success' ? 'checkmark-circle' : 
              notification.type === 'warning' ? 'warning' :
              'alert-circle'
            } 
            size={20} 
            color={
              notification.type === 'success' ? '#059669' : 
              notification.type === 'warning' ? '#D97706' :
              '#DC2626'
            } 
          />
          <Text style={styles.notificationText}>{notification.message}</Text>
        </View>
      )}

      <Button 
        mode="contained" 
        onPress={() => router.replace('confirmation')} // Changed from router.push('/confirmation')
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        View Details
      </Button>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 8
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937'
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  placeholderText: {
    color: '#6B7280',
    marginTop: 8
  },
  infoContainer: {
    gap: 16
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#4B5563'
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937'
  },
  eta: {
    color: '#2563EB'
  },
  status: {
    color: '#059669'
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    gap: 8
  },
  successNotification: {
    backgroundColor: '#ECFDF5'
  },
  warningNotification: {
    backgroundColor: '#FFFBEB'
  },
  errorNotification: {
    backgroundColor: '#FEE2E2'
  },
  notificationText: {
    fontSize: 14,
    color: '#1F2937'
  },
  button: {
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#2563EB'
  },
  buttonContent: {
    paddingVertical: 8
  }
});