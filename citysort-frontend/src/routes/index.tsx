import { useRoutes } from 'react-router-dom';
import CityDataTable from '@/features/misc/routes/CityDataTable';
import { Landing } from '@/features/misc';
import DemoPage from '@/features/payments/page';
import TaskPage from '@/features/tasks/page';
import DashboardPage from '@/features/dashboard/page';

export const AppRoutes = () => {
  const cities = [
    {
      name: 'City 1',
      parameters: ['90', '75', '82', '65', '70', '88', '92', '78', '85', '80'],
    },
    {
      name: 'City 2',
      parameters: ['85', '80', '78', '90', '72', '85', '88', '70', '95', '82'],
    },
    {
      name: 'City 3',
      parameters: ['78', '88', '92', '75', '82', '90', '70', '85', '80', '78'],
    },
  ];

  const commonRoutes = [
    { path: '/', element: <TaskPage /> },
    { path: '/about', element: <Landing /> },
    { path: '/ranking', element: <CityDataTable cities={cities} /> },
    { path: '/table', element: <DemoPage /> },
    { path: '/stats/:city', element: <DashboardPage /> },
  ];
  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
