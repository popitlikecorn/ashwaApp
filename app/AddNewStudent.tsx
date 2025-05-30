import { View, Text, TextInput, TouchableOpacity } from 'react-native';
   import { useRouter } from 'expo-router';
   import { useAppContext } from '../src/context';
   import { styles } from '../src/styles';
   import { useState } from 'react';

   export default function AddNewStudentScreen() {
     const { setStudent } = useAppContext();
     const router = useRouter();
     const [name, setName] = useState('');
     const [school, setSchool] = useState('');
     const [className, setClassName] = useState('');

     const handleAddStudent = () => {
       setStudent({ name, school, class: className });
       router.replace('RouteSelection');
     };

     return (
       <View style={styles.container}>
         <Text style={styles.title}>Add Your Child</Text>
         <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
         <TextInput style={styles.input} placeholder="School" value={school} onChangeText={setSchool} />
         <TextInput style={styles.input} placeholder="Class" value={className} onChangeText={setClassName} />
         <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
           <Text style={styles.buttonText}>Next</Text>
         </TouchableOpacity>
       </View>
     );
   }

// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useAppContext } from '../../src/context';
// import { styles } from '../../src/styles';
// import { useState } from 'react';

// export default function AddStudentScreen() {
//   const { setStudent } = useAppContext();
//   const router = useRouter();
//   const [name, setName] = useState('');
//   const [school, setSchool] = useState('');
//   const [className, setClassName] = useState('');

//   const handleAddStudent = () => {
//     setStudent({ name, school, class: className });
//     router.replace('RouteSelection');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Your Child</Text>
//       <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
//       <TextInput style={styles.input} placeholder="School" value={school} onChangeText={setSchool} />
//       <TextInput style={styles.input} placeholder="Class" value={className} onChangeText={setClassName} />
//       <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// // import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import { useAppContext } from '../../src/context';
// // import React, { useState } from 'react';
// // import { styles } from '../../src/styles';

// // // Define student type for type safety
// // interface Student {
// //   name: string;
// //   school: string;
// //   class: string;
// // }

// // export default function StudentScreen() {
// //   const { setStudent } = useAppContext();
// //   const router = useRouter();
  
// //   // State with proper types
// //   const [formData, setFormData] = useState<Student>({
// //     name: '',
// //     school: '',
// //     class: ''
// //   });

