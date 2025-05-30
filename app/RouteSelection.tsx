// // import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import { useAppContext } from '../../src/context';
// // import { Ionicons } from '@expo/vector-icons';
// // import React, { useState } from 'react';
// // import { styles } from '../../src/styles';

// // interface Route {
// //   id: string;
// //   name: string;
// //   description: string;
// //   stops: string[];
// //   estimatedTime: string;
// //   fee: number;
// // }

// // export default function RouteScreen() {
// //   const { setSelectedRoute } = useAppContext();
// //   const router = useRouter();
// //   const [selectedId, setSelectedId] = useState<string>('');

// //   const routes: Route[] = [
// //     {
// //       id: '1',
// //       name: 'North Delhi Route',
// //       description: 'Covering major areas in North Delhi',
// //       stops: ['Model Town', 'GTB Nagar', 'Civil Lines', 'Rohini'],
// //       estimatedTime: '45-50 mins',
// //       fee: 2500
// //     },
// //     {
// //       id: '2',
// //       name: 'South Delhi Route',
// //       description: 'Covering major areas in South Delhi',
// //       stops: ['Lajpat Nagar', 'Defence Colony', 'Saket', 'Malviya Nagar'],
// //       estimatedTime: '50-55 mins',
// //       fee: 2800
// //     },
// //     {
// //       id: '3',
// //       name: 'East Delhi Route',
// //       description: 'Covering major areas in East Delhi',
// //       stops: ['Mayur Vihar', 'Patparganj', 'Laxmi Nagar', 'Preet Vihar'],
// //       estimatedTime: '40-45 mins',
// //       fee: 2300
// //     }
// //   ];

// //   const handleRouteSelect = (route: Route) => {
// //     setSelectedId(route.id);
// //     setSelectedRoute(route);
// //     setTimeout(() => {
// //       router.replace('booking'); // Changed from router.push('/booking')
// //     }, 300);
// //   };

// //   return (
// //     <ScrollView 
// //       style={styles.container}
// //       contentContainerStyle={styles.contentContainer}
// //     >
// //       <View style={styles.routeHeader}>
// //         <Ionicons name="map-outline" size={24} color="#2563EB" />
// //         <Text style={styles.title}>Select Your Route</Text>
// //       </View>
// //       <Text style={styles.subtitle}>Choose the most convenient route for your child</Text>

// //       {routes.map((route) => (
// //         <TouchableOpacity
// //           key={route.id}
// //           style={[
// //             styles.card,
// //             selectedId === route.id && styles.selectedCard
// //           ]}
// //           onPress={() => handleRouteSelect(route)}
// //         >
// //           <View style={styles.routeHeader}>
// //             <Text style={styles.routeName}>{route.name}</Text>
// //             <Text style={styles.routeFee}>₹{route.fee}/month</Text>
// //           </View>

// //           <Text style={styles.routeDescription}>{route.description}</Text>

// //           <View style={styles.routeDetails}>
// //             <View style={styles.iconRow}>
// //               <Ionicons name="time-outline" size={16} color="#4B5563" />
// //               <Text style={styles.detailText}>{route.estimatedTime}</Text>
// //             </View>

// //             <View style={styles.stopsContainer}>
// //               <Text style={styles.stopsLabel}>Stops:</Text>
// //               <Text style={styles.stopsText}>{route.stops.join(' → ')}</Text>
// //             </View>
// //           </View>
// //         </TouchableOpacity>
// //       ))}
// //     </ScrollView>
// //   );
// // }
// import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useAppContext } from '../../src/context';
// import { styles } from '../../src/styles';
// import { useState } from 'react';

// const mockRoutes = [
//   { id: '1', name: 'North Route', description: 'Covers north city', stops: ['Stop A', 'Stop B'], estimatedTime: '30 mins', fee: 5000 },
//   { id: '2', name: 'South Route', description: 'Covers south city', stops: ['Stop C', 'Stop D'], estimatedTime: '40 mins', fee: 5500 },
// ];

// export default function RouteSelectionScreen() {
//   const { setSelectedRoute } = useAppContext();
//   const router = useRouter();
//   const [selectedId, setSelectedId] = useState<string | null>(null);

