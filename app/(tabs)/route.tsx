import { View, Text, TextInput, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { MapPin, Home, Search } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState } from 'react';
import { styles, colors } from '../../src/styles';
import { Driver } from '../../src/types';

const MOCK_DRIVERS: Driver[] = [
  { id: 'd1', name: 'Raj Kumar', route: 'North Delhi to DPS School', seats: '3', fee: 5000, distance: 3.2, pickupTime: '8:20 AM' },
  { id: 'd2', name: 'Amit Singh', route: 'East Delhi to DPS School', seats: '2', fee: 5500, distance: 4.5, pickupTime: '7:45 AM' },
  { id: 'd3', name: 'Priya Sharma', route: 'South Delhi to DPS School', seats: '4', fee: 4800, distance: 2.8, pickupTime: '8:00 AM' },
];

export default function RouteScreen() {
  const { setRoute, setSelectedDriver } = useAppContext();
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [school, setSchool] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const handleSearch = () => {
    console.log('Searching for drivers with route:', { pickup, school, dropoff });
    setRoute({ pickup, school, dropoff });
    setDrivers(MOCK_DRIVERS);
  };

  const handleSelectDriver = (driver: Driver) => {
    setSelectedDriver(driver);
    router.push('/(tabs)/booking');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <MapPin size={20} color={colors.text} style={styles.icon} />
        <Text style={styles.text}>Route Selection</Text>
      </View>
      <View style={[styles.row, styles.marginBottom12]}>
        <TextInput
          placeholder='Your home or nearby location'
          value={pickup}
          onChangeText={setPickup}
          style={[styles.input, styles.flex1]}
        />
        <Button mode='text' icon={() => <Home size={20} color={colors.text} />}>
          {' '}
        </Button>
      </View>
      <TextInput
        placeholder='School location'
        value={school}
        onChangeText={setSchool}
        style={styles.input}
      />
      <View style={[styles.row, styles.marginBottom12]}>
        <TextInput
          placeholder='Same as pickup or different location'
          value={dropoff}
          onChangeText={setDropoff}
          style={[styles.input, styles.flex1]}
        />
        <Button mode='text' icon={() => <Home size={20} color={colors.text} />}>
          {' '}
        </Button>
      </View>
      <Button
        mode='contained'
        onPress={handleSearch}
        style={styles.button}
        disabled={!pickup || !school || !dropoff}
      >
        <Search size={16} color='#fff' /> Search Drivers
      </Button>
      {drivers.length > 0 && (
        <View style={styles.marginTop24}>
          <Text style={[styles.text, styles.boldText]}>Available Drivers</Text>
          <FlatList
            data={drivers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.card, styles.border]}>
                <View style={styles.rowSpaceBetween}>
                  <Text style={[styles.text, styles.boldText]}>{item.name}</Text>
                  <Text style={[styles.text, styles.boldText, { color: colors.primary }]}>₹{item.fee}/month</Text>
                </View>
                <Text style={[styles.text, styles.smallText, { color: colors.secondary }]}>{item.route}</Text>
                <View style={[styles.rowSpaceBetween, styles.marginTop12]}>
                  <Text style={[styles.text, styles.smallText]}>{item.seats} seats available</Text>
                  <Text style={[styles.text, styles.smallText]}>{item.distance} km from your route</Text>
                </View>
                <Text style={[styles.text, styles.smallText, { color: colors.primary }]}>Pickup at {item.pickupTime}</Text>
                <Button
                  mode='contained'
                  onPress={() => handleSelectDriver(item)}
                  style={[styles.button, styles.marginTop16]}
                >
                  Select this Driver
                </Button>
              </View>
            )}
          />
        </View>
      )}
      <Button
        mode='text'
        onPress={() => router.push('/(tabs)/tracking')}
        style={styles.marginTop16}
      >
        Track Current Driver
      </Button>
    </View>
  );
}