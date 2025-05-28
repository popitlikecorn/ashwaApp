import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Bell } from 'lucide-react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import { styles, colors } from '../../src/styles';

export default function BookingScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleConfirm = () => {
    console.log('Booking confirmed with driver:', selectedDriver);
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      router.push('/confirmation');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Bell size={20} color={colors.text} style={styles.icon} />
        <Text style={styles.text}>Booking Confirmation</Text>
      </View>
      {bookingConfirmed ? (
        <View style={[styles.card, styles.border]}>
          <Text style={[styles.text, styles.boldText, styles.fontSize16, styles.marginBottom8, { color: colors.primary }]}>Booking Confirmed!</Text>
          <Text style={[styles.text, styles.smallText]}>
            Your booking has been confirmed with {selectedDriver?.name || 'Raj Kumar'}
          </Text>
        </View>
      ) : (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={[styles.text, styles.title]}>{selectedDriver?.name || 'Raj Kumar'}</Text>
            <Text style={[styles.text, { color: colors.secondary }]}>{selectedDriver?.route || 'North Delhi to DPS'}</Text>
            <View style={styles.rowSpaceBetween}>
              <Text style={[styles.text, { color: colors.secondary }]}>Seats Available</Text>
              <Text style={[styles.text, styles.boldText]}>{selectedDriver?.seats || '3'}</Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <Text style={[styles.text, { color: colors.secondary }]}>Distance</Text>
              <Text style={[styles.text, styles.boldText]}>{selectedDriver?.distance || 3.2} km</Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <Text style={[styles.text, { color: colors.secondary }]}>Monthly Fee</Text>
              <Text style={[styles.text, styles.boldText, { color: colors.primary }]}>₹{selectedDriver?.fee || 5000}</Text>
            </View>
            <View style={styles.rowSpaceBetween}>
              <Text style={[styles.text, { color: colors.secondary }]}>Pickup Time</Text>
              <Text style={[styles.text, styles.boldText, { color: colors.primary }]}>{selectedDriver?.pickupTime || '8:20 AM'}</Text>
            </View>
            <View style={[styles.row, styles.marginTop16]}>
              <Button
                mode='outlined'
                onPress={() => router.push('/(tabs)/route')}
                style={[styles.button, styles.flex1, styles.marginRight8]}
              >
                Cancel
              </Button>
              <Button
                mode='contained'
                onPress={handleConfirm}
                style={[styles.button, styles.flex1]}
              >
                Confirm Booking
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    </View>
  );
}