import React, { createContext, useContext, useState } from 'react';

interface Student {
  name: string;
  class: string;
  school_location: string;
}

interface Route {
  pickup: string;
  school: string;
  dropoff: string;
}

interface Driver {
  name: string;
  route: string;
  pickupTime: string;
  fee: number;
}

interface AppContextType {
  student: Student | null;
  setStudent: (student: Student | null) => void;
  route: Route | null;
  setRoute: (route: Route | null) => void;
  selectedDriver: Driver | null;
  setSelectedDriver: (driver: Driver | null) => void;
}

const AppContext = createContext<AppContextType>({
  student: null,
  setStudent: () => {},
  route: null,
  setRoute: () => {},
  selectedDriver: null,
  setSelectedDriver: () => {},
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [student, setStudent] = useState<Student | null>(null);
  const [route, setRoute] = useState<Route | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  return (
    <AppContext.Provider value={{ student, setStudent, route, setRoute, selectedDriver, setSelectedDriver }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
