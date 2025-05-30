import React, { createContext, useContext, useState } from 'react';

interface Guardian {
  name: string;
  phone: string;
}

interface Student {
  name: string;
  school: string;
  class: string;
}

interface Route {
  id: string;
  name: string;
  description: string;
  stops: string[];
  estimatedTime: string;
  fee: number;
}

interface Driver {
  name: string;
  fee: number;
  pickupTime: string;
  dropoffTime: string;
  routeId: string;
}

interface AppContextType {
  guardian: Guardian | null;
  setGuardian: (guardian: Guardian | null) => void;
  student: Student | null;
  setStudent: (student: Student | null) => void;
  selectedRoute: Route | null;
  setSelectedRoute: (route: Route | null) => void;
  selectedDriver: Driver | null;
  setSelectedDriver: (driver: Driver | null) => void;
}

const AppContext = createContext<AppContextType>({
  guardian: null,
  setGuardian: () => {},
  student: null,
  setStudent: () => {},
  selectedRoute: null,
  setSelectedRoute: () => {},
  selectedDriver: null,
  setSelectedDriver: () => {},
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [guardian, setGuardian] = useState<Guardian | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  return (
    <AppContext.Provider
      value={{
        guardian,
        setGuardian,
        student,
        setStudent,
        selectedRoute,
        setSelectedRoute,
        selectedDriver,
        setSelectedDriver,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export type { Route, Driver, Student, Guardian };// import React, { createContext, useContext, useState } from 'react';

// interface Student {
//   name: string;
//   class: string;
//   school_location: string;
// }

// interface Route {
//   pickup: string;
//   school: string;
//   dropoff: string;
// }

// interface Driver {
//   name: string;
//   route: string;
//   pickupTime: string;
//   fee: number;
// }

// interface AppContextType {
//   student: Student | null;
//   setStudent: (student: Student | null) => void;
//   route: Route | null;
//   setRoute: (route: Route | null) => void;
//   selectedDriver: Driver | null;
//   setSelectedDriver: (driver: Driver | null) => void;
// }

// const AppContext = createContext<AppContextType>({
//   student: null,
//   setStudent: () => {},
//   route: null,
//   setRoute: () => {},
//   selectedDriver: null,
//   setSelectedDriver: () => {},
// });

// export function AppContextProvider({ children }: { children: React.ReactNode }) {
//   const [student, setStudent] = useState<Student | null>(null);
//   const [route, setRoute] = useState<Route | null>(null);
//   const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

//   return (
//     <AppContext.Provider value={{ student, setStudent, route, setRoute, selectedDriver, setSelectedDriver }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }
// // import { createContext, useContext, useState } from 'react';
// // import { Driver } from './types';

// // interface Student {
// //   name: string;
// //   className: string;
// //   schoolLocation: string;
// // }

// // interface Route {
// //   pickup: string;
// //   school: string;
// //   dropoff: string;
// // }

// // interface AppContextType {
// //   student: Student | null;
// //   setStudent: (student: Student | null) => void;
// //   route: Route | null;
// //   setRoute: (route: Route | null) => void;
// //   selectedDriver: Driver | null;
// //   setSelectedDriver: (driver: Driver | null) => void;
// // }

// // const AppContext = createContext<AppContextType | undefined>(undefined);

// // export function AppContextProvider({ children }: { children: React.ReactNode }) {
// //   const [student, setStudent] = useState<Student | null>(null);
// //   const [route, setRoute] = useState<Route | null>(null);
// //   const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

// //   return (
// //     <AppContext.Provider value={{ student, setStudent, route, setRoute, selectedDriver, setSelectedDriver }}>
// //       {children}
// //     </AppContext.Provider>
// //   );
// // }

// // export function useAppContext() {
// //   const context = useContext(AppContext);
// //   if (!context) {
// //     throw new Error('useAppContext must be used within an AppContextProvider');
// //   }
// //   return context;
// // }