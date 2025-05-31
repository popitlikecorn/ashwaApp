import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as sharedStyles, colors } from '../../src/styles';

export default function ExploreScreen() {
  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="search-outline" size={20} color={colors.text} style={localStyles.icon} />
        <Text style={localStyles.text}>Explore Drivers and Routes</Text>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  icon: {
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    color: colors.text,
  },
});