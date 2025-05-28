import { AppContextProvider } from './src/context';
import RootLayout from './app/_layout';

export default function App() {
  return (
    <AppContextProvider>
      <RootLayout />
    </AppContextProvider>
  );
}
