import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { useAppContext } from '../../src/context';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { colors } from '../../src/styles';
import { LinearGradient } from 'expo-linear-gradient';

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}

const TAB_CONFIG: Record<string, TabIconProps> = {
  index: { name: 'home-outline', title: 'Home' },
  explore: { name: 'search-outline', title: 'Explore' },
  AvailableDrivers: { name: 'car-outline', title: 'Book' },
  Tracking: { name: 'map-outline', title: 'Track' },
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
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#FFFFFF', '#F9FAFB']}
            style={StyleSheet.absoluteFill}
          />
        ),
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
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.secondary,
  },
  tabBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 64,
    paddingBottom: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});