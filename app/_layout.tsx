import { Stack } from 'expo-router';
import { AppContextProvider } from '../src/context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
 <AppContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="AddNewStudent" />
        <Stack.Screen name="RouteSelection" />
        <Stack.Screen name="SelectedTripDetails" />
        <Stack.Screen name="Confirmation" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AppContextProvider>
  );
}