import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      <Toaster/>
    </AppProvider>
  );
} 

export default App;
