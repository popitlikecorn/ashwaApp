import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext} from '../../src/context';
import { styles as sharedStyles, colors } from '../../src/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';

interface Notification {
  message: string;
  type: 'success';
}

export default function TrackingScreen() {
  const { selectedDriver, locations } = useAppContext();
  const router = useRouter();
  const [eta, setEta] = useState('15');
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    if (!selectedDriver || !locations) {
      Alert.alert('Error', 'No tracking details available');
      router.replace('/RouteSelection');
    }
    // Backend placeholder: Fetch real-time tracking data
    // fetch('https://api.example.com/tracking', {
    //   method: 'GET',
    //   headers: { driverId: selectedDriver?.id },
    // }).then(res => res.json()).then(data => setEta(data.eta));

    const interval = setInterval(() => {
      setEta((prev) => {
        const mins = parseInt(prev) - 1;
        if (mins <= 2 && !notification) {
          setNotification({
            message: 'Driver arriving soon!',
            type: 'success',
          });
          setTimeout(() => setNotification(null), 5000);
        }
        return Math.max(mins, 1).toString();
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [selectedDriver, locations, router, notification]);

  const callDriver = async () => {
    // Backend placeholder: Fetch driver phone
    const phoneNumber = '1234567890'; // Mock
    // const response = await fetch('https://api.example.com/driver-contact', {
    //   method: 'GET',
    //   headers: { driverId: selectedDriver?.id },
    // });
    // const { phoneNumber } = await response.json();
    try {
      await Linking.openURL(`tel:${phoneNumber}`);
    } catch {
      Alert.alert('Error', 'Unable to make call');
    }
  };

  if (!selectedDriver || !locations) return null;

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="bus-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Live Tracking</Text>
      </View>
      <View style={localStyles.mapPlaceholder}>
        <Ionicons name="map-outline" size={48} color={colors.secondary} />
        <Text style={localStyles.placeholderText}>Map View Coming Soon</Text>
      </View>
      <View style={localStyles.infoContainer}>
        <View style={sharedStyles.card}>
          <View style={localStyles.row}>
            <Ionicons name="person-outline" size={20} color={colors.secondary} />
            <Text style={sharedStyles.detail}>Driver: {selectedDriver.name}</Text>
          </View>
        </View>
        <View style={sharedStyles.card}>
          <View style={localStyles.row}>
            <Ionicons name="time-outline" size={20} color={colors.primary} />
            <Text style={[sharedStyles.detail, { color: colors.primary }]}>ETA: {eta} mins</Text>
          </View>
        </View>
        <View style={sharedStyles.card}>
          <View style={localStyles.row}>
            <Ionicons name="navigate-outline" size={20} color={colors.primary} />
            <Text style={[sharedStyles.detail, { color: colors.primary }]}>Status: On Route</Text>
          </View>
        </View>
      </View>
      {notification && (
        <View style={localStyles.notification}>
          <Ionicons name="checkmark-circle-outline" size={20} color={colors.primary} />
          <Text style={localStyles.notificationText}>{notification.message}</Text>
        </View>
      )}
      <TouchableOpacity onPress={callDriver}>
        <LinearGradient colors={['#4B5563', '#1F2937']} style={sharedStyles.button}>
          <Text style={sharedStyles.buttonText}>Call Driver</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('(tabs)/index')}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={[sharedStyles.button, localStyles.buttonMargin]}
        >
          <Text style={sharedStyles.buttonText}>View Details</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    color: colors.secondary,
    fontSize: 16,
    marginTop: 8,
  },
  infoContainer: {
    gap: 12,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ECFDF5',
    marginBottom: 16,
    gap: 8,
  },
  notificationText: {
    fontSize: 14,
    color: colors.text,
  },
  buttonMargin: {
    marginTop: 16,
  },
});