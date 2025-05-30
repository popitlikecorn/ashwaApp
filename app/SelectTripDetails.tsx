import { View, Text, TouchableOpacity } from 'react-native';
   import { useRouter } from 'expo-router';
   import { useAppContext } from '../src/context';
   import { styles } from '../src/styles';

   export default function SelectTripDetailsScreen() {
     const { selectedDriver, selectedRoute } = useAppContext();
     const router = useRouter();

     const handleConfirmDetails = () => {
       router.replace('Confirmation');
     };

     return (
       <View style={styles.container}>
         <Text style={styles.title}>Trip Details</Text>
         <View style={styles.card}>
           <Text style={styles.detail}>Driver: {selectedDriver?.name || 'N/A'}</Text>
           <Text style={styles.detail}>Route: {selectedRoute?.name || 'N/A'}</Text>
           <Text style={styles.detail}>Pickup: {selectedDriver?.pickupTime || 'N/A'}</Text>
           <Text style={styles.detail}>Fee: ₹{selectedDriver?.fee || 0}/month</Text>
         </View>
         <TouchableOpacity style={styles.button} onPress={handleConfirmDetails}>
           <Text style={styles.buttonText}>Confirm Booking</Text>
         </TouchableOpacity>
       </View>
     );
   }