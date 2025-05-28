import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAppContext } from '../../src/context';
import React, { useState } from 'react';

export default function StudentScreen() {
  const { setStudent } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [school, setSchool] = useState('');

  const handleSubmit = () => {
    console.log('Saving student:', { name, class: className, school_location: school });
    setStudent({ name, class: className, school_location: school });
    router.push('/(tabs)/route');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Student Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Class"
        value={className}
        onChangeText={setClassName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <TextInput
        placeholder="School"
        value={school}
        onChangeText={setSchool}
        style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
      />
      <Button mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
}