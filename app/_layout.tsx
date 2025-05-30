import { Stack } from 'expo-router';
   import { AppContextProvider } from '../src/context';
   import { useFonts } from 'expo-font';

   export default function RootLayout() {
     const [fontsLoaded] = useFonts({
       SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
     });

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
        <Stack.Screen name="SelectTripDetails" />
        <Stack.Screen name="Confirmation" />
      </Stack>
    </AppContextProvider>
  );
}