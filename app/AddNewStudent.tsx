import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles as sharedStyles, colors } from '../src/styles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddNewStudentScreen() {
  const { setStudent } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [className, setClassName] = useState('');

  const handleAddStudent = async () => {
    if (!name || !school || !className) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    // Backend placeholder: Submit student data
    console.log('Adding student:', { name, school, class: className });
    // await fetch('https://api.example.com/add-student', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, school, class: className }),
    // });
    setStudent({ name, school, class: className });
    router.replace('RouteSelection');
  };

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="school-outline" size={64} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Student Details</Text>
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="person-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="business-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="School"
          value={school}
          onChangeText={setSchool}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={localStyles.inputContainer}>
        <Ionicons name="book-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Class"
          value={className}
          onChangeText={setClassName}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <TouchableOpacity onPress={handleAddStudent}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={sharedStyles.button}
        >
          <Text style={sharedStyles.buttonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  icon: {
    marginRight: 8,
  },
});