// import { View, Text, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useAppContext } from '../src/context';
// import { styles } from '../src/styles';

// // Confirmation screen: show booking success
// export default function ConfirmationScreen() {
//   const { selectedDriver } = useAppContext();
//   const router = useRouter();

//   // Navigate to Home after confirmation
//   const handleConfirm = () => {
//     router.replace('index'); // Changed from router.push('/(tabs)/index')
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Yay, Booked!</Text>
//       <View style={styles.card}>
//         <Text style={styles.success}>Booking Confirmed</Text>
//         <Text style={styles.detail}>Driver: {selectedDriver?.name || 'Raj Kumar'}</Text>
//         <Text style={styles.detail}>Pickup: {selectedDriver?.pickupTime || '8:20 AM'}</Text>
//         <Text style={styles.detail}>Fee: ₹{selectedDriver?.fee || 5000}/month</Text>
//         <Text style={styles.status}>Next Trip: Tomorrow at 8:20 AM</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleConfirm}>
//         <Text style={styles.buttonText}>Go Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import { View, Text, TouchableOpacity } from 'react-native';
   import { useRouter } from 'expo-router';
   import { useAppContext } from '../src/context';
   import { styles } from '../src/styles';

   export default function ConfirmationScreen() {
     const { selectedDriver } = useAppContext();
     const router = useRouter();

     const handleConfirm = () => {
       router.replace('Tracking');
     };

     return (
       <View style={styles.container}>
         <Text style={styles.title}>Yay, Booked!</Text>
         <View style={styles.card}>
           <Text style={styles.success}>Booking Confirmed</Text>
           <Text style={styles.detail}>Driver: {selectedDriver?.name || 'Raj Kumar'}</Text>
           <Text style={styles.detail}>Pickup: {selectedDriver?.pickupTime || '8:20 AM'}</Text>
           <Text style={styles.detail}>Fee: ₹{selectedDriver?.fee || 5000}/month</Text>
           <Text style={styles.status}>Next Trip: Tomorrow at 8:20 AM</Text>
         </View>
         <TouchableOpacity style={styles.button} onPress={handleConfirm}>
           <Text style={styles.buttonText}>Track Driver</Text>
         </TouchableOpacity>
       </View>
     );
   }