import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFound() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page Not Found</Text>
      <Button onPress={() => router.replace('/')} title="Go Home" />
    </View>
  );
}
