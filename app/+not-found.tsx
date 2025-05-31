import { View, Text, StyleSheet } from 'react-native';
import { styles as sharedStyles, colors } from '../src/styles';

export default function NotFoundScreen() {
  return (
    <View style={[sharedStyles.container, localStyles.notFoundContainer]}>
      <Text style={localStyles.text}>This screen doesn't exist.</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  notFoundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.text,
  },
});