// //   // Form validation
// //   const validateForm = (): boolean => {
// //     if (!formData.name.trim()) {
// //       Alert.alert('Error', "Please enter your child's name");
// //       return false;
// //     }
// //     if (!formData.school.trim()) {
// //       Alert.alert('Error', 'Please enter school name');
// //       return false;
// //     }
// //     if (!formData.class.trim()) {
// //       Alert.alert('Error', 'Please enter class');
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleSave = () => {
// //     if (!validateForm()) return;
    
// //     setStudent({
// //       name: formData.name.trim(),
// //       school: formData.school.trim(),
// //       class: formData.class.trim()
// //     });
    
// //     router.replace('route'); // Simplified from '/(tabs)/route'
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Add Your Child</Text>
      
// //       <TextInput
// //         placeholder="Child's Name"
// //         value={formData.name}
// //         onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
// //         style={styles.input}
// //         maxLength={50}
// //         autoCapitalize="words"
// //       />
      
// //       <TextInput
// //         placeholder="School Name"
// //         value={formData.school}
// //         onChangeText={(text) => setFormData(prev => ({ ...prev, school: text }))}
// //         style={styles.input}
// //         maxLength={100}
// //         autoCapitalize="words"
// //       />
      
// //       <TextInput
// //         placeholder="Class (e.g., 5th, 10th)"
// //         value={formData.class}
// //         onChangeText={(text) => setFormData(prev => ({ ...prev, class: text }))}
// //         style={styles.input}
// //         maxLength={10}
// //       />
      
// //       <TouchableOpacity 
// //         style={[
// //           styles.button,
// //           !validateForm() && styles.fadedButton
// //         ]} 
// //         onPress={handleSave}
// //         disabled={!validateForm()}
// //       >
// //         <Text style={styles.buttonText}>Continue</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }
// // // import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// // // import { useRouter } from 'expo-router';
// // // import { useAppContext } from '../../src/context';
// // // import React, { useState } from 'react';
// // // import { styles } from '../../src/styles';

// // // // Student screen: add child details
// // // export default function StudentScreen() {
// // //   const { setStudent } = useAppContext();
// // //   const router = useRouter();
// // //   const [name, setName] = useState('');
// // //   const [school, setSchool] = useState('');
// // //   const [className, setClassName] = useState('');

// // //   // Save student and proceed to route
// // //   const handleSubmit = () => {
// // //     setStudent({ name, school, class: className });
// // //     router.push('/(tabs)/route');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Add Kid</Text>
// // //       <TextInput
// // //         placeholder="Kid's Name"
// // //         value={name}
// // //         onChangeText={setName}
// // //         style={styles.input}
// // //       />
// // //       <TextInput
// // //         placeholder="School Name"
// // //         value={school}
// // //         onChangeText={setSchool}
// // //         style={styles.input}
// // //       />
// // //       <TextInput
// // //         placeholder="Class"
// // //         value={className}
// // //         onChangeText={setClassName}
// // //         style={styles.input}
// // //       />
// // //       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
// // //         <Text style={styles.buttonText}>Next</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // import { View, TextInput, Text } from 'react-native';
// // // import { Button } from 'react-native-paper';
// // // import { User, School } from 'lucide-react-native';
// // // import { useRouter } from 'expo-router';
// // // import { useAppContext } from '../../src/context';
// // // import React, { useState } from 'react';
// // // import { styles, colors } from '../../src/styles';

// // // export default function StudentScreen() {
// // //   const { setStudent } = useAppContext();
// // //   const router = useRouter();
// // //   const [name, setName] = useState('');
// // //   const [className, setClassName] = useState('');
// // //   const [schoolLocation, setSchoolLocation] = useState('');

// // //   const handleSubmit = () => {
// // //     console.log('Saving student:', { name, className, schoolLocation });
// // //     setStudent({ name, className, schoolLocation });
// // //     router.push('/(tabs)/route');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.row}>
// // //         <User size={20} color={colors.text} style={styles.icon} />
// // //         <Text style={styles.text}>Student Details</Text>
// // //       </View>
// // //       <TextInput
// // //         placeholder='e.g., Aarav Sharma'
// // //         value={name}
// // //         onChangeText={setName}
// // //         style={styles.input}
// // //       />
// // //       <TextInput
// // //         placeholder='e.g., 5th Grade'
// // //         value={className}
// // //         onChangeText={setClassName}
// // //         style={styles.input}
// // //       />
// // //       <View style={[styles.row, styles.marginBottom12]}>
// // //         <TextInput
// // //           placeholder='Search for school'
// // //           value={schoolLocation}
// // //           onChangeText={setSchoolLocation}
// // //           style={[styles.input, styles.flex1]}
// // //         />
// // //         <Button mode='text' icon={() => <School size={20} color={colors.text} />}>
// // //           {' '}
// // //         </Button>
// // //       </View>
// // //       <Text style={[styles.text, styles.smallText, { color: colors.secondary }]}>Uses Google Maps Places API for autocomplete</Text>
// // //       <Button
// // //         mode='contained'
// // //         onPress={handleSubmit}
// // //         style={styles.button}
// // //         disabled={!name || !className || !schoolLocation}
// // //       >
// // //         Continue to Route Selection
// // //       </Button>
// // //     </View>
// // //   );
// // // }

// // // import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// // // import { useRouter } from 'expo-router';
// // // import { useAppContext } from '../../src/context';
// // // import React, { useState } from 'react';
// // // import { styles } from '../../src/styles';

// // // export default function StudentScreen() {
// // //   const { setStudent } = useAppContext();
// // //   const router = useRouter();
// // //   const [name, setName] = useState('');
// // //   const [school, setSchool] = useState('');
// // //   const [className, setClassName] = useState('');

// // //   const handleSave = () => {
// // //     if (!name.trim() || !school.trim() || !className.trim()) return;
    
// // //     setStudent({ 
// // //       name: name.trim(), 
// // //       school: school.trim(), 
// // //       class: className.trim() 
// // //     });
    
// // //     router.replace('/(tabs)/route');
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Add Your Child</Text>
      
// // //       <TextInput
// // //         placeholder="Child's Name"
// // //         value={name}
// // //         onChangeText={setName}
// // //         style={styles.input}
// // //       />
      
// // //       <TextInput
// // //         placeholder="School Name"
// // //         value={school}
// // //         onChangeText={setSchool}
// // //         style={styles.input}
// // //       />
      
// // //       <TextInput
// // //         placeholder="Class"
// // //         value={className}
// // //         onChangeText={setClassName}
// // //         style={styles.input}
// // //       />
      
// // //       <TouchableOpacity style={styles.button} onPress={handleSave}>
// // //         <Text style={styles.buttonText}>Continue</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }