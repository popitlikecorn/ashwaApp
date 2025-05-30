// // App.tsx: Root component with context and notifications
// import { AppContextProvider } from './src/context';
// import RootLayout from './app/_layout';
// import { useEffect } from 'react';
// import { requestNotificationPermissions, scheduleDailyNotifications } from './src/notifications';

// export default function App() {
//   // Initialize notifications
//   useEffect(() => {
//     requestNotificationPermissions().then((granted) => {
//       if (granted) {
//         scheduleDailyNotifications();
//       }
//     });
//   }, []);

//   return (
//     <AppContextProvider>
//       <RootLayout />
//     </AppContextProvider>
//   );
// }
// App.tsx: Root component with context and notifications
// App.tsx
// import { useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import { AppContextProvider } from './src/context';
// import RootLayout from './app/_layout';
// import { requestNotificationPermissions, scheduleDailyNotifications } from './src/notifications';

// // Root component with notification setup
// export default function App() {
//   const router = useRouter(); // Added for consistency, though unused

//   useEffect(() => {
//     // Request notification permissions and schedule daily updates
//     requestNotificationPermissions().then((granted) => {
//       if (granted) scheduleDailyNotifications();
//     });
//   }, [router]); // Added router to dependencies

//   return (
//     <AppContextProvider>
//       <RootLayout />
//     </AppContextProvider>
//   );
// }
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { AppContextProvider } from './src/context';
import RootLayout from './app/_layout';
import { requestNotificationPermissions, scheduleDailyNotifications } from './src/notifications';

// Root component with notification setup
export default function App() {
  const router = useRouter();

  useEffect(() => {
    console.log('App: Initializing notifications');
    requestNotificationPermissions().then((granted) => {
      if (granted) {
        console.log('App: Notifications granted, scheduling');
        scheduleDailyNotifications();
      }
    });
  }, []);

  useEffect(() => {
    console.log('App: Ensuring signup');
    router.replace('/(tabs)/signup');
  }, [router]);

  return (
    <AppContextProvider>
      <RootLayout />
    </AppContextProvider>
  );
}