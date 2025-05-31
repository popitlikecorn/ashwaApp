import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext, type Driver } from '../../src/context';
import { styles as sharedStyles, colors } from '../../src/styles';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function AvailableDriversScreen() {
  const { locations, setSelectedDriver } = useAppContext();
  const router = useRouter();
  const [drivers, setDrivers] = useState<Driver[]>([]);

  // Mock driver data with ratings
  const allDrivers: Driver[] = [
    {
      id: '1',
      name: 'Raj Kumar',
      fee: 2500,
      pickupTime: '8:20 AM',
      dropoffTime: '3:00 PM',
      rating: 4.5,
      availableLocations: ['Model Town', 'Civil Lines'],
    },
    {
      id: '2',
      name: 'Anil Sharma',
      fee: 2800,
      pickupTime: '8:30 AM',
      dropoffTime: '3:10 PM',
      rating: 4.2,
      availableLocations: ['Lajpat Nagar', 'Saket'],
    },
    {
      id: '3',
      name: 'Vikram Singh',
      fee: 2300,
      pickupTime: '8:15 AM',
      dropoffTime: '3:05 PM',
      rating: 4.8,
      availableLocations: ['Mayur Vihar', 'Laxmi Nagar'],
    },
  ];

  useEffect(() => {
    if (!locations?.pickup || !locations?.dropoff) {
      Alert.alert('Error', 'No locations selected');
      router.replace('RouteSelection');
      return;
    }
    // Backend placeholder: Fetch drivers based on locations
    // fetch('https://api.example.com/drivers', {
    //   method: 'POST',
    //   body: JSON.stringify({ pickup: locations.pickup, dropoff: locations.dropoff, school: locations.school }),
    // }).then(res => res.json()).then(data => setDrivers(data));
    
    // Mock filtering based on locations
    const filteredDrivers = allDrivers.filter(
      (driver) =>
        driver.availableLocations?.some((loc) => locations.pickup.includes(loc)) ||
        driver.availableLocations?.some((loc) => locations.dropoff.includes(loc))
    );
    setDrivers(filteredDrivers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations, router]);

  const handleSelectDriver = (driver: Driver) => {
    setSelectedDriver(driver);
    router.replace('SelectedTripDetails');
  };

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="car-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Drivers</Text>
      </View>
      {drivers.length === 0 ? (
        <Text style={localStyles.errorText}>No drivers available</Text>
      ) : (
        drivers.map((driver) => (
          <TouchableOpacity
            key={driver.id}
            style={sharedStyles.card}
            onPress={() => handleSelectDriver(driver)}
          >
            <View style={localStyles.driverHeader}>
              <Text style={sharedStyles.driverName}>{driver.name}</Text>
              <Ionicons name="chevron-forward-outline" size={20} color={colors.secondary} />
            </View>
            <View style={localStyles.detailRow}>
              <Ionicons name="time-outline" size={16} color={colors.primary} />
              <Text style={[sharedStyles.detail, { color: colors.primary }]}>
                Pickup: {driver.pickupTime}
              </Text>
            </View>
            <View style={localStyles.detailRow}>
              <Ionicons name="time-outline" size={16} color={colors.primary} />
              <Text style={[sharedStyles.detail, { color: colors.primary }]}>
                Drop-off: {driver.dropoffTime}
              </Text>
            </View>
            <View style={localStyles.detailRow}>
              <Ionicons name="star-outline" size={16} color={colors.secondary} />
              <Text style={sharedStyles.detail}>Rating: {driver.rating}/5</Text>
            </View>
            <Text style={sharedStyles.detail}>₹{driver.fee}/month</Text>
          </TouchableOpacity>
        ))
      )}
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
  driverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 16,
    color: '#EF4444',
    textAlign: 'center',
    marginTop: 16,
  },
});