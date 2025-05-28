import { Text, View } from 'react-native';
import { styles } from '../src/styles';

export default function NotFoundScreen() {
  return (
    <View style={styles.notFoundContainer}>
      <Text style={styles.text}>This screen doesn't exist.</Text>
    </View>
  );
}