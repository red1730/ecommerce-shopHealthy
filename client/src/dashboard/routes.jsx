import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function RouterDashBoard() {
  const routes = useRoutes([
    {
      path: 'admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/admin/dashboard/app" />, index: true},
        { path: '/admin/dashboard/app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
      ],
    },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/admin/dashboard/app" />, index: true },
    //     // { path: '404', element: <Page404 /> },
    //     // { path: '*', element: <Navigate to="/admin/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
