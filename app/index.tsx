import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from '../src/styles';

export default function Index() {
  const { guardian } = useAppContext();
  const router = useRouter();
  const [isNavigated, setIsNavigated] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure navigation is ready
    const timer = setTimeout(() => {
      if (!isNavigated) {
        if (guardian) {
          router.replace('index'); // Changed from '/(tabs)'
        } else {
          router.replace('signup'); // Changed from '/(tabs)/signup'
        }
        setIsNavigated(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [guardian, isNavigated, router]); // Added router

  // Return a simple view while navigation is happening
  return <View style={styles.container} />;
}