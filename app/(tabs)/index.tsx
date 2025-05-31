import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import { styles as sharedStyles, colors } from '../../src/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { guardian, student } = useAppContext();
  const router = useRouter();

  const handleAddStudent = () => {
    router.push('AddNewStudent');
  };

  const handleTrackTrip = () => {
    router.push('(tabs)/Tracking');
  };

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="home-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Welcome, {guardian?.name || 'User'}</Text>
      </View>
      <View style={sharedStyles.card}>
        <Text style={sharedStyles.detail}>
          Student: {student?.name || 'No student added'}
        </Text>
        {student && (
          <>
            <Text style={sharedStyles.detail}>School: {student.school}</Text>
            <Text style={sharedStyles.detail}>Class: {student.class}</Text>
            <Text style={localStyles.status}>Next Trip</Text>
          </>
        )}
      </View>
      <View style={localStyles.actionContainer}>
        <TouchableOpacity onPress={handleAddStudent}>
          <LinearGradient
            colors={['#4B5563', '#1F2937']}
            style={sharedStyles.button}
          >
            <Text style={sharedStyles.buttonText}>Add Student</Text>
          </LinearGradient>
        </TouchableOpacity>
        {student && (
          <TouchableOpacity onPress={handleTrackTrip}>
            <LinearGradient
              colors={['#4B5563', '#1F2937']}
              style={[sharedStyles.button, localStyles.buttonMargin]}
            >
              <Text style={sharedStyles.buttonText}>Track Trip</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
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
  status: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 8,
  },
  actionContainer: {
    gap: 16,
  },
  buttonMargin: {
    marginTop: 16,
  },
});