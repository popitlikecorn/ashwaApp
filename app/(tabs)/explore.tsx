import { View, Text } from 'react-native';
import { Search } from 'lucide-react-native';
import { styles, colors } from '../../src/styles';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Search size={20} color={colors.text} style={styles.icon} />
      <Text style={styles.text}>Explore Drivers and Routes</Text>
    </View>
  );
}