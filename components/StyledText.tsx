import { Text, type TextProps } from 'react-native';
import { styles } from '../src/styles';

export function StyledText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.spaceMono]} />;
}
