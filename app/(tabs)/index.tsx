// // import { View, Text, TouchableOpacity } from 'react-native';
// // import { useAppContext } from '../../src/context';
// // import { useRouter } from 'expo-router';
// // import { styles } from '../../src/styles';

// // // Home screen: dynamic based on user state
// // export default function HomeScreen() {
// //   const { guardian, student, selectedDriver } = useAppContext();
// //   const router = useRouter();

// //   // No guardian: prompt signup
// //   if (!guardian) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Welcome</Text>
// //         <Text style={styles.detail}>Please sign up to start.</Text>
// //         <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/signup')}>
// //           <Text style={styles.buttonText}>Sign Up</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }

// //   // No student: prompt add student
// //   if (!student) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Add Child</Text>
// //         <Text style={styles.detail}>Add your child's details.</Text>
// //         <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/student')}>
// //           <Text style={styles.buttonText}>Add Now</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }

// //   // No driver: prompt booking
// //   if (!selectedDriver) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.title}>Book Now</Text>
// //         <Text style={styles.detail}>Choose a driver.</Text>
// //         <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/booking')}>
// //           <Text style={styles.buttonText}>Book Driver</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }

// //   // Repeat user: show status
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Trip Status</Text>
// //       <View style={styles.card}>
// //         <Text style={styles.status}>Child Safe</Text>
// //         <Text style={styles.detail}>Driver: {selectedDriver.name}</Text>
// //         <Text style={styles.detail}>Pickup: {selectedDriver.pickupTime}</Text>
// //         <Text style={styles.detail}>Next: Tomorrow, 8:20 AM</Text>
// //       </View>
// //       <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/booking')}>
// //         <Text style={styles.buttonText}>Book Again</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/tracking')}>
// //         <Text style={styles.buttonText}>Track Now</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// import { View, Text, TouchableOpacity } from 'react-native';
// import { useAppContext } from '../../src/context';
// import { useRouter } from 'expo-router';
// import { styles } from '../../src/styles';

// // Clean home screen - just shows status, no routing logic
// export default function HomeScreen() {
//   const { guardian, student, selectedDriver } = useAppContext();
//   const router = useRouter();

//   // Show current status and quick actions
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome {guardian?.name || 'User'}</Text>
      
//       {selectedDriver ? (
//         // Active booking status
//         <View style={styles.card}>
//           <Text style={styles.status}>Active Booking</Text>
//           <Text style={styles.detail}>Child: {student?.name}</Text>
//           <Text style={styles.detail}>Driver: {selectedDriver.name}</Text>
//           <Text style={styles.detail}>Pickup: {selectedDriver.pickupTime}</Text>
//           <Text style={styles.detail}>Next: Tomorrow, {selectedDriver.pickupTime}</Text>
//         </View>
//       ) : (
//         // No active booking
//         <View style={styles.card}>
//           <Text style={styles.status}>No Active Booking</Text>
//           <Text style={styles.detail}>Ready to book a driver for your child</Text>
//         </View>
//       )}

//       {/* Quick Actions */}
//       <View style={styles.actionContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/booking')}>
//           <Text style={styles.buttonText}>Book Driver</Text>
//         </TouchableOpacity>
        
//         {selectedDriver && (
//           <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/tracking')}>
//             <Text style={styles.buttonText}>Track Driver</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../src/context';
import { useRouter } from 'expo-router';
import { styles } from '../../src/styles';

export default function HomeScreen() {
  const { guardian, student, selectedDriver } = useAppContext();
  const router = useRouter();

  const nextTrip = selectedDriver
    ? `Tomorrow at ${selectedDriver.pickupTime}`
    : 'No trip scheduled';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.scrollContent]}
    >
      <Text style={styles.title}>Welcome {guardian?.name || 'User'}</Text>
      <View style={styles.card}>
        <Text style={styles.status}>Next Trip</Text>
        <Text style={styles.detail}>{nextTrip}</Text>
        {selectedDriver && (
          <>
            <Text style={styles.detail}>Child: {student?.name || 'N/A'}</Text>
            <Text style={styles.detail}>Driver: {selectedDriver.name}</Text>
          </>
        )}
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('AddNewStudent')}>
          <Text style={styles.buttonText}>Add Another Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.replace('(tabs)/AvailableDrivers')}>
          <Text style={styles.buttonText}>Book Driver</Text>
        </TouchableOpacity>
        {selectedDriver && (
          <TouchableOpacity style={styles.button} onPress={() => router.replace('(tabs)/Tracking')}>
            <Text style={styles.buttonText}>Track Driver</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}