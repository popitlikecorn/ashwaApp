import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Navigation, Bell } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState, useEffect } from 'react';
import { styles, colors } from '../../src/styles';
import { Notification } from '../../src/types';

export default function TrackingScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();
  const [eta, setEta] = useState('15 mins');
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => {
        const mins = parseInt(prev.split(' ')[0]) - 1;
        if (mins <= 1 && !notification) {
          setNotification({ message: 'Your driver has almost arrived!', type: 'success' });
          setTimeout(() => setNotification(null), 5000);
        }
        return mins > 0 ? mins + ' mins' : '1 min';
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [notification]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Navigation size={20} color={colors.text} style={styles.icon} />
        <Text style={styles.text}>Track Driver</Text>
      </View>
      <View style={[styles.mapPlaceholder, { backgroundColor: colors.blueLight }]}>
        <Text style={[styles.text, styles.smallText, { color: colors.secondary }]}>Google Maps would display here</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.rowSpaceBetween}>
          <Text style={[styles.text, { color: colors.secondary }]}>Driver</Text>
          <Text style={styles.text}>{selectedDriver?.name || 'Raj Kumar'}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.rowSpaceBetween}>
          <Text style={[styles.text, { color: colors.secondary }]}>Estimated Arrival</Text>
          <Text style={[styles.text, { color: colors.primary }]}>{eta}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.rowSpaceBetween}>
          <Text style={[styles.text, { color: colors.secondary }]}>Status</Text>
          <Text style={[styles.text, { color: colors.primary }]}>On the way to pickup</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.rowSpaceBetween}>
          <Text style={[styles.text, { color: colors.secondary }]}>Pickup Time</Text>
          <Text style={[styles.text, { color: colors.primary }]}>{selectedDriver?.pickupTime || '8:20 AM'}</Text>
        </View>
      </View>
      {notification && (
        <View style={[styles.notification, { backgroundColor: colors.yellowLight }]}>
          <Bell size={16} color={colors.yellow} />
          <Text style={[styles.text, styles.smallText, styles.marginLeft8]}>{notification.message}</Text>
        </View>
      )}
      <Button
        mode='contained'
        onPress={() => router.push(selectedDriver ? '/confirmation' : '/(tabs)/route')}
        style={styles.button}
      >
        {selectedDriver ? 'View Booking Details' : 'Back to Routes'}
      </Button>
    </View>
  );
}