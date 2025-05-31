import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles as sharedStyles, colors } from '../src/styles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TripLocationsScreen() {
  const { student, setLocations } = useAppContext();
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const school = student?.school || '';

  const handleSubmit = async () => {
    if (!pickup.trim() || !dropoff.trim()) {
      Alert.alert('Error', 'Please enter pickup and drop-off locations');
      return;
    }
    // Backend placeholder: Send location data
    console.log('Submitting locations:', { pickup, dropoff, school });
    // await fetch('https://api.example.com/set-locations', {
    //   method: 'POST',
    //   body: JSON.stringify({ pickup, dropoff, school }),
    // });
    setLocations({ pickup, dropoff, school });
    router.replace('(tabs)/AvailableDrivers');
  };

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="map-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Trip Locations</Text>
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="location-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Pickup Location"
          value={pickup}
          onChangeText={setPickup}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="location-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Drop-off Location"
          value={dropoff}
          onChangeText={setDropoff}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="business-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={[sharedStyles.input, localStyles.disabledInput]}
          value={school}
          editable={false}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={sharedStyles.button}
        >
          <Text style={sharedStyles.buttonText}>Check Available Drivers</Text>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  icon: {
    marginRight: 8,
  },
  disabledInput: {
    backgroundColor: '#F3F4F6',
    color: colors.secondary,
  },
});