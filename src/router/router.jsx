import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
