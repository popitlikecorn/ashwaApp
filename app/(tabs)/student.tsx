import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { User, School } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState } from 'react';
import { styles, colors } from '../../src/styles';

export default function StudentScreen() {
  const { setStudent } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');

  const handleSubmit = () => {
    console.log('Saving student:', { name, className, schoolLocation });
    setStudent({ name, className, schoolLocation });
    router.push('/(tabs)/route');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <User size={20} color={colors.text} style={styles.icon} />
        <Text style={styles.text}>Student Details</Text>
      </View>
      <TextInput
        placeholder='e.g., Aarav Sharma'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder='e.g., 5th Grade'
        value={className}
        onChangeText={setClassName}
        style={styles.input}
      />
      <View style={[styles.row, styles.marginBottom12]}>
        <TextInput
          placeholder='Search for school'
          value={schoolLocation}
          onChangeText={setSchoolLocation}
          style={[styles.input, styles.flex1]}
        />
        <Button mode='text' icon={() => <School size={20} color={colors.text} />}>
          {' '}
        </Button>
      </View>
      <Text style={[styles.text, styles.smallText, { color: colors.secondary }]}>Uses Google Maps Places API for autocomplete</Text>
      <Button
        mode='contained'
        onPress={handleSubmit}
        style={styles.button}
        disabled={!name || !className || !schoolLocation}
      >
        Continue to Route Selection
      </Button>
    </View>
  );
}