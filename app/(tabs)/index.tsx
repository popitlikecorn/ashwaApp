import { Text } from 'react-native';
import { Home } from 'lucide-react-native';
import * as Animatable from 'react-native-animatable';
import { styles, colors } from '../../src/styles';

export default function HomeScreen() {
  return (
    <Animatable.View animation='fadeIn' duration={1000} style={styles.container}>
      <Home size={20} color={colors.text} style={styles.icon} />
      <Text style={styles.text}>Welcome to School Transport App</Text>
    </Animatable.View>
  );
}
