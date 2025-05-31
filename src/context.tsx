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

interface Driver {
  id: string;
  name: string;
  fee: number;
  pickupTime: string;
  dropoffTime: string;
  rating?: number;
  availableLocations?: string[];
}

interface Locations {
  pickup: string;
  dropoff: string;
  school: string;
}

interface AppContextType {
  guardian: Guardian | null;
  setGuardian: (guardian: Guardian | null) => void;
  student: Student | null;
  setStudent: (student: Student | null) => void;
  selectedDriver: Driver | null;
  setSelectedDriver: (driver: Driver | null) => void;
  locations: Locations | null;
  setLocations: (locations: Locations | null) => void;
}

const AppContext = createContext<AppContextType>({
  guardian: null,
  setGuardian: () => {},
  student: null,
  setStudent: () => {},
  selectedDriver: null,
  setSelectedDriver: () => {},
  locations: null,
  setLocations: () => {},
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [guardian, setGuardian] = useState<Guardian | null>(null);
  const [student, setStudent] = useState<Student | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [locations, setLocations] = useState<Locations | null>(null);

  return (
    <AppContext.Provider
      value={{
        guardian,
        setGuardian,
        student,
        setStudent,
        selectedDriver,
        setSelectedDriver,
        locations,
        setLocations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
}

export type { Guardian, Student, Driver, Locations };