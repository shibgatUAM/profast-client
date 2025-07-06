import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/Home';
import BeARider from '../pages/BeARider';
import AuthLayout from '../components/layouts/AuthLayout/AuthLayout';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'be-a-rider',
        Component: BeARider,
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);

export default router;
