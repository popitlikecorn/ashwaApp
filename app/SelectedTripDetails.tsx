import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles as sharedStyles, colors } from '../src/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function SelectedTripDetailsScreen() {
  const { selectedDriver, locations } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!selectedDriver || !locations) {
      Alert.alert('Error', 'No driver or locations selected');
      router.replace('RouteSelection');
    }
  }, [selectedDriver, locations, router]);

  const handleConfirmDetails = async () => {
    // Backend placeholder: Confirm booking
    console.log('Confirming trip:', { driver: selectedDriver, locations });
    // await fetch('https://api.example.com/confirm-booking', {
    //   method: 'POST',
    //   body: JSON.stringify({ driverId: selectedDriver.id, locations }),
    // });
    router.replace('Confirmation');
  };

  if (!selectedDriver || !locations) return null;

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="checkmark-circle-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Selected Trip Details</Text>
      </View>
      <View style={sharedStyles.card}>
        <View style={localStyles.profileContainer}>
          <Ionicons name="person-circle-outline" size={48} color={colors.secondary} />
          <Text style={sharedStyles.driverName}>{selectedDriver.name}</Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="time-outline" size={16} color={colors.primary} />
          <Text style={[sharedStyles.detail, { color: colors.primary }]}>
            Pickup: {selectedDriver.pickupTime}
          </Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="time-outline" size={16} color={colors.primary} />
          <Text style={[sharedStyles.detail, { color: colors.primary }]}>
            Drop-off: {selectedDriver.dropoffTime}
          </Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="star-outline" size={16} color={colors.secondary} />
          <Text style={sharedStyles.detail}>Driver Rating: {selectedDriver.rating || 4.5}/5</Text>
        </View>
        <View style={localStyles.detailRow}>
          <Ionicons name="map-outline" size={16} color={colors.secondary} />
          <Text style={sharedStyles.detail}>Route Rating: 4.5/5</Text>
        </View>
        <Text style={[sharedStyles.detail, localStyles.feeText]}>
          ₹{selectedDriver.fee}/month
        </Text>
      </View>
      <TouchableOpacity onPress={handleConfirmDetails}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={sharedStyles.button}
        >
          <Text style={sharedStyles.buttonText}>Book Now</Text>
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
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
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
  },
});