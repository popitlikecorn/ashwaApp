import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState } from 'react';

export default function RouteScreen() {
  const { setRoute, setSelectedDriver } = useAppContext();
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [school, setSchool] = useState('');
  const [dropoff, setDropoff] = useState('');

  const handleSearch = () => {
    console.log('Searching for drivers with route:', { pickup, school, dropoff });
    setRoute({ pickup, school, dropoff });
    const driver = { name: 'Raj Kumar', route: 'North Delhi to DPS', pickupTime: '8:20 AM', fee: 5000 };
    setSelectedDriver(driver);
    router.push('/(tabs)/booking');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <TextInput
        placeholder="School"
        value={school}
        onChangeText={setSchool}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Dropoff Location"
        value={dropoff}
        onChangeText={setDropoff}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <Button mode="contained" onPress={handleSearch}>
        Search Drivers
      </Button>
    </View>
  );
}