//   const handleSelectRoute = (route: typeof mockRoutes[0]) => {
//     setSelectedRoute(route);
//     setSelectedId(route.id);
//     router.replace('AvailableDrivers');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContent}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Select Route</Text>
//         {mockRoutes.map((route) => (
//           <TouchableOpacity key={route.id} style={[styles.card, route.id === selectedId ? styles.selectedCard : null]} onPress={() => handleSelectRoute(route)}>
//             <View style={styles.routeHeader}>
//               <Text style={styles.routeName}>{route.name}</Text>
//               <Text style={styles.routeFee}>₹{route.fee}/month</Text>
//             </View>
//             <Text style={styles.routeDescription}>{route.description}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   </ScrollView>
// );
// }
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext, Route, Driver } from '../src/context';
import { Ionicons } from '@expo/vector-icons';
import { styles, colors } from '../src/styles';
import React, { useState } from 'react';

export default function RouteSelectionScreen() {
  const { student, setSelectedRoute } = useAppContext();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>('');
  const [pickup, setPickup] = useState<string>('');
  const [dropoff, setDropoff] = useState<string>('');
  const school = student?.school || 'N/A';

  const routes: Route[] = [
    {
      id: '1',
      name: 'North Delhi Route',
      description: 'Covering major areas in North Delhi',
      stops: ['Model Town', 'GTB Nagar', 'Civil Lines', 'Rohini'],
      estimatedTime: '45-50 mins',
      fee: 2500,
    },
    {
      id: '2',
      name: 'South Delhi Route',
      description: 'Covering major areas in South Delhi',
      stops: ['Lajpat Nagar', 'Defence Colony', 'Saket', 'Malviya Nagar'],
      estimatedTime: '50-55 mins',
      fee: 2800,
    },
    {
      id: '3',
      name: 'East Delhi Route',
      description: 'Covering major areas in East Delhi',
      stops: ['Mayur Vihar', 'Patparganj', 'Laxmi Nagar', 'Preet Vihar'],
      estimatedTime: '40-45 mins',
      fee: 2300,
    },
  ];

  const drivers: Driver[] = [
    { name: 'Raj Kumar', fee: 2500, pickupTime: '8:20 AM', dropoffTime: '3:00 PM', routeId: '1' },
    { name: 'Anil Sharma', fee: 2800, pickupTime: '8:30 AM', dropoffTime: '3:10 PM', routeId: '2' },
    { name: 'Vikram Singh', fee: 2300, pickupTime: '8:15 AM', dropoffTime: '3:05 PM', routeId: '3' },
  ];

  const handleRouteSelect = (route: Route) => {
    setSelectedId(route.id);
    setSelectedRoute(route);
    setTimeout(() => {
      router.replace('(tabs)/AvailableDrivers');
    }, 300);
  };

  const isFormValid = pickup.trim() !== '' && dropoff.trim() !== '';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.routeHeader}>
        <Ionicons name="map-outline" size={24} color={colors.primary} />
        <Text style={styles.title}>Select Your Route</Text>
      </View>
      <Text style={styles.subtitle}>Choose the best route for {student?.name || 'your child'}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Pickup Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pickup point"
          value={pickup}
          onChangeText={setPickup}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Drop-off Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter drop-off point"
          value={dropoff}
          onChangeText={setDropoff}
          placeholderTextColor={colors.secondary}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>School (Auto-filled)</Text>
        <TextInput
          style={[styles.input, styles.disabledInput]}
          value={school}
          editable={false}
        />
      </View>

      {!isFormValid && (
        <Text style={styles.errorText}>Please enter pickup and drop-off locations</Text>
      )}

      {isFormValid && (
        <>
          <Text style={styles.sectionTitle}>Available Routes</Text>
          {routes.map((route) => {
            const routeDrivers = drivers.filter((d) => d.routeId === route.id);
            return (
              <TouchableOpacity
                key={route.id}
                style={[styles.card, selectedId === route.id && styles.selectedCard]}
                onPress={() => handleRouteSelect(route)}
                disabled={!isFormValid}
              >
                <View style={styles.routeHeader}>
                  <Text style={styles.routeName}>{route.name}</Text>
                  <Text style={styles.routeFee}>₹{route.fee}/month</Text>
                </View>
                <Text style={styles.routeDescription}>{route.description}</Text>
                <View style={styles.routeDetails}>
                  <View style={styles.iconRow}>
                    <Ionicons name="time-outline" size={16} color={colors.secondary} />
                    <Text style={styles.detailText}>{route.estimatedTime}</Text>
                  </View>
                  <View style={styles.iconRow}>
                    <Ionicons name="people-outline" size={16} color={colors.secondary} />
                    <Text style={styles.detailText}>{routeDrivers.length} driver(s) available</Text>
                  </View>
                  <View style={styles.stopsContainer}>
                    <Text style={styles.stopsLabel}>Stops:</Text>
                    <Text style={styles.stopsText}>{route.stops.join(' → ')}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </>
      )}
    </ScrollView>
  );
}