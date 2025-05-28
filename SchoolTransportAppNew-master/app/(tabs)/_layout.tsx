import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }} initialRouteName="index">
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarLabel: 'Explore' }} />
      <Tabs.Screen name="student" options={{ title: 'Student', tabBarLabel: 'Student' }} />
      <Tabs.Screen name="route" options={{ title: 'Route', tabBarLabel: 'Route' }} />
      <Tabs.Screen name="booking" options={{ title: 'Booking', tabBarLabel: 'Booking' }} />
      <Tabs.Screen name="tracking" options={{ title: 'Tracking', tabBarLabel: 'Tracking' }} />
    </Tabs>
  );
}