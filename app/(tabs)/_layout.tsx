import { Tabs } from 'expo-router';
import { Home, Search, User, Map, Calendar, Navigation } from 'lucide-react-native';
import { colors } from '../../src/styles';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }} initialRouteName='index'>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Home size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Search size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name='student'
        options={{
          title: 'Student',
          tabBarLabel: 'Student',
          tabBarIcon: ({ focused }) => (
            <User size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name='route'
        options={{
          title: 'Route',
          tabBarLabel: 'Route',
          tabBarIcon: ({ focused }) => (
            <Map size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name='booking'
        options={{
          title: 'Booking',
          tabBarLabel: 'Booking',
          tabBarIcon: ({ focused }) => (
            <Calendar size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
      <Tabs.Screen
        name='tracking'
        options={{
          title: 'Tracking',
          tabBarLabel: 'Tracking',
          tabBarIcon: ({ focused }) => (
            <Navigation size={24} color={focused ? colors.primary : colors.secondary} />
          ),
        }}
      />
    </Tabs>
  );
}
