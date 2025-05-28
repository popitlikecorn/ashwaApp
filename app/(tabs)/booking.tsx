import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';

export default function BookingScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      <Card style={{ margin: 16, borderRadius: 8 }}>
        <Card.Title title="Booking Details" />
        <Card.Content>
          <Text>{selectedDriver?.name || 'Raj Kumar'}</Text>
          <Text>{selectedDriver?.route || 'North Delhi to DPS'}</Text>
          <Text>Pickup: {selectedDriver?.pickupTime || '8:20 AM'}</Text>
          <Text>Fee: ₹{selectedDriver?.fee || 5000}</Text>
          <Button mode="contained" onPress={() => router.push('/confirmation')} style={{ marginTop: 12 }}>
            Confirm Booking
          </Button>
          <Button mode="outlined" onPress={() => router.push('/(tabs)/route')} style={{ marginTop: 12 }}>
            Cancel
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}