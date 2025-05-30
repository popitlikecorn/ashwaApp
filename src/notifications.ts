import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Request permissions
export async function requestNotificationPermissions() {
  if (Platform.OS !== 'web') {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.log('Notification permissions denied');
      return false;
    }
    return true;
  }
  return true;
}

// ✅ Fix: Cast the trigger to correct input type
export async function scheduleTripNotification(message: string, triggerSeconds: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Trip Update',
      body: message,
      sound: 'default',
    },
    trigger: {
      type: 'timeInterval',
      seconds: triggerSeconds,
      repeats: false,
    } as Notifications.NotificationTriggerInput, // ✅ Type-safe inline
  });
}


// Schedule daily notifications (hardcoded)
export function scheduleDailyNotifications() {
  const notifications = [
    { message: 'Driver Arrived', seconds: 10 },
    { message: 'Child at School', seconds: 20 },
    { message: 'Child Picked Up', seconds: 30 },
    { message: 'Child Dropped Off', seconds: 40 },
  ];

  notifications.forEach((notif) => {
    scheduleTripNotification(notif.message, notif.seconds);
  });
}