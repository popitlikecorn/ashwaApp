// import { Stack } from 'expo-router';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { PaperProvider, MD3LightTheme } from 'react-native-paper';
// import { View, Text } from 'react-native';
// import { colors, styles } from '../src/styles';

// const theme = {
//   ...MD3LightTheme,
//   colors: {
//     ...MD3LightTheme.colors,
//     primary: colors.primary,
//     secondary: colors.secondary,
//     background: colors.background,
//   },
// };

// export default function RootLayout() {
//   return (
//     <SafeAreaProvider>
//       <PaperProvider theme={theme}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>School Transport App</Text>
//         </View>
//         <Stack initialRouteName='(tabs)'>
//           <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
//           <Stack.Screen name='confirmation' options={{ headerShown: false }} />
//         </Stack>
//       </PaperProvider>
//     </SafeAreaProvider>
//   );
// }
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* The Tabs navigator as a screen */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Other stack screens */}
      <Stack.Screen name="confirmation" options={{ title: 'Confirmation' }} />
    </Stack>
  );
}
