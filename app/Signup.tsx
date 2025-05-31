import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '../src/context';
import { styles as sharedStyles, colors } from '../src/styles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen() {
  const { setGuardian } = useAppContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    if (!name || !phone.trim()) {
      Alert.alert('Error', 'Please enter name and phone');
      return;
    }
    // Backend placeholder: Send OTP to phone
    console.log('Sending OTP to', phone);
    // await fetch('https://api.example.com/send-otp', { method: 'POST', body: JSON.stringify({ phone }) });
    setOtpSent(true);
    Alert.alert('Success', 'OTP sent to ' + phone);
  };

  const verifyOtp = async () => {
    // Hardcoded validation for now
    if (otp === '1234') {
      setGuardian({ name, phone });
      router.replace('AddNewStudent');
    } else {
      // Backend placeholder: Verify OTP
      // await fetch('https://api.example.com/verify-otp', { method: 'POST', body: JSON.stringify({ phone, otp }) });
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={[sharedStyles.container, localStyles.container]}>
      <View style={localStyles.header}>
        <Ionicons name="call-outline" size={60} color={colors.primary} />
        <Text style={sharedStyles.textContent}>Your Details</Text>
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
        <Ionicons name="call-outline" size={20} color={colors.secondary} style={localStyles.icon} />
        <TextInput
          style={sharedStyles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholderTextColor={colors.secondary}
        />
      </View>
      {otpSent && (
        <View style={localStyles.inputContainer}>
          <Ionicons name="key-outline" size={20} color={colors.secondary} style={localStyles.icon} />
          <TextInput
            style={sharedStyles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={4}
            placeholderTextColor={colors.secondary}
          />
        </View>
      )}
      <TouchableOpacity onPress={otpSent ? verifyOtp : sendOtp}>
        <LinearGradient
          colors={['#4B5563', '#1F2937']}
          style={[sharedStyles.button, localStyles.buttonWithBorder]}
        >
          <Text style={sharedStyles.buttonText}>{otpSent ? 'Verify OTP' : 'Send OTP'}</Text>
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
  buttonWithBorder: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
});