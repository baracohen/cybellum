import { Route } from 'app/app.interface';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import DashboardLayout from 'layouts/dashboardLayout/DashboardLayout';
import Error404 from 'pages/error404/Error404';
import Home from 'pages/home/Home';
import Intro from 'pages/intro/Intro';
import Login from 'pages/login/Login';
import { Navigate } from 'react-router-dom';

export const routes: Route[] = [
  {
    path: '/login',
    element: <AuthLayout />,

    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/intro',
    element: <DashboardLayout />,
    children: [
      {
        path: 'intro',
        element: <Intro />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
