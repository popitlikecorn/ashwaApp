// import { Tabs, Stack } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import { StyleSheet } from 'react-native';
// import { useAppContext } from '../../src/context';
// import { useEffect, useState } from 'react';

// export default function TabsLayout() {
//   const { guardian } = useAppContext();
//   const [isReady, setIsReady] = useState(false);

//   // Wait for context to initialize
//   useEffect(() => {
//     // Small delay to ensure context is fully loaded
//     const timer = setTimeout(() => {
//       setIsReady(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   // Don't render navigation until context is ready
//   if (!isReady) {
//     return null; // Or a loading spinner
//   }

//   console.log('TabsLayout: Guardian state:', guardian);

//   // Onboarding: stack navigation
//   if (!guardian) {
//     return (
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
//         <Stack.Screen name="student" options={{ title: 'Add Kid' }} />
//         <Stack.Screen name="route" options={{ title: 'Pick Route' }} />
//         <Stack.Screen name="booking" options={{ title: 'Book Driver' }} />
//       </Stack>
//     );
//   }

//   // Tabs after signup
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#2563EB',
//         tabBarInactiveTintColor: '#6B7280',
//         tabBarStyle: styles.tabBar,
//         tabBarLabelStyle: styles.tabLabel,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="booking"
//         options={{
//           title: 'Booking',
//           tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="tracking"
//         options={{
//           title: 'Track',
//           tabBarIcon: ({ color, size }) => <Ionicons name="trail-sign" size={size} color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 0,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     height: 60,
//     paddingBottom: 8,
//   },
//   tabLabel: {
//     fontSize: 12,
//     fontWeight: '600',
//   },
// });
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useAppContext } from '../../src/context';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { colors } from '../../src/styles';

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}

const TAB_CONFIG: Record<string, TabIconProps> = {
  index: { name: 'home', title: 'Home' },
  AvailableDrivers: { name: 'calendar', title: 'Booking' },
  Tracking: { name: 'trail-sign', title: 'Track' },
};

export default function TabsLayout() {
  const { guardian } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!guardian) {
      router.replace('/Signup');
    }
  }, [guardian, router]);

  if (!guardian) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  console.log('TabsLayout: Guardian state:', guardian);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      {Object.entries(TAB_CONFIG).map(([name, config]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: config.title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={config.name} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 60,
    paddingBottom: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});