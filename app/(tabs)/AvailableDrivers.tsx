import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext, Driver } from '../../src/context';
import { styles } from '../../src/styles';

export default function AvailableDriversScreen() {
  const { selectedRoute, setSelectedDriver } = useAppContext();
  const router = useRouter();
  const allDrivers: Driver[] = [
    { name: 'Raj Kumar', fee: 2500, pickupTime: '8:20 AM', dropoffTime: '3:00 PM', routeId: '1' },
    { name: 'Anil Sharma', fee: 2800, pickupTime: '8:30 AM', dropoffTime: '3:10 PM', routeId: '2' },
    { name: 'Vikram Singh', fee: 2300, pickupTime: '8:15 AM', dropoffTime: '3:05 PM', routeId: '3' },
  ];

  const drivers = allDrivers.filter((driver) => driver.routeId === selectedRoute?.id);

  const handleSelectDriver = (driver: Driver) => {
    setSelectedDriver(driver);
    router.replace('SelectTripDetails');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Available Drivers</Text>
      {drivers.length === 0 ? (
        <Text style={styles.errorText}>No drivers available for this route</Text>
      ) : (
        drivers.map((driver, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleSelectDriver(driver)}>
            <View style={styles.driverHeader}>
              <Text style={styles.driverName}>{driver.name}</Text>
              <Text style={styles.detail}>₹{driver.fee}/month</Text>
            </View>
            <Text style={styles.detail}>Pickup: {driver.pickupTime}</Text>
            <Text style={styles.detail}>Drop-off: {driver.dropoffTime}</Text>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}
// import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useAppContext } from '../../src/context';
// import React, { useState } from 'react';
// import { styles } from '../../src/styles';

// interface Driver {
//   id: string;
//   name: string;
//   fee: number;
//   pickupTime: string;
//   dropoffTime: string;
//   rating?: number;
//   experience?: string;
// }

// export default function BookingScreen() {
//   const { setSelectedDriver } = useAppContext();
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   // Mock data with expanded driver information
//   const drivers: Driver[] = [
//     { 
//       id: '1',
//       name: 'Raj Kumar',
//       fee: 5000,
//       pickupTime: '8:20 AM',
//       dropoffTime: '3:00 PM',
//       rating: 4.8,
//       experience: '5 years'
//     },
//     { 
//       id: '2',
//       name: 'Anita Sharma',
//       fee: 4500,
//       pickupTime: '8:30 AM',
//       dropoffTime: '3:15 PM',
//       rating: 4.9,
//       experience: '7 years'
//     },
//     { 
//       id: '3',
//       name: 'Vikram Singh',
//       fee: 5200,
//       pickupTime: '8:15 AM',
//       dropoffTime: '2:45 PM',
//       rating: 4.7,
//       experience: '4 years'
//     },
//   ];

//   const handleSelectDriver = async (driver: Driver) => {
//     try {
//       setIsLoading(true);
//       setSelectedDriver(driver);
//       await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
//       router.replace('/confirmation'); // Fixed from '/(tabs)'
//     } catch (error) {
//       console.error('Error booking driver:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderDriverCard = (driver: Driver) => (
//     <View key={driver.id} style={styles.card}>
//       <View style={styles.driverHeader}>
//         <Text style={styles.driverName}>{driver.name}</Text>
//         <View style={styles.row}>
//           {driver.rating && (
//             <Text style={styles.badge}>⭐ {driver.rating}</Text>
//           )}
//           <Text style={styles.badge}>Verified</Text>
//         </View>
//       </View>
      
//       <View style={styles.detailsContainer}>
//         <Text style={styles.detail}>Monthly Fee: ₹{driver.fee}</Text>
//         <Text style={styles.detail}>Pickup: {driver.pickupTime}</Text>
//         <Text style={styles.detail}>Drop-off: {driver.dropoffTime}</Text>
//         {driver.experience && (
//           <Text style={styles.detail}>Experience: {driver.experience}</Text>
//         )}
//       </View>
      
//       <TouchableOpacity 
//         style={[styles.button, isLoading && styles.fadedButton]} 
//         onPress={() => handleSelectDriver(driver)}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator color="#FFFFFF" />
//         ) : (
//           <Text style={styles.buttonText}>Book Now</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView 
//       contentContainerStyle={styles.scrollContent}
//       showsVerticalScrollIndicator={false}
//     >
//       <Text style={styles.title}>Available Drivers</Text>
//       {drivers.map(renderDriverCard)}
//     </ScrollView>
//   );
// }

// // import { View, Text, TouchableOpacity } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import { useAppContext } from '../../src/context';
// // import React from 'react';
// // import { styles } from '../../src/styles';

// // // Driver type for type safety
// // interface Driver {
// //   name: string;
// //   fee: number;
// //   pickupTime: string;
// //   dropoffTime: string;
// // }

// // // Booking screen: select driver and confirm
// // export default function BookingScreen() {
// //   const { setSelectedDriver } = useAppContext();
// //   const router = useRouter();

// //   // Hardcoded driver data
// //   const drivers: Driver[] = [
// //     { name: 'Raj Kumar', fee: 5000, pickupTime: '8:20 AM', dropoffTime: '3:00 PM' },
// //     { name: 'Anita Sharma', fee: 4500, pickupTime: '8:30 AM', dropoffTime: '3:15 PM' },
// //   ];

// //   // Select driver and proceed to confirmation
// //   const handleSelectDriver = (driver: Driver) => {
// //     setSelectedDriver(driver);
// //     router.push('/confirmation');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Book Driver</Text>
// //       {drivers.map((driver, index) => (
// //         <View key={index} style={styles.card}>
// //           <Text style={styles.badge}>Verified Driver</Text>
// //           <Text style={styles.detail}>Name: {driver.name}</Text>
// //           <Text style={styles.detail}>Fee: ₹{driver.fee}/month</Text>
// //           <Text style={styles.detail}>Pickup: {driver.pickupTime}</Text>
// //           <Text style={styles.detail}>Drop-off: {driver.dropoffTime}</Text>
// //           <TouchableOpacity style={styles.button} onPress={() => handleSelectDriver(driver)}>
// //             <Text style={styles.buttonText}>Select</Text>
// //           </TouchableOpacity>
// //         </View>
// //       ))}
// //     </View>
// //   );
// // }
// // // import { View, Text } from 'react-native';
// // // import { Card, Button } from 'react-native-paper';
// // // import { Bell } from 'lucide-react-native';
// // // import { useState } from 'react';
// // // import { useRouter } from 'expo-router';
// // // import { useAppContext } from '../../src/context';
// // // import { styles, colors } from '../../src/styles';

// // // export default function BookingScreen() {
// // //   const { selectedDriver } = useAppContext();
// // //   const router = useRouter();
// // //   const [bookingConfirmed, setBookingConfirmed] = useState(false);

// // //   const handleConfirm = () => {
// // //     console.log('Booking confirmed with driver:', selectedDriver);
// // //     setBookingConfirmed(true);
// // //     setTimeout(() => {
// // //       setBookingConfirmed(false);
// // //       router.push('/confirmation');
// // //     }, 2000);
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.row}>
// // //         <Bell size={20} color={colors.text} style={styles.icon} />
// // //         <Text style={styles.text}>Booking Confirmation</Text>
// // //       </View>
// // //       {bookingConfirmed ? (
// // //         <View style={[styles.card, styles.border]}>
// // //           <Text style={[styles.text, styles.boldText, styles.fontSize16, styles.marginBottom8, { color: colors.primary }]}>Booking Confirmed!</Text>
// // //           <Text style={[styles.text, styles.smallText]}>
// // //             Your booking has been confirmed with {selectedDriver?.name || 'Raj Kumar'}
// // //           </Text>
// // //         </View>
// // //       ) : (
// // //         <Card style={styles.card}>
// // //           <Card.Content>
// // //             <Text style={[styles.text, styles.title]}>{selectedDriver?.name || 'Raj Kumar'}</Text>
// // //             <Text style={[styles.text, { color: colors.secondary }]}>{selectedDriver?.route || 'North Delhi to DPS'}</Text>
// // //             <View style={styles.rowSpaceBetween}>
// // //               <Text style={[styles.text, { color: colors.secondary }]}>Seats Available</Text>
// // //               <Text style={[styles.text, styles.boldText]}>{selectedDriver?.seats || '3'}</Text>
// // //             </View>
// // //             <View style={styles.rowSpaceBetween}>
// // //               <Text style={[styles.text, { color: colors.secondary }]}>Distance</Text>
// // //               <Text style={[styles.text, styles.boldText]}>{selectedDriver?.distance || 3.2} km</Text>
// // //             </View>
// // //             <View style={styles.rowSpaceBetween}>
// // //               <Text style={[styles.text, { color: colors.secondary }]}>Monthly Fee</Text>
// // //               <Text style={[styles.text, styles.boldText, { color: colors.primary }]}>₹{selectedDriver?.fee || 5000}</Text>
// // //             </View>
// // //             <View style={styles.rowSpaceBetween}>
// // //               <Text style={[styles.text, { color: colors.secondary }]}>Pickup Time</Text>
// // //               <Text style={[styles.text, styles.boldText, { color: colors.primary }]}>{selectedDriver?.pickupTime || '8:20 AM'}</Text>
// // //             </View>
// // //             <View style={[styles.row, styles.marginTop16]}>
// // //               <Button
// // //                 mode='outlined'
// // //                 onPress={() => router.push('/(tabs)/route')}
// // //                 style={[styles.button, styles.flex1, styles.marginRight8]}
// // //               >
// // //                 Cancel
// // //               </Button>
// // //               <Button
// // //                 mode='contained'
// // //                 onPress={handleConfirm}
// // //                 style={[styles.button, styles.flex1]}
// // //               >
// // //                 Confirm Booking
// // //               </Button>
// // //             </View>
// // //           </Card.Content>
// // //         </Card>
// // //       )}
// // //     </View>
// // //   );
// // // }