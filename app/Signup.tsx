// // import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import { useAppContext } from '../../src/context';
// // import React, { useState } from 'react';
// // import { styles } from '../../src/styles';

// // // Signup screen: phone-based registration with OTP (front-end only)
// // export default function SignupScreen() {
// //   const { setGuardian } = useAppContext();
// //   const router = useRouter();
// //   const [name, setName] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [otp, setOtp] = useState('');
// //   const [otpSent, setOtpSent] = useState(false);

// //   // Simulate OTP send (backend shelved)
// //   const handleSendOtp = () => {
// //     console.log('Sending OTP to', phone);
// //     setOtpSent(true);
// //   };

// //   // Save guardian and proceed to student
// //   const handleSignup = () => {
// //     setGuardian({ name, phone });
// //     router.push('/(tabs)/student');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Sign Up</Text>
// //       <TextInput
// //         placeholder="Your Name"
// //         value={name}
// //         onChangeText={setName}
// //         style={styles.input}
// //       />
// //       <TextInput
// //         placeholder="Phone Number"
// //         value={phone}
// //         onChangeText={setPhone}
// //         keyboardType="phone-pad"
// //         style={styles.input}
// //       />
// //       {otpSent ? (
// //         <>
// //           <TextInput
// //             placeholder="Enter OTP"
// //             value={otp}
// //             onChangeText={setOtp}
// //             keyboardType="numeric"
// //             style={styles.input}
// //           />
// //           <TouchableOpacity style={styles.button} onPress={handleSignup}>
// //             <Text style={styles.buttonText}>Register</Text>
// //           </TouchableOpacity>
// //         </>
// //       ) : (
// //         <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
// //           <Text style={styles.buttonText}>Send OTP</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );
// // }
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useAppContext } from '../../src/context';
// import React, { useState } from 'react';
// import { styles } from '../../src/styles';

// export default function SignupScreen() {
//   const { setGuardian } = useAppContext();
//   const router = useRouter();
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOtp = () => {
//     if (!name.trim() || !phone.trim()) return;
//     console.log('Sending OTP to', phone);
//     setOtpSent(true);
//   };

//   const handleSignup = () => {
//     if (!otp.trim()) return;
//     setGuardian({ name: name.trim(), phone: phone.trim() });
//     router.replace('/student');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
      
//       <TextInput
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//         style={styles.input}
//       />
      
//       <TextInput
//         placeholder="Phone Number"
//         value={phone}
//         onChangeText={setPhone}
//         keyboardType="phone-pad"
//         style={styles.input}
//       />
      
//       {otpSent && (
//         <TextInput
//           placeholder="Enter OTP"
//           value={otp}
//           onChangeText={setOtp}
//           keyboardType="numeric"
//           style={styles.input}
//         />
//       )}
      
//       <TouchableOpacity 
//         style={styles.button} 
//         onPress={otpSent ? handleSignup : handleSendOtp}
//       >
//         <Text style={styles.buttonText}>
//           {otpSent ? 'Register' : 'Send OTP'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
   import { useRouter } from 'expo-router';
   import { useAppContext } from '../src/context';
   import { styles } from '../src/styles';
   import { useState } from 'react';

   export default function SignupScreen() {
     const { setGuardian } = useAppContext();
     const router = useRouter();
     const [name, setName] = useState('');
     const [phone, setPhone] = useState('');

     const handleSignup = () => {
       console.log('Sending OTP to', phone);
       setGuardian({ name, phone });
       router.replace('AddNewStudent');
     };

     return (
       <View style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>
         <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
         <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
         <TouchableOpacity style={styles.button} onPress={handleSignup}>
           <Text style={styles.buttonText}>Send OTP</Text>
         </TouchableOpacity>
       </View>
     );
   }