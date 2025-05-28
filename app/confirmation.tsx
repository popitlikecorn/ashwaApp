import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Navigation, Bell, Clock } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles, colors } from '../src/styles';

export default function ConfirmationScreen() {
  const { selectedDriver } = useAppContext();
  const router = useRouter();

  const getTomorrowDateFormatted = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.confirmationContainer}>
        <View style={styles.confirmationCheckmark}>
          <Text style={[styles.text, styles.fontSize24]}>✓</Text>
        </View>
        <Text style={[styles.text, styles.confirmationText]}>Yay! Booking Confirmed</Text>
      </View>
      <Card style={[styles.card, { backgroundColor: colors.blueLight }]}>
        <Card.Content>
          <View style={[styles.row, styles.marginBottom8]}>
            <Clock size={18} color={colors.primary} />
            <Text style={[styles.text, styles.boldText, styles.marginLeft8]}>Your Pickup Schedule</Text>
          </View>
          <Text style={[styles.text, styles.boldText]}>{selectedDriver?.pickupTime || '8:20 AM'} tomorrow</Text>
          <Text style={[styles.text, styles.smallText]}>{getTomorrowDateFormatted()}</Text>
        </Card.Content>
      </Card>
      <Card style={[styles.card, styles.marginTop16]}>
        <Card.Content>
          <Text style={[styles.text, styles.boldText]}>Driver Details</Text>
          <Text style={[styles.text, styles.boldText]}>{selectedDriver?.name || 'Raj Kumar'}</Text>
          <Text style={[styles.text, styles.smallText]}>{selectedDriver?.route || 'North Delhi to DPS'}</Text>
        </Card.Content>
      </Card>
      <Card style={[styles.card, styles.marginTop16, { backgroundColor: colors.greenLight }]}>
        <Card.Content style={styles.row}>
          <Bell size={16} color={colors.primary} />
          <Text style={[styles.text, styles.smallText, styles.marginLeft8]}>
            You will receive a notification when your driver is approaching
          </Text>
        </Card.Content>
      </Card>
      <Button
        mode='contained'
        onPress={() => router.push('/(tabs)/tracking')}
        style={[styles.button, styles.marginTop24]}
      >
        <Navigation size={16} color='#fff' /> Track Driver Location
      </Button>
      <Button
        mode='outlined'
        onPress={() => router.push('/(tabs)/route')}
        style={[styles.button, styles.marginTop12]}
      >
        Back to Routes
      </Button>
    </View>
  );
}