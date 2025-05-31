import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles as sharedStyles, colors } from '../src/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function ConfirmationScreen() {
  const { selectedDriver, locations } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!selectedDriver || !locations) {
      Alert.alert('Error', 'No booking details available');
      router.replace('RouteSelection');
    }
    // Backend placeholder: Confirm booking status
    // fetch('https://api.example.com/booking-status', {
    //   method: 'GET',
    //   headers: { bookingId: 'mock-id' },
    // }).then(res => res.json()).then(data => console.log('Booking confirmed:', data));
  }, [selectedDriver, locations, router]);

  const handleConfirm = () => {
    router.replace('(tabs)/Tracking');
  };

  if (!selectedDriver || !locations) return null;

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="trophy-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Booking Confirmed</Text>
      </View>
      <View style={sharedStyles.card}>
        <View style={localStyles.detailRow}>
          <Ionicons name="person-outline" size={16} color={colors.secondary} />
          <Text style={sharedStyles.detail}>Driver: {selectedDriver.name}</Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="time-outline" size={16} color={colors.primary} />
          <Text style={[sharedStyles.detail, { color: colors.primary }]}>
            Pickup: {selectedDriver.pickupTime}
          </Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="star-outline" size={16} color={colors.secondary} />
          <Text style={sharedStyles.detail}>Rating: {selectedDriver.rating || 4.5}/5</Text>
        </View>
<Text style={[sharedStyles.detail, localStyles.feeText]}>
  ₹{selectedDriver.fee}/month
</Text>
      </View>
      <TouchableOpacity onPress={handleConfirm}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={sharedStyles.button}
        >
          <Text style={sharedStyles.buttonText}>Track Driver</Text>
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
    marginBottom: 32,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
feeText: {
    fontWeight: '600',
    color: colors.primary,
  }
});