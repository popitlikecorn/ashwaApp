import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';

export default function TrackingScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map disabled for now</Text>
      <Text>{selectedDriver?.name || 'Raj Kumar'}</Text>
      <Text>{selectedDriver?.route || 'North Delhi to DPS'}</Text>
      <Button mode="contained" onPress={() => router.push('/(tabs)/student')}>
        Back
      </Button>
    </View>
  );
}
